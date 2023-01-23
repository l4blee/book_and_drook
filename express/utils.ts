import { Request, Express, Response, NextFunction } from "express";
import { readdir } from "fs/promises";
import { TUser, UserModel } from "./database.js";
import { JwtPayload, verify } from "jsonwebtoken";


async function loadRouters(app: Express) {
    let files = await readdir('routers/')
    console.log(`[Server]: Loading external routers...\n\t${files.length} files found: ${files.join(', ')}`)

    var loaded: string[] = []
    await Promise.all(files.map(async (stem) => {
        let module = (await import('./routers/' + stem.slice(0, -3) + '.js')).default;

        loaded.push(stem.slice(0, -3))
        app.use(module.prefix || '/', module.router)
    }))

    console.log(`[Server]: Loaded ${loaded.length} routers.\n\tAvailable routers: ${loaded.join('; ')}\n`)
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
            parsed = verify(token, req.config_secret) as JWTUser
    } catch (err) { }

    let user = undefined
    if (parsed)
        user = UserModel.fromRecord(
            (await req.database.users.findOne({ login: parsed.login })) as TUser
        )

    return user
}


// Decorator to prevent unauthed from proceeding to page
async function auth(req: Request, res: Response, next: NextFunction) {
    let user = await parseUser(req)
    if (user === undefined) {
        res.send(500)
    }

    next()
}

export { loadRouters, parseUser, auth }