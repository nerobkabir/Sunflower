import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaGuitar, FaGlobeEurope, FaLaptopCode } from "react-icons/fa";

import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

const Home = () => {
  const skills = useLoaderData(); 

  return (
    <div className="space-y-12 bg-gray-100">
      <section className="relative w-full h-96">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className="h-full"
        >
          {skills.slice(0, 5).map((skill) => (
            <SwiperSlide key={skill.skillId}>
              <div
                className="w-full h-96 bg-cover bg-center flex items-center justify-center mt-7"
                style={{ backgroundImage: `url(${skill.image})` }}
              >
                <div className="bg-black bg-opacity-40 p-6 rounded text-white text-center">
                  <h2 className="text-3xl font-bold">{skill.skillName}</h2>
                  <p className="mt-2">{skill.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Skills Show */}
      <section className="px-6">
        <h2 className="text-2xl font-bold mb-6">Popular Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.skillId}
              className="border rounded-lg shadow hover:shadow-lg overflow-hidden transition"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{skill.skillName}</h3>
                <p className="text-gray-600">Provider: {skill.providerName}</p>
                <p className="mt-1 font-semibold">Price: ${skill.price}</p>
                <p className="mt-1">Rating: {skill.rating} ⭐</p>
                <Link to={`/category-details/${skill.skillId}`}>
                  <button className="mt-3 bg-primary text-white px-4 py-2 rounded hover:bg-primary-focus transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Providers */}
      <section className="px-6">
        <h2 className="text-2xl font-bold mb-6">Top Rated Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4 text-center shadow">
            <h3 className="text-xl font-bold">Alex Martin</h3>
            <p>Rating: 4.9 ⭐</p>
            <p>Music Instructor</p>
          </div>
          <div className="border rounded-lg p-4 text-center shadow">
            <h3 className="text-xl font-bold">Sara Hossain</h3>
            <p>Rating: 4.8 ⭐</p>
            <p>English Teacher</p>
          </div>
          <div className="border rounded-lg p-4 text-center shadow">
            <h3 className="text-xl font-bold">Rafiq Ahmed</h3>
            <p>Rating: 4.9 ⭐</p>
            <p>Yoga Instructor</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-12 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">1. Browse Skills</h3>
            <p>Explore a wide variety of skills from local providers.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">2. Book & Learn</h3>
            <p>Select your skill and book a slot to start learning.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">3. Rate & Share</h3>
            <p>Give feedback and share your learning experience.</p>
          </div>
        </div>
      </section>

      {/* Success Spotlight */}

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Success Spotlight 🌟
          </h2>
          <p className="text-gray-600 mb-12">
            Discover how SkillSwap is helping people grow, connect, and share their passions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4 text-blue-600 text-5xl">
                <FaGuitar />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                From Hobbyist to Guitar Tutor
              </h3>
              <p className="text-gray-600 mt-2">
                “SkillSwap gave me the confidence to teach guitar locally. Now I have 5 regular students every week!”
              </p>
              <p className="text-sm text-blue-600 mt-3 font-medium">– Alex Martin</p>
            </div>

          
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4 text-green-600 text-5xl">
                <FaGlobeEurope />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Learning French for Travel
              </h3>
              <p className="text-gray-600 mt-2">
                “Through SkillSwap, I learned conversational French before my Europe trip – and even made a new friend!”
              </p>
              <p className="text-sm text-blue-600 mt-3 font-medium">– Sara Ahmed</p>
            </div>

            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4 text-purple-600 text-5xl">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Coding Mentor Turned Freelancer
              </h3>
              <p className="text-gray-600 mt-2">
                “After mentoring others on SkillSwap, I built a strong portfolio that helped me start freelancing!”
              </p>
              <p className="text-sm text-blue-600 mt-3 font-medium">– Rafiul Islam</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
