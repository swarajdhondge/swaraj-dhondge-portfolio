import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <section
      data-aos="fade-up"
      className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white"
    >
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-bold mb-4 leading-tight">Hi, I’m Swaraj 👋</h1>
        <h2 className="text-xl text-blue-300 mb-8">
          <Typewriter
            words={[
              'DevOps & Cloud Engineer',
              'AWS | Azure | GCP | Docker | Terraform',
              'CI/CD | Kubernetes | Linux',
              'Scripting | Monitoring | Automating',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </h2>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
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
          <p className="text-sm text-blue-200">
            <Mail className="inline-block w-4 h-4 mr-1 -mt-1" />
            <a href="mailto:tosdhondge@gmail.com" className="underline hover:text-white">tosdhondge@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
