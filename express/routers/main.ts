import { Router } from 'express';

const router = Router()

// Filtering protected Routes and releasing execution if available
const protectedRoutes = ['logout']
router.get('/:path?', (req, res, next) => {
    let path = req.params.path || ''
    if (protectedRoutes.includes(path) && !req.user) {
        return res
               .location('/login')
               .redirect('/login')
    }

    return next()
})


router.get('/logout', (req, res) => {
    if (req.user) res.clearCookie('token')

    return res
           .location('/')
           .redirect('/')
})


export default {
    prefix: '/',
    router: router
};