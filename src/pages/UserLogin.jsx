import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://68219a21259dad2655afc28a.mockapi.io/users")
      const users = await res.json()

      const user = users.find(
        (u) => u.username === username && u.password === password
      )

      if (user) {
        navigate("/user")
      } else {
        alert("Incorrect username or password.")
      }
    } catch (error) {
      alert("Failed to connect to the server.")
      console.error(error)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-800">User Login</h2>

        <input type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg" required/>

        <input type="password"  placeholder="Password"  value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg" required/>

        <button type="submit" className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800">
          Login as User </button>
      </div>
    </div>
  )
}
