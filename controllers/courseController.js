const Course = require('../models/Course');

const createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).send(courses);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).send('Course not found');
        res.status(200).send(course);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!course) return res.status(404).send('Course not found');
        res.status(200).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).send('Course not found');
        res.status(200).send(course);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { createCourse, getCourses, getCourseById, updateCourse, deleteCourse };
