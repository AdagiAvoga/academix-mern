import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateCourse from './pages/CreateCourse'
import CourseList from './components/CourseList'
import AddLesson from './pages/AddLesson'
import Dashboard from './pages/Dashboard'
import EnrolledCourses from './pages/EnrolledCourses'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/" element={<Home />} />
        <Route path="/create-course" element={<CreateCourse /> } />
        <Route path="/courses" element={<CourseList /> } />
        <Route path="/add-lesson" element={<AddLesson />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/enrolled" element={<EnrolledCourses />} />
    </Routes>
    </Router>
  )
}

export default App
