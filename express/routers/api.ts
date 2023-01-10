import { Router } from 'express';
import { TLibrary, TPlaybill } from '../database.js';

const router = Router()


router.get('/get_user_data', (req, res) => {
    if (req.user === undefined) {
        res.status(401).json({ message: 'unauthorized' })
        return
    }

    res.json({
        nickname: req.user?.login,
        donated: req.user?.donated
    })
})


router.get('/get_libraries', async (req, res) => {
    let data = req.database?.libraries.find({});

    let output: object[] = [];
    (await data?.toArray())?.forEach((doc: TLibrary) => {
        output.push({
            title: doc.title,
            address: doc.address,
            booklist: doc.booklist,
            image: doc.image
        });
    })

    res.json(output)
})


router.get('/get_playbill', async (req, res) => {
    let data = req.database?.playbill.find({});

    let output: object[] = [];
    (await data?.toArray())?.forEach((doc: TPlaybill) => {
        output.push({
            date: doc.date,
            time: doc.time,
            title: doc.title,
            place: doc.place,
            image: doc.image
        })
    })

    res.send(output)
})


export default {
    prefix: '/api',
    router: router
};