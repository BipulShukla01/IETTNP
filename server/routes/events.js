import express from 'express';

const router = express.Router();

// Mock event data
const events = [
  {
    id: '1',
    title: 'Resume Building Workshop',
    date: '2023-09-25',
    time: '10:00 AM - 12:00 PM',
    location: 'Seminar Hall A',
    description: 'Learn how to create an impressive resume that stands out to recruiters.',
    organizer: 'Training & Placement Cell',
    type: 'Workshop',
    registrationRequired: true,
    registrationDeadline: '2023-09-23',
    capacity: 50,
    registeredUsers: []
  },
  {
    id: '2',
    title: 'Mock Interview Session',
    date: '2023-10-05',
    time: '2:00 PM - 5:00 PM',
    location: 'Training Center',
    description: 'Practice your interview skills with HR professionals from leading companies.',
    organizer: 'Training & Placement Cell',
    type: 'Interview Practice',
    registrationRequired: true,
    registrationDeadline: '2023-10-03',
    capacity: 30,
    registeredUsers: []
  },
  {
    id: '3',
    title: 'Technical Aptitude Test',
    date: '2023-10-10',
    time: '9:00 AM - 11:00 AM',
    location: 'Computer Lab',
    description: 'Test your technical knowledge and problem-solving abilities.',
    organizer: 'Training & Placement Cell',
    type: 'Assessment',
    registrationRequired: true,
    registrationDeadline: '2023-10-08',
    capacity: 100,
    registeredUsers: []
  },
  {
    id: '4',
    title: 'Industry Expert Talk',
    date: '2023-10-15',
    time: '3:00 PM - 5:00 PM',
    location: 'Auditorium',
    description: 'Insights from industry leaders on current trends and career opportunities.',
    organizer: 'Training & Placement Cell',
    type: 'Seminar',
    registrationRequired: true,
    registrationDeadline: '2023-10-13',
    capacity: 200,
    registeredUsers: []
  }
];

// @route   GET api/events
// @desc    Get all events
// @access  Public
router.get('/', (req, res) => {
  res.json(events);
});

// @route   GET api/events/:id
// @desc    Get event by ID
// @access  Public
router.get('/:id', (req, res) => {
  const event = events.find(event => event.id === req.params.id);
  
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }
  
  res.json(event);
});

// @route   POST api/events
// @desc    Create an event
// @access  Private (Admin only)
router.post('/', (req, res) => {
  const {
    title,
    date,
    time,
    location,
    description,
    organizer,
    type,
    registrationRequired,
    registrationDeadline,
    capacity
  } = req.body;

  // Simple validation
  if (!title || !date || !time || !location) {
    return res.status(400).json({ message: 'Please enter all required fields' });
  }

  // Create new event
  const newEvent = {
    id: (events.length + 1).toString(),
    title,
    date,
    time,
    location,
    description,
    organizer: organizer || 'Training & Placement Cell',
    type: type || 'Other',
    registrationRequired: registrationRequired !== undefined ? registrationRequired : true,
    registrationDeadline: registrationDeadline || date,
    capacity: capacity || 50,
    registeredUsers: []
  };

  // Add event to array (in a real app, this would be saved to a database)
  events.push(newEvent);

  res.status(201).json({
    message: 'Event created successfully',
    event: newEvent
  });
});

// @route   PUT api/events/:id
// @desc    Update an event
// @access  Private (Admin only)
router.put('/:id', (req, res) => {
  const eventIndex = events.findIndex(event => event.id === req.params.id);
  
  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' });
  }
  
  // Update event data
  events[eventIndex] = {
    ...events[eventIndex],
    ...req.body
  };
  
  res.json({
    message: 'Event updated successfully',
    event: events[eventIndex]
  });
});

// @route   DELETE api/events/:id
// @desc    Delete an event
// @access  Private (Admin only)
router.delete('/:id', (req, res) => {
  const eventIndex = events.findIndex(event => event.id === req.params.id);
  
  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' });
  }
  
  // Remove event from array
  events.splice(eventIndex, 1);
  
  res.json({ message: 'Event deleted successfully' });
});

// @route   POST api/events/:id/register
// @desc    Register for an event
// @access  Private
router.post('/:id/register', (req, res) => {
  const { userId } = req.body;
  
  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }
  
  const eventIndex = events.findIndex(event => event.id === req.params.id);
  
  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' });
  }
  
  const event = events[eventIndex];
  
  // Check if registration is required
  if (!event.registrationRequired) {
    return res.status(400).json({ message: 'Registration is not required for this event' });
  }
  
  // Check if registration deadline has passed
  const today = new Date().toISOString().split('T')[0];
  if (event.registrationDeadline < today) {
    return res.status(400).json({ message: 'Registration deadline has passed' });
  }
  
  // Check if event is at capacity
  if (event.registeredUsers.length >= event.capacity) {
    return res.status(400).json({ message: 'Event is at full capacity' });
  }
  
  // Check if user is already registered
  if (event.registeredUsers.includes(userId)) {
    return res.status(400).json({ message: 'You are already registered for this event' });
  }
  
  // Register user for event
  event.registeredUsers.push(userId);
  
  res.json({
    message: 'Successfully registered for the event',
    event
  });
});

export default router;