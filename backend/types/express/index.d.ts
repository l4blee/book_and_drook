import { Secret } from 'jsonwebtoken'
import { Mongo, UserModel } from './../../database'


declare global {
    namespace Express {
        export interface Request {
            database: Mongo
            config_secret: Secret
            user?: UserModel
        }
    }
}
