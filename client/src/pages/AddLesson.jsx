import { useState, useEffect } from 'react'
import api from '../services/api'

const AddLesson = () => {
    const [courses, setCourses] = useState([])
    const [courseId, setCourseId] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        const fetchCourses = async () => {
                const res = await api.get('/courses/my-courses')
                setCourses(res.data)
            }
        fetchCourses()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.post('/courses/add-lesson', { courseId, title, content })

            setMessage('Lesson added successfully!')
            setTitle('')
            setContent('')
    } catch (err) {
        setMessage('Error adding lesson')
    }
}

return (
    <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Add Lesson</h2>
        {message && <p className="text-sm text-green-500">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
            <select
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="w-full border p-2" required>
                <option value="">Select Course</option>
                {courses.map((c) => (
                    <option key={c._id} value={c._id}>
                    {c.title}
                    </option>
                ))}
                </select>

                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Lesson Title" className="w-full border p-2" required />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="w-full border p-2" />
                <button className="bg-green-600 text-white px-4 py-2">Add</button>
                </form>
                </div>
)
}

export default AddLesson