import { Secret } from "jsonwebtoken"
import { Mongo, UserModel } from "../../database"

declare global {
    namespace Express {
      export interface Request {
        user?: UserModel
        config_secret: Secret
        database: Mongo
      }
    }
  }