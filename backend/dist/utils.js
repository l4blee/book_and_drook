"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.parseUser = exports.loadRouters = void 0;
const promises_1 = require("fs/promises");
const jsonwebtoken_1 = require("jsonwebtoken");
const database_1 = require("./database");
function loadRouters(app) {
    return __awaiter(this, void 0, void 0, function* () {
        let files = yield (0, promises_1.readdir)('routers/');
        console.log(`[Server]: Loading external routers...\n\tFiles found: ${files.join(', ')}`);
        var loaded = [];
        yield Promise.all(files.map((stem) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            let module = (yield (_a = './routers/' + stem.slice(0, -3), Promise.resolve().then(() => __importStar(require(_a))))).default;
            loaded.push(stem.slice(0, -3));
            app.use(module.prefix, module.router);
        })));
        console.log(`[Server]: Loaded ${loaded.length} routers.\n\tAvailable routers: ${loaded.join('; ')}`);
    });
}
exports.loadRouters = loadRouters;
function parseUser(req) {
    return __awaiter(this, void 0, void 0, function* () {
        let token = req.cookies.token;
        let parsed = undefined; // user JWTPayload only has 'login' field in it, along with 'iat' as default JWT implementation feature
        try {
            if (token)
                parsed = (0, jsonwebtoken_1.verify)(token, req.config_secret);
        }
        catch (err) { }
        let user = undefined;
        if (parsed)
            user = database_1.UserModel.fromRecord((yield req.database.users.findOne({ login: parsed.login })));
        return user;
    });
}
exports.parseUser = parseUser;
function auth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield parseUser(req);
        if (user === undefined) {
            res.send(500);
        }
        next();
    });
}
exports.auth = auth;
