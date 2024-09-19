const express = require('express');
const Job = require('../models/Job');
const User = require('../models/User');
const router = express.Router();

// Post a job
router.post('/post', async (req, res) => {
  const { employerId, title, description, skillsRequired } = req.body;
  
  const job = new Job({ employerId, title, description, skillsRequired });
  await job.save();
  
  res.status(201).json({ message: 'Job posted successfully' });
});

// Match resumes to job skills
router.get('/match/:jobId', async (req, res) => {
  const job = await Job.findById(req.params.jobId);
  
  const users = await User.find({ role: 'job_seeker' });
  const matchedUsers = users.filter(user => 
    job.skillsRequired.every(skill => user.skills.includes(skill))
  );
  
  res.json({ matchedUsers });
});

module.exports = router;
