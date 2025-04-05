
import React, { useState } from 'react';

const projects = [
  {
    title: "Custom Skin Trade",
    description: "A full-stack trading platform with secure auth and Dockerized deployment.",
    tech: ["Node.js", "Express", "MongoDB", "Docker"],
    category: "DevOps",
    link: "https://github.com/swarajdhondge/custom-skin-trade",
    image: "https://raw.githubusercontent.com/swarajdhondge/custom-skin-trade/main/assets/preview.png"
  },
  {
    title: "Skybound Odyssey",
    description: "2D Unity platformer featuring smooth gameplay and level design.",
    tech: ["Unity", "C#"],
    category: "Game Dev",
    link: "https://github.com/swarajdhondge/skybound-odyssey",
    image: "https://raw.githubusercontent.com/swarajdhondge/skybound-odyssey/main/assets/screenshot.png"
  },
  {
    title: "Dynamic To-Do List",
    description: "Reactive task manager using Vue.js for seamless UX.",
    tech: ["Vue.js"],
    category: "Frontend",
    link: "https://github.com/swarajdhondge/dynamic-todolist",
    image: "https://raw.githubusercontent.com/swarajdhondge/dynamic-todolist/main/assets/preview.png"
  },
  {
    title: "EJS Express CRUD",
    description: "CRUD app using server-side rendering with EJS & Express.",
    tech: ["EJS", "Express.js"],
    category: "Backend",
    link: "https://github.com/swarajdhondge/ejs-express-framework-curd-operations",
    image: "https://raw.githubusercontent.com/swarajdhondge/ejs-express-framework-curd-operations/main/assets/preview.png"
  },
  {
    title: "Speech Emotion Recognition",
    description: "Python ML models classify emotions from speech using librosa, sklearn.",
    tech: ["Python", "ML", "Librosa"],
    category: "AI",
    link: "https://github.com/swarajdhondge/speech-emotion-recognition-models",
    image: "https://raw.githubusercontent.com/swarajdhondge/speech-emotion-recognition-models/main/assets/plot.png"
  },
  {
    title: "EPL Prototype",
    description: "HTML/CSS static site inspired by EPL homepage.",
    tech: ["HTML", "CSS"],
    category: "Frontend",
    link: "https://github.com/swarajdhondge/epl-prototype",
    image: "https://raw.githubusercontent.com/swarajdhondge/epl-prototype/main/assets/screenshot.png"
  }
];

const categories = ["All", "DevOps", "Frontend", "Backend", "AI", "Game Dev"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section data-aos="fade-up" className="p-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-4">Projects Gallery</h2>

      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full border ${
              activeCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <img src={project.image} alt={project.title} loading="lazy" className="rounded mb-3 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-3">
              {project.tech.map((tag, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-200 dark:text-blue-900">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" className="text-blue-600 dark:text-blue-300 hover:underline text-sm">GitHub →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
