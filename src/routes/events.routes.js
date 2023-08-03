import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getEvents, createEvent, getEvent, updateEvent, deleteEvent } from '../controllers/events.controller.js'


const router = Router()

router.get('/events', authRequired, getEvents)

router.get('/events/:id', authRequired, getEvent)

router.post('/events', authRequired, createEvent)

router.delete('/events/:id', authRequired, deleteEvent)

router.put('/events/:id', authRequired, updateEvent)


export default router