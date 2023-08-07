import Event from '../models/event.model.js'

export const getEvents = async (req, res) => {

  const events = await Event.find({
    user: req.user.id
  }).populate('user')
  res.json(events)
}

export const createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body

    const newEvent = new Event({
      title,
      description,
      date,
      user: req.user.id
    })
    const savedEvent = await newEvent.save()
    res.json(savedEvent)
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal!" })
  }
}

export const getEvent = async (req, res) => {
  const event = await Event.findById(req.params.id).populate('user')
  if (!event) return res.status(404).json({ message: "Evento no encontrado" })
  res.json(event)
}

export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id)
    if (!event) return res.status(404).json({ message: "Evento no encontrado" })
    return res.sendStatus(204)
  } catch (error) {
    return res.status(404).json({ message: "Evento no encontrado" })
  }
}

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!event) return res.status(404).json({ message: "Evento no encontrado" })
    res.json(event)
  } catch (error) {
    return res.status(404).json({ message: "Evento no encontrado" })
  }
}
