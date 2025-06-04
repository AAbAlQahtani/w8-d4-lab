import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            navigate("/admin")
        } else {
            alert("Invalid admin credentials.")
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-100">
            <div onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Admin Login</h2>

                <input type="text" placeholder="Admin Username" value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full mb-4 p-3 border rounded-lg" required />

                <input type="password" placeholder="Admin Password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-4 p-3 border rounded-lg" required />

                <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
                    Login as Admin</button>
            </div>
        </div>
    )
}
