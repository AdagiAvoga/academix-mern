import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        role: 'student'
    })
    const [error, setError] =useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            const res = await api.post('/auth/register', form)
            localStorage.setItem('token', res.data.token)
            navigate('/dashboard')
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong')
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                value={form.name}
                onChange={handleChange}
                required
                />
                <input 
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                value={form.email}
                onChange={handleChange}
                required
                />

                <input 
                type="password"
                name="password"
                placeholder="Password"
                className="input"
                value={form.password}
                onChange={handleChange}
                required
                />
                <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="input">
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                    </select>
                    <button className="btn bg-blue-500 text-white w-full" type="submit">Register</button>
                    </form>
                    </div>
    )
}

export default Register