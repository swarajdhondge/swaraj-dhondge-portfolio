import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Mail, ChevronsDown } from 'lucide-react';

export default function Home() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="relative flex items-center justify-center min-h-screen px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <img
            src="/profile.jpg"
            alt="Swaraj Dhondge"
            className="w-52 h-52 rounded-full object-cover border-4 border-blue-600 shadow-xl"
          />
          <h1 className="text-5xl font-bold leading-tight">Hi, I’m Swaraj 👋</h1>
          <p className="text-sm text-blue-200">
            <Mail className="inline-block w-4 h-4 mr-1 -mt-1" />
            <a href="mailto:tosdhondge@gmail.com" className="underline hover:text-white">
              tosdhondge@gmail.com
            </a>
          </p>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-xl text-blue-300">
            <Typewriter
              words={[
                'DevOps & Cloud Engineer',
                'AWS | Docker | GitHub Actions | Terraform',
                'CI/CD | Kubernetes | Bash | Monitoring',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={43}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </h2>

          <div className="text-blue-100 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              I'm all about building systems that scale and pipelines that move fast — using tools like
              <span className="text-white-400 font-semibold"> AWS</span>,
              <span className="text-white-400 font-semibold"> Docker</span>,
              <span className="text-white-400 font-semibold"> GitHub Actions</span>, and
              <span className="text-white-400 font-semibold"> Bash</span> to automate, simplify, and ship reliably.
            </p>
          </div>

          <p className="text-sm text-blue-300 italic">
            Also: sports junkie — cricket, F1, football... always down to chat tech or game-day.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://linkedin.com/in/swarajd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium shadow transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/swarajdhondge"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-400 hover:border-blue-500 text-blue-300 hover:text-white px-5 py-2 rounded-full font-medium transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 animate-bounce text-blue-300 hover:text-white transition flex flex-col items-center"
      >
        <ChevronsDown size={32} />
        <span className="text-xs mt-1">Scroll Down</span>
      </button>
    </section>
  );
}
