import React from 'react'
import { enrollInCourse } from '../services/enrollmentService'

const CourseCard = ({ course, refresh }) => {
    const handleEnroll = async () => {
        try {
            await enrollInCourse(course._id)
            alert('Enrolled successfully')
            refresh && refresh()
        } catch (err) {
            alert(err.response?.data?.message || 'Enrollment failed')
        }
    }

    return (
        <div className="border p-4 rounded shadow mb-4">
        <h3 className="text-xl font-bold">{course.title}</h3>
        <p>{course.description}</p>
        <button onClick={handleEnroll} className="bg-blue-500 text-white px-3 py-1 rounded mt-2">
        Enroll
        </button>
        </div>
    )
}

export default CourseCard