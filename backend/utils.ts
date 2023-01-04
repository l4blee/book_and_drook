import { Express, NextFunction, Request, Response } from "express";
import { readdir } from "fs";
import { JwtPayload, verify } from "jsonwebtoken";
import { TUser, UserModel } from "./database";


function loadRouters(app: Express) {
    readdir('./routers/', async (_, files) => {
        var loaded: string[] = []

        await Promise.all(files.map(async (stem) => {
            let module = (await import('./routers/' + stem.slice(0, -3))).default;

            loaded.push(stem.slice(0, -3))
            app.use(module.prefix, module.router)
        }))

        console.log(`[Server]: Loaded ${loaded.length} routers.\nAvailable routers: ${loaded.join('; ')}`)
    })
}

interface JWTUser extends JwtPayload {
    login: string
    iat: number
}

async function parseUser(req: Request) {
    let token = req.cookies.token
    let parsed: JWTUser | undefined = undefined  // user JWTPayload only has 'login' field in it, along with 'iat' as default JWT implementation feature
    try {
        if (token)
            parsed = verify(token as string, req.config_secret) as JWTUser
    } catch (err) { }

    let user = undefined
    if (parsed)
        user = UserModel.fromRecord(
            (await req.database.users.findOne({ login: parsed.login })) as TUser
        )

    return user
}


async function auth(req: Request, res: Response, next: NextFunction) {
    let user = await parseUser(req)
    if (user === undefined) {
        res.send(500)
    }

    next()
}


export { loadRouters, parseUser, auth }