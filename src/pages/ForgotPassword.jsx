// src/pages/ForgotPassword.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const emailFromLogin = location.state?.email || "";

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // Gmail এ redirect
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl border border-white/40 p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              defaultValue={emailFromLogin}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
