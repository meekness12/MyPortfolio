import React from 'react';
import { 
  Github,
  ExternalLink,
  FileText,
  Search,
  Shield,
  Smartphone,
  Palette,
  Users
} from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Police Driving License System",
      description: "Digital platform for Rwanda National Police to manage driver's license applications and administration.",
      features: [
        { icon: <FileText size={16} />, text: "Online license applications" },
        { icon: <Search size={16} />, text: "Real-time status tracking" },
        { icon: <Shield size={16} />, text: "Secure admin dashboard" },
        { icon: <Smartphone size={16} />, text: "Mobile-responsive design" },
        { icon: <Palette size={16} />, text: "Dark/light mode toggle" },
        { icon: <Users size={16} />, text: "Role-based authentication" }
      ],
      technologies: ["React", "Material UI", "Html", "css", "JavaScript"],
      githubLink: "https://github.com/meekness12/Police-System-License-App",
      liveDemo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="title-decoration">//</span> Featured Project
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <Github size={18} /> Code
                  </a>
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <span className="feature-icon">{feature.icon}</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                <h4 className="tech-title">Built With:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}