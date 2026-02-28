import React from 'react';
import Button from './Button';

/**
 * InfoPills component displaying professional information
 * Shows current position and education with visual pills
 */
export default function InfoPills() {
  return (
    <div className="px-6">
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Current Position Pill */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-full px-5 py-3 text-sm text-gray-700">
          <img
            src="https://framerusercontent.com/images/sXrG3IQQtz32zZocoCtsEqxvU4.png"
            alt="Looppanel logo"
            className="w-8 h-8 rounded-full"
          />
          <span>
            Designing at <span className="font-bold">Looppanel</span>, a platform for all things User Research
          </span>
        </div>

        {/* Education Pill */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-full px-5 py-3 text-sm text-gray-700">
          <img
            src="https://framerusercontent.com/images/vSrzsSevxVKCVJnzSeo7Zyuc.png"
            alt="IIT Guwahati logo"
            className="w-8 h-8 rounded-full"
          />
          <span>
            <span className="font-bold">Bachelors in Design</span>, Indian Institute of Technology Guwahati 2021
          </span>
        </div>
      </div>

      {/* Resume Button */}
      <div className="mt-8 flex justify-center">
        <Button
          href="https://drive.google.com/file/d/12H1tcSYqOzUfwOu0EK9ntj0vFqDBRxVO/view?usp=sharing"
          external
          variant="primary"
        >
          View resume
        </Button>
      </div>
    </div>
  );
}
