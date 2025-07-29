import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="p-4 bg-blue-600 text-white flex justify-between">
            <h1 className="font-bold text-lg">Academix</h1>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </nav>
    )
}

export default Navbar;