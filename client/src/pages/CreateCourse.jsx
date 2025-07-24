import { useState } from 'react'
import axios from 'axios'

const CreateCourse = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('token')
            const res = await axios.post('http:localhost:5000/api/courses', {
                title,
                description,
                instructor: JSON.parse(localStorage.getItem('user'))._id
            }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            setMessage('Course created successfully!')
            setTitle('')
            setDescription('')
        } catch (err) {
            setMessage(err.response?.data?.message || 'Failed to create course')
        }
    }

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Create a New Course</h2>
            {message && <p className="text-sm text-red-500 mb-2">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="text"
                placeholder="Course title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-2"/>

                <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-2"/>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2">Create Course</button>
                </form>
                </div>
    )
}

export default CreateCourse