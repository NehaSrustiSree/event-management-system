import express from 'express';
import Event from '../models/Event.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all events
router.get('/', auth, async (req, res) => {
  try {
    const events = await Event.find()
      .populate('creator', 'name email')
      .sort({ date: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' });
  }
});

// Create new event
router.post('/', auth, async (req, res) => {
  try {
    const event = new Event({
      ...req.body,
      creator: req.user.userId
    });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event' });
  }
});

// Update event
router.put('/:id', auth, async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params.id, creator: req.user.userId });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    
    Object.assign(event, req.body);
    await event.save();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error updating event' });
  }
});

// Delete event
router.delete('/:id', auth, async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({ 
      _id: req.params.id, 
      creator: req.user.userId 
    });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event' });
  }
});

export default router;