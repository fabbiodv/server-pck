import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getEvents, createEvent, getEvent, updateEvent, deleteEvent } from '../controllers/events.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createEventSchema } from '../schemas/event.schema.js'

const router = Router()

router.get('/events', authRequired, getEvents)

router.get('/events/:id', authRequired, getEvent)

router.post('/events', authRequired, validateSchema(createEventSchema), createEvent)

router.delete('/events/:id', authRequired, deleteEvent)

router.put('/events/:id', authRequired, updateEvent)


export default router