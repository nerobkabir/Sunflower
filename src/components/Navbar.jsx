import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout_user } = useContext(AuthContext);

  const handleLogout = () => {
    logout_user()
      .then(() => console.log("Logged out successfully"))
      .catch((err) => console.error("Logout error:", err));
  };

  return (
    <div className="navbar bg-gray-200 shadow-md px-6 flex justify-between items-center">
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold text-primary hover:opacity-80 transition"
        >
          SkillSwap
        </Link>
      </div>

      <div className="flex-1 text-center">
        <ul className="inline-flex space-x-6 font-medium text-gray-800">
          <li>
            <Link to="/" className="hover:text-primary transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/my-profile" className="hover:text-primary transition">
              My Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Authentication Section */}
      <div className="flex-1 flex justify-end">
        {user ? (
          <div className="flex items-center gap-4 relative">
            <div className="relative group">
              <img
                src={"https://i.ibb.co/5GzXkwq/user.png"} 
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer object-cover"
              />
              <div className="absolute left-1/2 -translate-x-1/2 top-12 opacity-0 group-hover:opacity-100 bg-base-200 text-sm text-gray-700 text-center px-3 py-1 rounded-md shadow-md transition-opacity duration-200 whitespace-nowrap z-10">
                {user?.displayName || "User"}
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error hover:bg-error hover:text-white transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/auth/login">
              <button className="btn btn-outline btn-primary hover:bg-primary hover:text-white transition">
                Login
              </button>
            </Link>
            <Link to="/auth/signup">
              <button className="btn btn-outline btn-primary hover:bg-primary hover:text-white transition">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
