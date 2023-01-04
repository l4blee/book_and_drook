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
exports.UserModel = exports.Mongo = void 0;
const mongodb_1 = require("mongodb");
const bcrypt_1 = require("bcrypt");
// MongoDB class itself
class Mongo {
    constructor(connectionURL) {
        console.log(`Connecting to Mongo via ${connectionURL}`);
        this.client = new mongodb_1.MongoClient(connectionURL);
        this.users = this.client.db('platform').collection('users');
        this.libraries = this.client.db('platform').collection('libraries');
        this.playbill = this.client.db('platform').collection('playbill');
        console.log('Successfully initialized MongoDB instance, proceeding...');
    }
}
exports.Mongo = Mongo;
class UserModel {
    constructor(login, hashedPassword, salt, donated) {
        this.login = login;
        this.hashedPassword = hashedPassword;
        this.salt = salt;
        this.donated = donated || 0;
    }
    static fromRecord(record) {
        return new UserModel(record.login, record.hashed_password, record.salt, record.donated);
    }
    validate(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, bcrypt_1.hash)(password, this.salt)) === this.hashedPassword;
        });
    }
}
exports.UserModel = UserModel;
exports.default = (connectionURL) => {
    return new Mongo(connectionURL);
};
