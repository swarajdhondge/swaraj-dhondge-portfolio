import React, { useState } from 'react';

const projects = [
  {
    title: "Custom Skin Trade",
    description: "A full-stack trading platform with secure auth and Dockerized deployment.",
    tech: ["Node.js", "Express", "MongoDB", "Docker"],
    category: "DevOps",
    link: "https://github.com/swarajdhondge/custom-skin-trade",
    image: "/images/skintraders.png"
  },
  {
    title: "Skybound Odyssey",
    description: "2D Unity platformer featuring smooth gameplay and level design.",
    tech: ["Unity", "C#"],
    category: "Game Dev",
    link: "https://github.com/swarajdhondge/skybound-odyssey",
    image: "/images/skybound-odyssey.png"
  },
  {
    title: "EPL Prototype",
    description: "HTML/CSS static site inspired by EPL homepage.",
    tech: ["HTML", "CSS"],
    category: "Frontend",
    link: "https://github.com/swarajdhondge/epl-prototype",
    image: "/images/epl-prototype.png"
  },
  {
    title: "Dynamic To-Do List",
    description: "Reactive task manager using Vue.js for seamless UX.",
    tech: ["Vue.js"],
    category: "Frontend",
    link: "https://github.com/swarajdhondge/dynamic-todolist"
  },
  {
    title: "EJS Express CRUD",
    description: "CRUD app using server-side rendering with EJS & Express.",
    tech: ["EJS", "Express.js"],
    category: "Backend",
    link: "https://github.com/swarajdhondge/ejs-express-framework-curd-operations"
  },
  {
    title: "Speech Emotion Recognition",
    description: "Python ML models classify emotions from speech using librosa, sklearn.",
    tech: ["Python", "ML", "Librosa"],
    category: "AI",
    link: "https://github.com/swarajdhondge/speech-emotion-recognition-models"
  }
];

const categories = ["All", "DevOps", "Frontend", "Backend", "AI", "Game Dev"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="p-6 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Projects Gallery</h2>

      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-blue-600 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => {
          const isTopRow = index < 3;

          return (
            <div
              key={index}
              className="p-5 rounded-2xl bg-gray-800/90 backdrop-blur shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={`rounded-xl mb-4 w-full object-cover ${
                    isTopRow ? 'h-48' : 'h-32'
                  }`}
                />
              )}
              <h3 className={`font-semibold mb-1 ${isTopRow ? 'text-xl' : 'text-lg'}`}>{project.title}</h3>
              <p className={`mb-3 text-sm text-gray-300`}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 text-xs">
                {project.tech.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium dark:bg-blue-200 dark:text-blue-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-400 hover:text-white text-sm font-semibold"
              >
                GitHub →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
