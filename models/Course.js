const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    category: String,
    chapters: [
        {
            id: String,
            title: String,
            content: String,
            description: String,
            videoLink: String,
            duration: Number
        }
    ],
    description: String,
    duration: Number,
    instructorName: String,
    language: String,
    level: String,
    price: Number,
    status: String,
    visibility: String
});

module.exports = mongoose.model('Course', CourseSchema);
