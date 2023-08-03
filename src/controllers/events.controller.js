import Event from '../models/event.model.js'

export const getEvents = async (req, res) => {

  const events = await Event.find({
    user: req.user.id
  }).populate('user')
  res.json(events)
}

export const createEvent = async (req, res) => {
  const { title, description, date } = req.body

  const newEvent = new Event({
    title,
    description,
    date,
    user: req.user.id
  })
  const savedEvent = await newEvent.save()
  res.json(savedEvent)
}

export const getEvent = async (req, res) => {
  const event = await Event.findById(req.params.id).populate('user')
  if (!event) return res.status(404).json({ message: "Evento no encontrado" })
  res.json(event)
}

export const deleteEvent = async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id)
  if (!event) return res.status(404).json({ message: "Evento no encontrado" })
  res.json(event)
}

export const updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  if (!event) return res.status(404).json({ message: "Evento no encontrado" })
  res.json(event)
}
