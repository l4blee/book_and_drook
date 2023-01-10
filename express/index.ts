import express, { Express } from 'express';
import { Secret } from 'jsonwebtoken'
import cookieParser from 'cookie-parser';
import compression from 'compression';
import dotenv from 'dotenv'

import mongo from './database.js'

/* @ts-ignore */
import { handler } from './front/handler.js';
import { loadRouters, parseUser } from './utils.js';

dotenv.config()

const app: Express = express();
const secret = '02f24e90200099ec055f17819b97910a67571a11d762df36' as Secret
const database = mongo(process.env.DB_URL as string);

loadRouters(app);

app.use(cookieParser());
app.use(compression());

app.use((req, _, next) => {
    console.log(`[${new Date().toUTCString()}] "${req.method} HTTP/${req.httpVersion}" @ ${req.hostname} ← ${req.ip} || ${req.path}`);
    next();
})

console.log(handler);
app.use(handler);  // Serve Svelte

app.use(async (req, _, next) => {
    req.database = database
    req.config_secret = secret
    req.user = await parseUser(req)

    next()
})

app.listen(5001, () => {
    console.log('Running at http://localhost:5001');
})