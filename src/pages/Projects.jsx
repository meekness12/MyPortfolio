import React, { useState } from 'react';
import { Github } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; 
import './Projects.css';
import Policeimg from '../assets/Police.jpg';
import Portfolioimg from '../assets/Portfolio.jpg';

export default function Projects() {
  const projects = [
    {
      title: "Police Driving License System",
      description: "Digital platform for Rwanda National Police to manage driver's license applications and administration.",
      technologies: ["React", "Material UI", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/meekness12/Police-System-License-App",
      liveDemo: "#",
      categories: ["Personal", "Web"],
      status: "Completed",
      imageUrl: Policeimg,
      featured: true
    },
    {
      title: "My Portfolio",
      description: "My personal portfolio showcasing my projects, skills, and experiences.",
      technologies: ["Html", "Tailwind css", "React"],
      githubLink: "https://github.com/meekness12/My-Portfolio",
      liveDemo: "https://meekthinker-portfolio-git-main-meekness-bonheurs-projects.vercel.app/?_vercel_share=mTG5Rcw9hpUhWvlBSeYUBjFMbjpTIfav",
      categories: ["Personal", "Web"],
      status: "In Progress",
      imageUrl: Portfolioimg
    }
  ];

  const categories = ["All", "Personal", "Web", "Mobile", "AI"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.categories.includes(selectedCategory));

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Section Title Animation */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {/* Category Filter Buttons */}
        <div className="category-filter" role="tablist" aria-label="Project categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-button ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
              role="tab"
              aria-selected={selectedCategory === cat}
              tabIndex={selectedCategory === cat ? 0 : -1}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.article
                key={index}
                className="project-card"
                aria-label={`${project.title} project`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {project.featured && <span className="featured-badge">Featured</span>}

                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />

                <div className="project-content">
                  <div className="project-categories">
                    {project.categories.map((cat, i) => (
                      <span key={i} className="category-badge">{cat}</span>
                    ))}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      aria-label={`View ${project.title} live demo`}
                    >
                      View Project
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <p>No projects found for "{selectedCategory}"</p>
          )}
        </div>
      </div>
    </section>
  );
}
