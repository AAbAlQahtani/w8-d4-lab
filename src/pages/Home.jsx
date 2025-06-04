import { Link } from "react-router-dom";
import { FaUsersCog } from "react-icons/fa";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <FaUsersCog className="text-indigo-600 text-6xl mb-4" />

            <h1 className="text-4xl font-bold text-gray-800 mb-3">
                Welcome to GradProjects </h1>

            <p className="text-gray-600 max-w-xl mb-6">
                A platform where users can see cards, and admins can add and manage them effectively. </p>

            <Link to="/login"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                Login to Continue</Link>
        </div>
    )
}
