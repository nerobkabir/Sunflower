import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CategoryDetails = () => {
  const skill = useLoaderData();

  const [formData, setFormData] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Skill Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-8">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full md:w-1/2 h-72 object-cover rounded-xl"
        />

        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold text-gray-800">
            {skill.skillName}
          </h1>
          <p className="text-gray-600">{skill.description}</p>

          <div className="grid grid-cols-2 gap-2 mt-4 text-gray-700">
            <p>
              <span className="font-semibold">Provider:</span>{" "}
              {skill.providerName}
            </p>
            <p>
              <span className="font-semibold">Provider Email:</span>{" "}
              {skill.providerEmail}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {skill.category}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${skill.price}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {skill.rating}
            </p>
            <p>
              <span className="font-semibold">Slots Available:</span>{" "}
              {skill.slotsAvailable}
            </p>
            <p>
              <span className="font-semibold">Skill ID:</span> {skill.skillId}
            </p>
          </div>
        </div>
      </div>

      {/* Book Form */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Book a Session
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            
            required
            className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            
            required
            className="input input-bordered w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />

          <div className="col-span-1 md:col-span-2 flex justify-end ">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryDetails;
