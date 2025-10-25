import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { login_user, google_sign_in } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"; 

  const [emailValue, setEmailValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // email-password login
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login_user(email, password)
      .then(() => {
        toast.success("Login successful!");
        setTimeout(() => {
          navigate(from, { replace: true }); 
        }, 800);
      })
      .catch(() => toast.error("Login failed! Please check your credentials."));
  };

  // Google Sign-In
  const handleGoogleSignIn = () => {
    google_sign_in()
      .then(() => {
        toast.success("Logged in with Google!");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 800);
      })
      .catch(() => toast.error("Google sign-in failed!"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 px-4">
      <Toaster position="top-center" />

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-10 items-center">
        <div className="md:w-1/2 w-full flex flex-col justify-center p-10 space-y-4 text-left">
          <h1 className="text-4xl font-extrabold leading-snug text-gray-800">
            Welcome Back 👋
          </h1>
          <p className="text-base opacity-90 text-gray-700">
            Log in to continue your journey with
            <span className="font-semibold text-emerald-600"> SkillSwap</span>.
          </p>
        </div>

        {/* Login Form */}
        <div className="md:w-1/2 w-full bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl border border-white/40 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Login to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-2 mt-2">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition pr-10"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[45px] cursor-pointer text-gray-600 hover:text-emerald-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Forgot Password */}
            <div>
              <Link
                to="/auth/forgot-password"
                state={{ email: emailValue }}
                className="text-sm text-emerald-600 hover:underline font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
            >
              Login
            </button>

            <div className="flex items-center gap-2 mt-2">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-500 text-sm">or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full mt-2 py-3 rounded-xl border flex items-center justify-center gap-3 font-medium hover:shadow-md transition"
            >
              <FaGoogle />
              Continue with Google
            </button>

            <p className="text-center text-gray-700 text-sm">
              Don’t have an account?{" "}
              <Link className="text-red-700" to="/auth/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
