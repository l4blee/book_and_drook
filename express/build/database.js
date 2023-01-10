var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MongoClient } from 'mongodb';
import { hash } from 'bcrypt';
class Mongo {
    constructor(connectionURL) {
        console.log(`[Database]: Connecting to Mongo using URL:\n\t${connectionURL}`);
        this.client = new MongoClient(connectionURL);
        this.users = this.client.db('platform').collection('users');
        this.libraries = this.client.db('platform').collection('libraries');
        this.playbill = this.client.db('platform').collection('playbill');
        console.log('\tSuccessfully initialized MongoDB instance\n');
    }
}
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
            return (yield hash(password, this.salt)) === this.hashedPassword;
        });
    }
}
export default (connectionURL) => {
    return new Mongo(connectionURL);
};
export { Mongo, UserModel };
