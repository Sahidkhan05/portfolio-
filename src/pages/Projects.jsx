import React from 'react'

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Project One
            </h3>
            <p className="text-gray-600 mb-4">
              Short description about your project. What it does, tech stack etc.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Project Two
            </h3>
            <p className="text-gray-600 mb-4">
              Short description about this project as well.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects