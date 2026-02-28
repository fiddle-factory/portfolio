import React from 'react';
import { PROJECTS } from '../data/projects';
import ProjectCard from './ProjectCard';

/**
 * ProjectGrid component displaying all portfolio projects
 * Uses responsive grid layout with 1 column on mobile, 2 on desktop
 */
export default function ProjectGrid() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
