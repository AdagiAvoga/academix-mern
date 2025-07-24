const Enrollment = require('../models/Enrollment')

exports.enrollInCourse = async (req, res) => {
    const userId = req.user.userId
    const { courseId } = req.body

    try {
        const alreadyEnrolled = await Enrollment.findOne({ user: userId, course: courseId })
        if (alreadyEnrolled) return res.status(400).json({ message: 'Already enrolled' })

            const enrollment = await Enrollment.create({ user: userId, course: courseId })
            res.status(201).json(enrollment)
    } catch (err) {
        res.status(500).json({ message:err.message })
    }
}

exports.getMyEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({ user: req.user.id }).populate('course')
        res.json(enrollments)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.getCourseEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({ user: req.params.id }).populate('user')
        res.json(enrollments)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}