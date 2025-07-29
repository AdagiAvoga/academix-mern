import { Link } from "react-router-dom";

function Home () {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Academix</h1>
      <p className="mb-6">Your one-stop solution for online learning.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</Link>
        <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded">Register</Link>
      </div>
    </div>
  );
}

export default Home;