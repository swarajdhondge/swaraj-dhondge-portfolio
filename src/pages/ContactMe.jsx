import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail } from 'lucide-react';

export default function ContactMe() {
  return (
    <section className="p-6 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <SectionTitle
        title="Contact Me"
        subtitle="Let's collaborate, build, or just talk tech — reach out anytime"
      />

      <div className="max-w-2xl mx-auto grid gap-6 sm:grid-cols-2">
        {/* Gmail Card */}
        <div className="flex flex-col items-center justify-center text-center bg-gray-800/90 p-6 rounded-2xl shadow-md hover:shadow-blue-600/20 transition-all">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Gmail"
            className="w-10 h-10 mb-3"
          />
          <p className="text-sm text-gray-300 mb-1">Gmail</p>
          <a
            href="mailto:tosdhondge@gmail.com"
            className="text-blue-300 font-semibold hover:underline break-all"
          >
            tosdhondge@gmail.com
          </a>
        </div>

        {/* LinkedIn Card */}
        <div className="flex flex-col items-center justify-center text-center bg-gray-800/90 p-6 rounded-2xl shadow-md hover:shadow-blue-600/20 transition-all">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="w-10 h-10 mb-3 rounded"
          />
          <p className="text-sm text-gray-300 mb-1">LinkedIn</p>
          <a
            href="https://linkedin.com/in/swarajd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 font-semibold hover:underline"
          >
            linkedin.com/in/swarajd
          </a>
        </div>
      </div>
    </section>
  );
}
