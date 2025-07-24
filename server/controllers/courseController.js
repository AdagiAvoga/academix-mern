const Course = require('../models/Course')

exports.createCourse = async (req, res) => {
    try {
        const { title, description } = req.body
        const course = await Course.create({ title, description, createdBy:req.user._id })
        res.status(201).json(course)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.getCourses = async (req, res) => {
    try {
        const courses =await Course.find().populate('createdBy', 'name')
        res.json(courses)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}