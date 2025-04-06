import React from 'react';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-200">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-blue-100 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
