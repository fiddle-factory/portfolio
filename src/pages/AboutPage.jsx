import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';

/**
 * AboutPage Component
 * Renders the About page with profile information and bio
 */
export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Megha's Portfolio";
  }, []);

  return (
    <section>
      <AboutHero />
    </section>
  );
}
