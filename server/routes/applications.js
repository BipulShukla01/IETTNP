import express from 'express';

const router = express.Router();

// Mock application data
const applications = [
  {
    id: '1',
    jobId: '1',
    userId: '1',
    status: 'shortlisted',
    appliedDate: '2023-09-15',
    resume: 'resume.pdf',
    coverLetter: 'I am writing to express my interest in the Software Engineer position at Tech Solutions Inc.',
    feedback: 'Good technical skills, proceed to interview round.'
  },
  {
    id: '2',
    jobId: '2',
    userId: '1',
    status: 'interview_scheduled',
    appliedDate: '2023-09-12',
    resume: 'resume.pdf',
    coverLetter: 'I am excited to apply for the Data Analyst position at Data Insights Ltd.',
    feedback: 'Strong analytical skills, scheduled for interview on October 5, 2023.'
  },
  {
    id: '3',
    jobId: '3',
    userId: '1',
    status: 'applied',
    appliedDate: '2023-09-10',
    resume: 'resume.pdf',
    coverLetter: 'I am interested in the Product Manager position at Innovation Systems.',
    feedback: ''
  }
];

// @route   GET api/applications
// @desc    Get all applications (for admin) or user's applications
// @access  Private
router.get('/', (req, res) => {
  // In a real app, we would filter based on the authenticated user
  // For now, we'll return all applications
  res.json(applications);
});

// @route   GET api/applications/:id
// @desc    Get application by ID
// @access  Private
router.get('/:id', (req, res) => {
  const application = applications.find(app => app.id === req.params.id);
  
  if (!application) {
    return res.status(404).json({ message: 'Application not found' });
  }
  
  res.json(application);
});

// @route   POST api/applications
// @desc    Create an application
// @access  Private
router.post('/', (req, res) => {
  const { jobId, userId, resume, coverLetter } = req.body;

  // Simple validation
  if (!jobId || !userId) {
    return res.status(400).json({ message: 'Please enter all required fields' });
  }

  // Check if user has already applied for this job
  const existingApplication = applications.find(
    app => app.jobId === jobId && app.userId === userId
  );
  
  if (existingApplication) {
    return res.status(400).json({ message: 'You have already applied for this job' });
  }

  // Create new application
  const newApplication = {
    id: (applications.length + 1).toString(),
    jobId,
    userId,
    status: 'applied',
    appliedDate: new Date().toISOString().split('T')[0],
    resume: resume || 'resume.pdf',
    coverLetter: coverLetter || '',
    feedback: ''
  };

  // Add application to array (in a real app, this would be saved to a database)
  applications.push(newApplication);

  res.status(201).json({
    message: 'Application submitted successfully',
    application: newApplication
  });
});

// @route   PUT api/applications/:id
// @desc    Update application status (for recruiters)
// @access  Private (Recruiter only)
router.put('/:id', (req, res) => {
  const applicationIndex = applications.findIndex(app => app.id === req.params.id);
  
  if (applicationIndex === -1) {
    return res.status(404).json({ message: 'Application not found' });
  }
  
  // Update application data
  applications[applicationIndex] = {
    ...applications[applicationIndex],
    ...req.body
  };
  
  res.json({
    message: 'Application updated successfully',
    application: applications[applicationIndex]
  });
});

// @route   DELETE api/applications/:id
// @desc    Withdraw an application
// @access  Private
router.delete('/:id', (req, res) => {
  const applicationIndex = applications.findIndex(app => app.id === req.params.id);
  
  if (applicationIndex === -1) {
    return res.status(404).json({ message: 'Application not found' });
  }
  
  // Remove application from array
  applications.splice(applicationIndex, 1);
  
  res.json({ message: 'Application withdrawn successfully' });
});

export default router;