function LoveCards() {
  const things = [
    {
      title: "Frontend Development",
      desc: "Building responsive UIs with React and Tailwind CSS.",
    },
    {
      title: "Backend APIs",
      desc: "Designing RESTful APIs using Node.js and Express.",
    },
    {
      title: "Clean UI & UX",
      desc: "Crafting visually pleasing and user-friendly designs.",
    },
    {
      title: "DSA Practice",
      desc: "Solving real-world problems using C++ & algorithms.",
    },
    {
      title: "Team Collaboration",
      desc: "Working with cross-functional teams and version control.",
    },
  ];

  return (
   <section className="pt-25 pb-12 bg-white dark:bg-[#0a192f] px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
          Things I Love to Build 💙
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {things.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-[#112240] text-gray-800 dark:text-white p-6 rounded-lg shadow hover:scale-105 transform transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-500">
                {item.title}
              </h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LoveCards;
