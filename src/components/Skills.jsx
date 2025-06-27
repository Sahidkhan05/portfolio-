import React from 'react'

const Skills = () => {

      const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Node.js", "Express", "MongoDB",
    "Tailwind CSS", "Git", "GitHub",
    "C++", "DSA"
  ];
  
   return (
    <section id="skills" className="py-12 bg-gray-100 dark:bg-[#0a192f] px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Tech Stack & Skills 🚀</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#112240] text-gray-800 dark:text-gray-100 py-4 px-6 rounded shadow hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills