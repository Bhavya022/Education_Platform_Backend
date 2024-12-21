const Quiz = require('../models/Quiz');

// Create a new quiz for a specific course
exports.createQuiz = async (req, res) => {
    try {
        const quiz = new Quiz({ ...req.body, courseId: req.params.courseId });
        await quiz.save();
        res.status(201).send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all quizzes for a specific course
exports.getQuizzesByCourseId = async (req, res) => {
    try {
        const quizzes = await Quiz.find({ courseId: req.params.courseId });
        res.status(200).send(quizzes);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single quiz by ID
exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).send('Quiz not found');
        res.status(200).send(quiz);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a quiz by ID
exports.updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!quiz) return res.status(404).send('Quiz not found');
        res.status(200).send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a quiz by ID
exports.deleteQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) return res.status(404).send('Quiz not found');
        res.status(200).send(quiz);
    } catch (error) {
        res.status(500).send(error);
    }
};
