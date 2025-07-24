import React, { useEffect, useState } from 'react'
import { fetchMyEnrollments } from '../services/enrollmentService'

const EnrolledCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetchMyEnrollments()
            setCourses(data)
        }
        getData()
    }, [])

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Enrolled Courses</h2>
            <ul className="space-y-4">
                {courses.map(enrollment => (
                    <li key={enrollment._id} className="border p-4 ronded shadow">
                        <h3 className="text-lg font-semibold">{enrollment.course.title}</h3>
                        <p>{enrollment.course.description}</p>
                        </li>
                ))}
                </ul>
                </div>
    )
}

export default EnrolledCourses