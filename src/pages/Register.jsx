import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const url = "https://68219a21259dad2655afc28a.mockapi.io/users"

    const RegisterBtn = () => {
        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill all fields")
            return
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address")
            return
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters")
            return
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        axios.get(url).then((res) => {
            const existingUser = res.data.find((u) => u.username === username)
            if (existingUser) {
                alert("Username is already in use")
                return
            }

            axios
                .post(url, {
                    username,
                    email,
                    password,
                })
                .then((res) => {
                    alert("Account created successfully")
                    navigate("/login")
                })
                .catch((err) => {
                    alert("Error creating account")
                    console.error(err)
                })
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">Sign Up</h2>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-900">Username</label>
                    <input type="text" placeholder="Enter your username" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full mb-3 p-2 border border-gray-300 rounded" />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-900">Email</label>
                    <input type="email" placeholder="example@example.com" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-3 p-2 border border-gray-300 rounded" />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-900">Password</label>
                    <input type="password" placeholder="Enter your password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-3 p-2 border border-gray-300 rounded" />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-900">Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full mb-4 p-2 border border-gray-300 rounded" />
                </div>

                <button onClick={RegisterBtn}
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700" >
                    Register</button>

                <p className="mt-4 text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 hover:underline">
                        Login</Link>
                </p>
            </div>
        </div>
    )
}
