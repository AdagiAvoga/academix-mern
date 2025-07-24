import { useEffect, useState } from 'react'
import axios from 'axios'

const LessonList = ({ courseId }) => {
    const [lessons, setLessons] = useState([])

    useEffect(() => {
        const Lessons = async () => {
            const res = await axios.get(`/api/lessons/course/${courseId}`)
            setLessons(res.data)
        }
        fetchLessons()
    }, [courseId]) 


    return (
        <div>
            <h4 className="text-lg font-semibold mb-2">Lessons</h4>
            <ul className="list-disc list-inside">
                {lessons.map(lesson => (
                    <li key={lesson._id}> 
                    <strong>{lesson.title}:</strong> {lesson.content}
                    </li>
    ))}
    </ul>
    </div>
    )
}

export default LessonList