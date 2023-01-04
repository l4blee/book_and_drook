import { Router, json } from "express";
import { TUser, UserModel } from "../database";
import { sign } from 'jsonwebtoken';
import { genSalt, hash } from "bcrypt";


const router = Router();
router.use(json())


interface AuthPayload {
    login: string
    password: string
    origin?: string
}


router.post('/login', async (req, res) => {
    let payload: AuthPayload = req.body

    if (payload.password.length < 3 || payload.password.length > 20) {
        // [TODO]: server-side pwd length check
    }

    let record = await req.database?.users.findOne({
        login: payload.login
    })

    if (record) {
        let user = UserModel.fromRecord(record as TUser)
        if (await user.validate(payload.password)) {
            let token = sign({ login: payload.login }, req.config_secret)

            return res
                .cookie('token', token, { httpOnly: true })
                .location('/')
                .redirect('/')
        }
    }

    res.status(401).json({ message: 'unauthorized' })
})


router.post('/register', async (req, res) => {
    let payload: AuthPayload = req.body
    if (payload.password.length < 3 || payload.password.length > 20) {
        // [TODO]: server-side pwd length check
    }

    let record = await req.database?.users.findOne({
        login: payload.login
    })

    if (record) return res.status(409).json({ 'message': 'already exists' })

    let salt = await genSalt()
    let hashedPwd = await hash(payload.password, salt)
    let user = new UserModel(payload.login, hashedPwd, salt)
    let token = sign({ login: payload.login }, req.config_secret)

    req.database.users.insertOne(user)

    return res
        .cookie('token', token, { httpOnly: true })
        .location('/')
        .redirect('/')
})


router.get('/logout', (req, res) => {
    if (req.user) res.clearCookie('token')

    return res.
        location('/').
        redirect('/')
})


export default {
    prefix: '/auth',
    router: router
}