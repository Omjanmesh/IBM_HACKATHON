const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  employerId: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  skillsRequired: [String], // Skills needed for the job
  applicants: [mongoose.Schema.Types.ObjectId] // Users who applied
});

module.exports = mongoose.model('Job', JobSchema);
