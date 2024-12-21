const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    courseId: String,
    questions: [
        {
            id: String,
            question: String,
            options: [String],
            correctAnswer: String
        }
    ]
});

module.exports = mongoose.model('Quiz', QuizSchema);
