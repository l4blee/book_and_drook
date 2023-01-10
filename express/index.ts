import express, { Express } from 'express';
import { Secret } from 'jsonwebtoken'
import cookieParser from 'cookie-parser';
import compression from 'compression';
import dotenv from 'dotenv'

import mongo from './database.js'

/* @ts-ignore */
import { handler } from './front/handler.js';
import { loadRouters, parseUser } from './utils.js';

dotenv.config();

console.clear();
const app: Express = express();
const secret = '02f24e90200099ec055f17819b97910a67571a11d762df36' as Secret
const database = mongo(process.env.DB_URL as string);

app.use(cookieParser());
app.use(compression());

if (process.env.NODE_ENV !== 'production') {
    app.use((req, _, next) => {
        console.log(`[${new Date().toUTCString()}] "${req.method} HTTP/${req.httpVersion}" @ ${req.hostname} ← ${req.ip} || ${req.path}`);
        next();
    })
}


// Serve Svelte files here
const available = ['libraries', 'login', 'monster', 'playbill', 'register', 'support']
app.get(`/:path(${available.join('|')})?`, handler);

app.use(async (req, _, next) => {
    req.database = database
    req.config_secret = secret
    req.user = await parseUser(req)

    next()
})

/* @ts-ignore */
await loadRouters(app);

app.listen(5001, () => {
    console.log('[Server]: Running at http://localhost:5001');
})