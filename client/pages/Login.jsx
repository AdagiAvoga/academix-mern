import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
            email,
            password,
            })

            const user = res.data

            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', user.token)

            navigate('/dashboard')
        } catch (err) {
          console.error('Login error:', err)
          const errorMsg = err.response?.data?.message || 'Login failed'
          setMessage(errorMsg)
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {message && <p className="text-red-500 text-sm mb-2">{message}</p>}
            <form onSubmit={handleLogin} className="space-y-4">
                <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2"
                required
                />

                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2"
                required
                />
                
                <button className="btn bg-blue-500 text-white w-full" type="submit">Login</button>
                </form>
                </div>
    )
}

export default Login