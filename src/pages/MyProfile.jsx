import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { Toaster, toast } from "react-hot-toast";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [localPhoto, setLocalPhoto] = useState(user?.photoURL || ""); 

  // Handle Profile 
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setIsEditing(false);

        setLocalPhoto(photoURL);
        auth.currentUser.displayName = name;
        auth.currentUser.photoURL = photoURL;
      })
      .catch((error) => {
        console.error("Profile update error:", error);
        toast.error("Failed to update profile!");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 flex items-center justify-center px-4">
      <Toaster position="top-center" />

      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 p-10 max-w-md w-full text-center space-y-6 transition-all duration-300">
        {/* profile image */}
        <div className="flex justify-center">
          <img
            src={localPhoto || "https://i.ibb.co/5GzXkwq/user.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-emerald-500 shadow-md object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        
        {!isEditing ? (
          <>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">
                {auth.currentUser?.displayName || "Anonymous User"}
              </h2>
              <p className="text-gray-600 text-lg">
                {auth.currentUser?.email || "No email available"}
              </p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.03] transition duration-300"
            >
              Update Profile
            </button>
          </>
        ) : (
          <form
            onSubmit={handleUpdateProfile}
            className="space-y-4 text-left mt-6"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Photo URL
              </label>
              <input
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                placeholder="Enter new photo URL"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-800 px-5 py-2 rounded-xl font-semibold hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
