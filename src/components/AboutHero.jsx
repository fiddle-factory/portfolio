import React from 'react';
import Button from './Button';

/**
 * AboutHero Component
 * Displays hero section for About page with profile image and bio content
 */
export default function AboutHero() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
      {/* Left: Profile Image */}
      <img
        src="https://cdn.siter.io/assets/ast_ffm9D21ztQYkT5PrfhvEa1cwb/c3fd7292-9176-4f46-b4ea-e46bf0a3f9c4.webp"
        alt="Megha"
        className="rounded-2xl object-cover w-full lg:w-[400px] h-[400px] lg:h-[500px]"
      />

      {/* Right: Content */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold">Hello again ✨</h1>

        <div className="space-y-5 mt-6 text-gray-700 leading-relaxed">
          <p>
            I'm a designer + researcher motivated to truly understand human behaviour
            (and, by extension, myself). I believe, as user experience professionals,
            we owe it to the people we design for to deliver solutions that truly
            empower them.
          </p>

          <p>
            I graduated with a Bachelors degree in Design in 2021 and have worn
            various hats since. Currently, I'm a founding member of an incredibly
            smart team at Looppanel, designing a user research platform and repository.
          </p>

          <p>
            Away from Figma and sticky notes, I enjoy obsessing over plants. I also
            enjoy spending time reading, experimenting with DIY projects and trying
            to become a little better everyday.
          </p>
        </div>

        <div className="mt-8">
          <Button
            href="https://drive.google.com/file/d/12H1tcSYqOzUfwOu0EK9ntj0vFqDBRxVO/view?usp=sharing"
            external
            variant="outline"
          >
            VIEW RESUME
          </Button>
        </div>
      </div>
    </div>
  );
}
