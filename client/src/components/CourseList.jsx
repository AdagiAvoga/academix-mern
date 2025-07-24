import { useEffect, useState } from 'react'
import axios from 'axios'
import LessonList from './LessonList'


const CourseList = () => {
    const [courses, setCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState(null)

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get('/api/courses')
            setCourses(res.data)
        }
        fetchCourses()
    }, []) 


    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Available Courses</h2>
            <div className="grid gap-4">
                {courses.map(course => (
                    <div key={course._id} className="border p-4 rounded shadow">
                        <h3 className="font-bold">{course.title}</h3>
                        <p>{course.description}</p>

                <button 
                className="text-blue-600 mt-2"
                onClick ={() => setSelectedCourse(course._id)}>View Lessons</button>
                </div>
    ))}
    </div>

    {selectedCourse && (
        <div className="mt-6">
            <LessonList courseId={selectedCourse} />
            </div>
    )}
    </div>
    )
}

export default CourseList