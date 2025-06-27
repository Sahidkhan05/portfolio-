import React from "react";

const About = () => {
  return (
    <section  className="py-16 bg-gray-50 px-6" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 items-center">
        {/* Image section */}
        <div className="text-center ml-30">
          <img
            src="/Sahid khan img..png"
            alt="Sahid Khan"
            className="w-60 h-60 mx-auto md:mx-0 rounded-full shadow-lg object-cover "
          />
        </div>

        {/* Text content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I’m a passionate{" "}
            <span className="text-blue-600 font-semibold">
              Full Stack MERN Developer
            </span>{" "}
            with a love for clean code, elegant design, and efficient user
            experience. I enjoy turning complex problems into simple, beautiful,
            and intuitive web applications.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✅ 1+ year of hands-on experience</li>
            <li>✅ Expert in React, Node.js, MongoDB</li>
            <li>✅ Strong in DSA with C++</li>
            <li>✅ Focused on performance & accessibility</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
