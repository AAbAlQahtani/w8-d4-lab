import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username || !password) {
            alert("Please fill in all fields.")
            return
        }

        if (username === "admin" && password === "admin123") {
            const adminData = {
                username: "admin",
                role: "admin",
            };
            localStorage.setItem("user", JSON.stringify(adminData))
            alert("Welcome Admin!")
            navigate("/admin")
            return
        }

        axios.get("https://68219a21259dad2655afc28a.mockapi.io/users")
            .then((res) => {
                const user = res.data.find(
                    (u) => u.username === username && u.password === password
                )

                if (user) {
                    localStorage.setItem("user", JSON.stringify({ ...user, role: "user" }));
                    alert("Login successful!")
                    navigate("/")
                } else {
                    alert("Invalid username or password.")
                }
            })
            .catch((err) => {
                alert("Server error. Please try again.")
                console.error(err)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">Login</h2>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-900">Username</label>
                    <input type="text" placeholder="Enter your username" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded" />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 text-gray-900">Password</label>
                    <input type="password" placeholder="Enter your password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded" />
                </div>

                <button onClick={handleLogin}
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                    Login </button>

                <p className="mt-4 text-sm text-gray-600 text-center">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-indigo-600 hover:underline">
                        Register </Link>
                </p>
            </div>
        </div>
    )
}
