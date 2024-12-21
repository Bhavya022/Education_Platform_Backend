const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
router.post('/:courseId/quizzes', quizController.createQuiz);
router.get('/:courseId/quizzes', quizController.getQuizzesForCourse);
router.get('/quizzes/:id', quizController.getQuizById);
router.put('/quizzes/:id', quizController.updateQuiz);
router.delete('/quizzes/:id', quizController.deleteQuiz);

module.exports = router;