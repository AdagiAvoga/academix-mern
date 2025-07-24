import { Link } from 'react-router-dom'
const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user?.nane}</h2>
            <div className="grid gap-4 md:grid-cols-2">
                <Link to="/create-course" className="block p-4 border rounded shadow hover:bg-gray-100">
                Create Course
                </Link>
                
                <Link to="/add-lesson" className="block p-4 border rounded shadow hover:bg-gray-100">
                Add Lesson
                </Link>

                <Link to="/courses" className="block p-4 border rounded shadow hover:bg-gray-100">
                View Courses
                </Link>

                <button
                onClick={() => {
                    localStorage.removeItem('user')
                    localStorage.removeItem('token')
                    window.location.href = '/login'
                }}

                className="block p-4 border rounded shadow hover:bg-red-100 text-red-600">
                    Logout
                    </button>
                    </div>
                    </div>
    )
}

export default Dashboard