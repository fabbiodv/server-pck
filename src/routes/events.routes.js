import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

router.get('/events', authRequired, (req, res) => res.send('tasks'))


export default router