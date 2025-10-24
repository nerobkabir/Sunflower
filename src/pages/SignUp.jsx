// src/pages/SignUp.jsx
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const { signup_user, google_sign_in } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  // 🧾 Handle Signup
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    console.log(name, photoURL)

    // 🔒 Password Validation (one-line)
    const password_data = (/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password))
    if (!password_data) {
      setPasswordError(
        "Password must have 1 uppercase, 1 lowercase, and at least 6 characters"
      );
      return;
    } else {
      setPasswordError("");
    }

    signup_user(email, password)
      .then((result) => {
        console.log("User created:", result.user);
        toast.success("Signup successful!");

        setTimeout(() => {
          navigate("/home");
        }, 800);
      })
      .catch((error) => {
        console.log("Signup error:", error.message);
        toast.error("Signup failed!");
      });
  };

  // 🧾 Handle Google Sign-In
  const handleGoogleSignIn = () => {
    google_sign_in()
      .then((result) => {
        console.log("Google user:", result.user);
        toast.success("Signed in with Google!");
        setTimeout(() => {
          navigate("/home");
        }, 800);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        toast.error("Google sign-in failed.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 px-4">
      <Toaster position="top-center" />
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-10 items-center">
        {/* Left side content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-10 space-y-4 text-left">
          <h1 className="text-4xl font-extrabold leading-snug text-gray-800">
            Join SkillSwap! 🎉
          </h1>
          <p className="text-base opacity-90 text-gray-700">
            Create an account to start your journey with{" "}
            <span className="font-semibold text-emerald-600">SkillSwap</span>.
          </p>
        </div>

        {/* Right side form */}
        <div className="md:w-1/2 w-full relative bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl border border-white/40 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3 mt-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
              <input
                type="url"
                name="photoURL"
                placeholder="Photo URL (optional)"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
              {passwordError && (
                <p className="text-red-600 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
            >
              Register
            </button>

            {/* Google Sign-In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full mt-2 py-3 rounded-xl border flex items-center justify-center gap-3 font-medium hover:shadow-md transition"
            >
              <FaGoogle />
              Continue with Google
            </button>

            {/* Login link */}
            <p className="text-center text-gray-700 text-sm">
              Already have an account?{" "}
              <Link className="text-red-700" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
