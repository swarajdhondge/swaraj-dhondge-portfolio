import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function ContactMe() {
  return (
    <section className="p-6 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl shadow-md space-y-6 text-center">
        <p className="text-lg">
          <Mail className="inline-block w-5 h-5 mr-2" />
          Email me at{' '}
          <a href="mailto:tosdhondge@gmail.com" className="text-blue-400 hover:underline">
            tosdhondge@gmail.com
          </a>
        </p>
        <p className="text-lg">
          <Linkedin className="inline-block w-5 h-5 mr-2" />
          Message me on{' '}
          <a href="https://linkedin.com/in/swarajd" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}