import { Link } from 'react-router-dom'
function Dashboard() {

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="Manage your learning experience from here"></p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/create-course" className="bg-blue-600 text-white p-4 rounded shadow hover:bg-blue-700">
                Create a New Course
                </Link>

                <Link to="/courses" className="bg-green-600 text-white p-4 rounded shadow hover:bg-green-700">
                View All Courses
                </Link>
                
                <Link to="/add-lesson" className="bg-yellow-600 text-white p-4 rounded shadow hover:bg-yellow-700">
                Add Lessons to Course
                </Link>

                <Link to="/enrolled" className="bg-purple-600 text-white p-4 rounded shadow hover:bg-purple-700">
                View Enrolled Courses
                </Link>

                </div>
                </div>
    )
}

export default Dashboard