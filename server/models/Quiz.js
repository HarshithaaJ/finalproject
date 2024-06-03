const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [{ type: String, required: true }],
  answer: { type: String },
  type: { type: String, enum: ['Q&A', 'Poll'], required: true },
  timer: { type: Number, default: 30 }, 
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [questionSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  impressions: { type: Number, default: 0 },
  responses: { type: Number, default: 0 },
  totalScore: { type: Number, default: 0 },  
  completions: { type: Number, default: 0 } 
});
