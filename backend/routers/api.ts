import { Router } from 'express';
import { TLibrary, TPlaybill } from '../database';

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
    (await data?.toArray())?.forEach((doc) => {
        output.push({
            title: (<TLibrary>doc).title,
            address: (<TLibrary>doc).address,
            booklist: (<TLibrary>doc).booklist,
            image: (<TLibrary>doc).image
        });
    })

    res.json(output)
})


router.get('/get_playbill', async (req, res) => {
    let data = req.database?.playbill.find({});

    let output: object[] = [];
    (await data?.toArray())?.forEach((doc) => {
        output.push({
            date: (<TPlaybill>doc).date,
            time: (<TPlaybill>doc).time,
            title: (<TPlaybill>doc).title,
            place: (<TPlaybill>doc).place,
            image: (<TPlaybill>doc).image
        })
    })

    res.send(output)
})


export default {
    prefix: '/api',
    router: router
};