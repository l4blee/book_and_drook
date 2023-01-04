"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./database"));
const utils_1 = require("./utils");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const secret = '02f24e90200099ec055f17819b97910a67571a11d762df36';
const database = (0, database_1.default)(process.env.DB_URL);
// Configuration and static files serving
(0, utils_1.loadRouters)(app);
app.use('/assets', express_1.default.static('../frontend/dist/assets'));
app.use((0, cookie_parser_1.default)());
app.use((0, compression_1.default)());
app.use((req, _, next) => { console.log(`[${new Date().toUTCString()}] "${req.method} HTTP/${req.httpVersion}" @ ${req.hostname} ← ${req.ip} || ${req.path}`); next(); });
// Attaching necessary stuff, not needed for static files, to a request object
app.use((req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    req.database = database;
    req.config_secret = secret;
    req.user = yield (0, utils_1.parseUser)(req);
    next();
}));
// Main route
const availables = '(libraries|login|monster|playbill|register|support)';
app.get(`/:path${availables}?`, (_, res) => {
    (0, fs_1.readFile)(path_1.default.join('../frontend/dist/index.html'), 'utf-8', (err, data) => {
        if (err)
            res.status(500).send('Internal Error');
        res.send(data);
    });
});
app.listen(5001, () => {
    console.log('Running at http://localhost:5001');
});
