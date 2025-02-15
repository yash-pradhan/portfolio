import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string; // Optional image for the project
  link: string; // Link to the project or GitHub repository
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image
          src={image || '/default-image.jpeg'}
          alt={`${title} preview`}
          width={500}
          height={160}
          className="object-cover"
        /> 
      )
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;


