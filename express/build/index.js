var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import dotenv from 'dotenv';
import mongo from './database.js';
import { handler } from './front/handler.js';
import { loadRouters, parseUser } from './utils.js';
dotenv.config();
console.clear();
const app = express();
const secret = '02f24e90200099ec055f17819b97910a67571a11d762df36';
const database = mongo(process.env.DB_URL);
app.use(cookieParser());
app.use(compression());
if (process.env.NODE_ENV !== 'production') {
    app.use((req, _, next) => {
        console.log(`[${new Date().toUTCString()}] "${req.method} HTTP/${req.httpVersion}" @ ${req.hostname} ← ${req.ip} || ${req.path}`);
        next();
    });
}
app.use((req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    req.database = database;
    req.config_secret = secret;
    req.user = yield parseUser(req);
    next();
}));
await loadRouters(app);
app.use(handler);
app.listen(5001, () => {
    console.log('[Server]: Running at http://localhost:5001');
});
