import React from "react";

function ProjectCard({ title, description, techStack, image, link, github }) {
  return (
    <div className="project-card">
      {image && (
        <img
          src={image}
          alt={title}
          className="project-image"
          loading="lazy"  // native lazy-loading
        />
      )}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="project-tech">{techStack.join(" • ")}</p>
        <div className="project-links">
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
