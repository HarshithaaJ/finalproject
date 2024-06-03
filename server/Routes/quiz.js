const express = require('express');
const quizController = require('../controller/quizController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/add', auth, quizController.createQuiz);
router.get('/:id', quizController.getQuiz);
router.post('/:id/submit', quizController.submitQuiz);
router.get('/all', auth, quizController.getAllQuizzes);
router.get('/all/trending', quizController.getTrendingQuizzes);
router.get('/:id/analytics', quizController.getQuizAnalytics);

module.exports = router;