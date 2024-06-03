const Quiz = require('../models/Quiz');
const jwt=require("jsonwebtoken")

const createQuiz = async (req, res) => {
  try {
    const { title, questions,category } = req.body;
    console.log( title, questions,category);
    const quiz = new Quiz({ title, questions,category, createdBy: req.userId });
    await quiz.save();
    
    const shareableLink = `http://your-frontend-url/quiz/${quiz._id}`;
    res.json({ quizId: quiz._id, shareableLink,  message: 'Quiz created successfully', quiz: quiz });
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: 'Failed to create quiz' });
  }
};


const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
    quiz.impressions += 1;
    await quiz.save();
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const submitQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

    let score = 0;
    if (quiz.questions.some(q => q.type === 'Q&A')) {
      quiz.questions.forEach((question) => {
        if (question.type === 'Q&A' && req.body[question._id] === question.answer) {
          score += 1;
        }
      });
    }

    quiz.responses += 1;
    quiz.completions += 1;
    quiz.totalScore += score;
    await quiz.save();

    res.json({ score });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ createdBy: req.user._id });
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


const getTrendingQuizzes = async (req, res) => {
  try {
    const trendingQuizzes = await Quiz.find({ impressions: { $gt: 10 } });
    res.json(trendingQuizzes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


const getQuizAnalytics = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

    const analytics = {
      impressions: quiz.impressions,
      responses: quiz.responses,
      completions: quiz.completions,
      averageScore: quiz.completions ? (quiz.totalScore / quiz.completions) : 0,
    };

    res.json(analytics);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { createQuiz, getQuiz, submitQuiz, getAllQuizzes, getTrendingQuizzes, getQuizAnalytics };