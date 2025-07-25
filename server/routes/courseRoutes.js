const express = require('express')
const router = express.Router()
const Course = require('../models/Course')
const { protect } = require('../middleware/authMiddleware')

// Create a course
router.post('/', protect, async (req, res) => {
    try {
        const course = await Course.create({
            title: req.body.title,
            description: req.body.description,
            instructor: req.user._id,
            })
        res.status(201).json (course)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find().populate('instructor', 'name email')
        res.json(courses)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get a single course
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        if (!course) return res.status(404).json({ message: 'Course not found' })
        res.json(course)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router