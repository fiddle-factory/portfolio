import React from 'react';
import Button from './Button';

/**
 * CaseStudyHeader Component
 *
 * Displays the header section for case study pages with title, authors,
 * publication information, and a call-to-action button.
 *
 * @param {Object} props
 * @param {string} props.title - The case study title
 * @param {string} props.authors - Author names
 * @param {string} props.publicationText - Publication name/venue text
 * @param {string} [props.publicationUrl] - Optional URL to the publication
 * @param {string} props.buttonText - Text for the CTA button
 * @param {string} props.buttonUrl - URL for the CTA button
 * @param {string} [props.publicationPrefix] - Text before publication (default: "in")
 */
const CaseStudyHeader = ({
  title,
  authors,
  publicationText,
  publicationUrl,
  buttonText,
  buttonUrl,
  publicationPrefix = 'in'
}) => {
  return (
    <div className="max-w-3xl mx-auto text-center px-6 py-16 lg:py-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
        {title}
      </h1>

      <p className="text-gray-600 mt-4 text-lg">
        {authors} {publicationPrefix}{' '}
        {publicationUrl ? (
          <a
            href={publicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black"
          >
            {publicationText}
          </a>
        ) : (
          publicationText
        )}
      </p>

      <div className="mt-8 flex justify-center">
        <Button href={buttonUrl} external variant="outline">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyHeader;
