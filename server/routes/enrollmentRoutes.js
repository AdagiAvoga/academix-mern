const express = require ('express')
const { enrollInCourse, getMyEnrollments, getCourseEnrollments } = require('../controllers/enrollmentController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', protect, enrollInCourse)
router.get('/mine', protect, getMyEnrollments)
router.post('/course/:id', protect, getCourseEnrollments)

module.exports = router