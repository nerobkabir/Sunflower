import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  // ✅ Login page থেকে পাঠানো email auto-fill করবে
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  // ✅ Reset password handler
  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }

    toast.success("Password reset link sent to your email!");

    // ১ সেকেন্ড পর Gmail এ রিডিরেক্ট করবে
    setTimeout(() => {
      window.location.href = "https://mail.google.com";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 px-4">
      <Toaster position="top-center" />

      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl border border-white/40 p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Reset Your Password
        </h2>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
          >
            Reset Password
          </button>
        </form>

        <p
          onClick={() => navigate("/auth/login")}
          className="text-center text-emerald-600 mt-4 cursor-pointer hover:underline"
        >
          ← Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
