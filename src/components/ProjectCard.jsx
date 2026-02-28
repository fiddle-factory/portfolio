import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ProjectCard component for displaying individual project information
 * @param {Object} props
 * @param {Object} props.project - Project data
 * @param {string} props.project.title - Project title
 * @param {string} props.project.subtitle - Project subtitle/category
 * @param {string} props.project.cta - Call-to-action text
 * @param {string} props.project.accentColor - Accent color for text elements
 * @param {string} props.project.bgColor - Background color for the card
 * @param {string} props.project.link - Link URL (internal route or external URL)
 * @param {boolean} props.project.external - Whether link is external
 * @param {string[]} props.project.images - Array of image URLs
 */
export default function ProjectCard({ project }) {
  const cardContent = (
    <div
      className="rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] duration-300 cursor-pointer"
      style={{ backgroundColor: project.bgColor }}
    >
      <div className="p-8 lg:p-12">
        {/* Subtitle */}
        <div
          className="text-sm font-medium"
          style={{ color: project.accentColor }}
        >
          {project.subtitle}
        </div>

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-bold mt-2 text-gray-900">
          {project.title}
        </h3>

        {/* CTA */}
        <div
          className="font-medium text-sm uppercase tracking-wider mt-4 inline-flex items-center gap-2"
          style={{ color: project.accentColor }}
        >
          {project.cta}
          <span>→</span>
        </div>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <div className="mt-8 flex gap-4">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} preview ${index + 1}`}
                className={`rounded-lg shadow-lg max-h-64 object-cover ${
                  project.images.length === 1 ? 'w-full' : 'flex-1'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Wrap with appropriate link component
  if (project.external) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={project.link} className="block">
      {cardContent}
    </Link>
  );
}
