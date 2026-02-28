import React from 'react';

/**
 * CaseStudySection Component
 *
 * A reusable section component for case study pages that provides
 * consistent spacing and typography for headings, descriptions, and content.
 *
 * @param {Object} props
 * @param {string} [props.heading] - Optional section heading
 * @param {string} [props.description] - Optional section description
 * @param {React.ReactNode} [props.children] - Content to render in the section
 */
const CaseStudySection = ({ heading, description, children }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      {heading && (
        <h2 className="text-2xl font-bold text-gray-900">
          {heading}
        </h2>
      )}

      {description && (
        <p className="text-gray-600 mt-3 leading-relaxed">
          {description}
        </p>
      )}

      {children && (
        <div className="mt-8">
          {children}
        </div>
      )}
    </div>
  );
};

export default CaseStudySection;
