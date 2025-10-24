import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

import { Toaster, toast } from "react-hot-toast";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const handleUpdateProfile = () => {
    toast.success("Profile update feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 flex items-center justify-center px-4">
      <Toaster position="top-center" />

      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 p-10 max-w-md w-full text-center space-y-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-emerald-500 shadow-md object-cover"
          />
        </div>

        {/* User Info */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-600 text-lg">
            {user?.email || "No email available"}
          </p>
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdateProfile}
          className="mt-4  gap-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.03] transition duration-300"
        >
        
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
