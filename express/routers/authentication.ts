import { Router, json } from "express";
import { genSalt, hash } from "bcrypt";
import jwt from 'jsonwebtoken';

import { TUser, UserModel } from "../database.js";


const router = Router();
router.use(json())


router.post('/login', async (req, res) => {
    let payload = req.body

    let record = await req.database.users.findOne({
        login: payload.nickname
    })

    if (record) {
        let user = UserModel.fromRecord(record as TUser)
        if (await user.validate(payload.password)) {
            let token = jwt.sign({ login: payload.nickname }, req.config_secret)

            return res
                   .cookie('token', token, { httpOnly: true })
                   .location('/')
                   .redirect('/')
        }
    }

    res.status(401).json({ message: 'unauthorized' })
})


router.post('/register', async (req, res) => {
    let payload = req.body

    let record = await req.database.users.findOne({
        login: payload.nickname
    })

    if (record) return res.status(409).json({ 'message': 'already exists' })

    let salt = await genSalt()
    let hashedPwd = await hash(payload.password, salt)
    let user = new UserModel(payload.nickname, hashedPwd, salt)
    let token = jwt.sign({ login: payload.nickname }, req.config_secret)

    req.database.users.insertOne(user)

    return res
        .cookie('token', token, { httpOnly: true })
        .location('/')
        .redirect('/')
})


export default {
    prefix: '/auth',
    router: router
}