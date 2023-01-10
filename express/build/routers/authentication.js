var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router, json } from "express";
import { genSalt, hash } from "bcrypt";
import jwt from 'jsonwebtoken';
import { UserModel } from "../database.js";
const router = Router();
router.use(json());
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let payload = req.body;
    if (payload.password.length < 3 || payload.password.length > 20) {
    }
    let record = yield ((_a = req.database) === null || _a === void 0 ? void 0 : _a.users.findOne({
        login: payload.login
    }));
    if (record) {
        let user = UserModel.fromRecord(record);
        if (yield user.validate(payload.password)) {
            let token = jwt.sign({ login: payload.login }, req.config_secret);
            return res
                .cookie('token', token, { httpOnly: true })
                .location('/')
                .redirect('/');
        }
    }
    res.status(401).json({ message: 'unauthorized' });
}));
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    let payload = req.body;
    if (payload.password.length < 3 || payload.password.length > 20) {
    }
    let record = yield ((_b = req.database) === null || _b === void 0 ? void 0 : _b.users.findOne({
        login: payload.login
    }));
    if (record)
        return res.status(409).json({ 'message': 'already exists' });
    let salt = yield genSalt();
    let hashedPwd = yield hash(payload.password, salt);
    let user = new UserModel(payload.login, hashedPwd, salt);
    let token = jwt.sign({ login: payload.login }, req.config_secret);
    req.database.users.insertOne(user);
    return res
        .cookie('token', token, { httpOnly: true })
        .location('/')
        .redirect('/');
}));
router.get('/logout', (req, res) => {
    if (req.user)
        res.clearCookie('token');
    return res.
        location('/').
        redirect('/');
});
export default {
    prefix: '/auth',
    router: router
};
