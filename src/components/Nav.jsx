import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) setUser(JSON.parse(storedUser))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-50">


      <div className="flex items-center space-x-3">
        <img  src="data:image/png;base64,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"
          alt="logo" className="w-10 h-10 rounded-full object-cover"
        />

        <h1 className="text-xl font-bold text-indigo-700">GradProjects</h1>
      </div>

      <div className="hidden md:flex gap-6 text-center justify-center flex-1">
        <Link to="/" className="text-gray-700 hover:text-indigo-700">Home</Link>

        {user?.role === "admin" && (
          <Link to="/admin" className="text-gray-700 hover:text-indigo-700">Project Settings</Link>
        )}

        {user?.role === "user" && (
          <Link to="/user" className="text-gray-700 hover:text-indigo-700">Project ideas</Link>
        )}
      </div>

      <div className="hidden md:flex items-center gap-3">
        {user ? (
          <>

            <span className="text-sm text-gray-500">Hi, {user.username}</span>
            
            <button onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"  >
              Logout  </button>
          </>
        ) : (
          <>
            <Link to="/login"
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800" >
              Login
            </Link>
            <Link to="/register"
              className="text-blue-700 border border-gray-300 px-4 py-2 rounded hover:text-blue-800">
              Register </Link>

          </>
        )}
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="w-6 h-6 text-gray-700" />
          ) : (
            <FaBars className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-600">Home</Link>

          {user?.role === "admin" && (
            <Link to="/admin" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-600">Projects settings</Link>
          )}

          {user?.role === "user" && (
            <Link to="/user" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-600">Projects ideas</Link>
          )}

          {user ? (
            <button onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
              className="text-gray-700 hover:text-indigo-700" >
              Logout</button>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-700">
                Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-700" >
                Register </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
