var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { readdir } from "fs/promises";
import { UserModel } from "./database.js";
import { verify } from "jsonwebtoken";
function loadRouters(app) {
    return __awaiter(this, void 0, void 0, function* () {
        let files = yield readdir('routers/');
        console.log(`[Server]: Loading external routers...\n\t${files.length} files found: ${files.join(', ')}`);
        var loaded = [];
        yield Promise.all(files.map((stem) => __awaiter(this, void 0, void 0, function* () {
            let module = (yield import('./routers/' + stem.slice(0, -3) + '.js')).default;
            loaded.push(stem.slice(0, -3));
            app.use(module.prefix || '/', module.router);
        })));
        console.log(`[Server]: Loaded ${loaded.length} routers.\n\tAvailable routers: ${loaded.join('; ')}\n`);
    });
}
function parseUser(req) {
    return __awaiter(this, void 0, void 0, function* () {
        let token = req.cookies.token;
        let parsed = undefined;
        try {
            if (token)
                parsed = verify(token, req.config_secret);
        }
        catch (err) { }
        let user = undefined;
        if (parsed)
            user = UserModel.fromRecord((yield req.database.users.findOne({ login: parsed.login })));
        return user;
    });
}
function auth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield parseUser(req);
        if (user === undefined) {
            res.send(500);
        }
        next();
    });
}
export { loadRouters, parseUser, auth };
