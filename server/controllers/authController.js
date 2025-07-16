const User = require('../models/User')
const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )
}

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists'})
        }

        const user = await User.create({ name, email, password, role})
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user)
        })
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        res.s.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user)
        })
    } catch (err) {
        console.error('Login error:', err.message)
        res.status(500).json({ message: err.message })
    }
}