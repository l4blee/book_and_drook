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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/get_user_data', (req, res) => {
    var _a, _b;
    if (req.user === undefined) {
        res.status(401).json({ message: 'unauthorized' });
        return;
    }
    res.json({
        nickname: (_a = req.user) === null || _a === void 0 ? void 0 : _a.login,
        donated: (_b = req.user) === null || _b === void 0 ? void 0 : _b.donated
    });
});
router.get('/get_libraries', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let data = (_a = req.database) === null || _a === void 0 ? void 0 : _a.libraries.find({});
    let output = [];
    (_b = (yield (data === null || data === void 0 ? void 0 : data.toArray()))) === null || _b === void 0 ? void 0 : _b.forEach((doc) => {
        output.push({
            title: doc.title,
            address: doc.address,
            booklist: doc.booklist,
            image: doc.image
        });
    });
    res.json(output);
}));
router.get('/get_playbill', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    let data = (_c = req.database) === null || _c === void 0 ? void 0 : _c.playbill.find({});
    let output = [];
    (_d = (yield (data === null || data === void 0 ? void 0 : data.toArray()))) === null || _d === void 0 ? void 0 : _d.forEach((doc) => {
        output.push({
            date: doc.date,
            time: doc.time,
            title: doc.title,
            place: doc.place,
            image: doc.image
        });
    });
    res.send(output);
}));
exports.default = {
    prefix: '/api',
    router: router
};
