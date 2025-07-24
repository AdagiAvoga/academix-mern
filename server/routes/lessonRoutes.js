const express = require('express')
const router = express.Router()
const Lesson = require('../models/Lesson')

// Add a lesson to a course
router.post('/', async (req, res) => {
    try {
        const lesson = await Lesson.create(req.body)
        res.status(201).json (lesson)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get lessons by courseId
router.get('/course/:courseId', async (req, res) => {
    try {
        const lessons = await Lesson.find({ course: req.params.courseId })
        res.json(lessons)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router