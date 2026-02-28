import React from 'react';

/**
 * Hero section component for portfolio homepage
 * Displays main greeting and professional tagline
 */
export default function Hero() {
  return (
    <section className="py-20 lg:py-32 text-center px-6">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
        👋 Hello, I'm Megha
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-center mt-6">
        Designer and researcher driven by a passion to create experiences that solve problems,
        with a focus on advocacy for users
      </p>
    </section>
  );
}
