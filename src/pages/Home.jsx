
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <section
      data-aos="fade-up"
      className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Swaraj 👋</h1>
      <h2 className="text-xl text-blue-300 mb-6">
        <Typewriter
          words={[
            'DevOps & Cloud Engineer',
            'AWS | GCP | Docker | Terraform',
            'CI/CD | Kubernetes | Automation'
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1500}
        />
      </h2>
      <div className="mt-4 space-x-4">
        <a href="https://linkedin.com/in/swarajd" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded">LinkedIn</a>
        <a href="https://github.com/swarajdhondge" target="_blank" className="border border-blue-400 text-blue-300 px-4 py-2 rounded">GitHub</a>
      </div>
    </section>
  );
}
