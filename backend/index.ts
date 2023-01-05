import express, { Express } from 'express';
import compression from 'compression';
import { readFile } from 'fs';
import { Secret } from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import mongo from './database';
import { loadRouters, parseUser } from './utils';

dotenv.config()

const app: Express = express()
const secret = '02f24e90200099ec055f17819b97910a67571a11d762df36' as Secret
const database = mongo(process.env.DB_URL as string)

// Configuration and static files serving
loadRouters(app)
app.use('/assets', express.static('../frontend/dist/assets'))
app.use(cookieParser())
app.use(compression())
app.use(
    (req, _, next) => { console.log(`[${new Date().toUTCString()}] "${req.method} HTTP/${req.httpVersion}" @ ${req.hostname} ← ${req.ip} || ${req.path}`); next() }
)

// Attaching necessary stuff, not needed for static files, to a request object
app.use(async (req, _, next) => {
    req.database = database
    req.config_secret = secret
    req.user = await parseUser(req)

    next()
})

// Main route
const availables = '(libraries|login|monster|playbill|register|support)'
app.get(`/:path${availables}?`, (_, res) => {
    readFile(path.join('../frontend/dist/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(`[Server]: Error occured: ${err}`)
            res.status(500).send('Internal Error')
        }

        res.send(data)
    })
})


app.listen(5001, () => {
    console.log('Running at http://localhost:5001');
})
