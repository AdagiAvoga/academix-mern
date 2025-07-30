const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const courseRoutes = require('./routes/courseRoutes')
const lessonRoutes = require('./routes/lessonRoutes')
const enrollmentRoutes = require('./routes/enrollmentRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

dotenv.config()
connectDB()

const app = express()

app.use(cors( {
    origin: 'https://academix-mern.vercel.app'
})) 

app.use(express.json())

app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/courses', courseRoutes)
app.use('/api/lessons', lessonRoutes)
app.use('/api/enrollments', enrollmentRoutes)
app.use ('/uploads', express.static('uploads'));
app.use('/api/upload', uploadRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})