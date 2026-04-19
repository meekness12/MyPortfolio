import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Layers } from 'lucide-react';
import { motion } from 'framer-motion'; 
import ProjectCard3D from '../components/3d/ProjectCard3D';
import Policeimg from '../assets/Police.jpg';
import Portfolioimg from '../assets/Portfolio.jpg';
import InternbridgeImg from '../assets/internbridge.png';
import EdgejournalImg from '../assets/edgejournal.png';
import ClassroomImg from '../assets/classroom.png';

export default function Projects() {
  const projects = [
    {
      title: "InternBridge: Internship Management System",
      description: "An enterprise-grade, multi-tenant platform engineered to digitize and manage the entire academic internship lifecycle. Includes strict RBAC, ATS, and decoupled Three-Tier Monolithic Architecture.",
      technologies: ["Java 21", "Spring Boot", "PostgreSQL", "React", "Tailwind CSS"],
      githubLink: "https://github.com/meekness12/internbridge",
      liveDemo: "#",
      categories: ["Web"],
      status: "Completed",
      imageUrl: InternbridgeImg,
      featured: true
    },
    {
      title: "Edge Journal",
      description: "A comprehensive digital journaling platform.",
      technologies: ["React", "CSS", "JavaScript"],
      githubLink: "https://github.com/meekness12/EdgeJournal",
      liveDemo: "#",
      categories: ["Personal", "Web"],
      status: "Completed",
      imageUrl: EdgejournalImg,
      featured: false
    },
    {
      title: "Classroom Resource Auto-Distribution System",
      description: "A system designed to automatically distribute resources across a Local Area Network (LAN) in a classroom environment.",
      technologies: ["Java", "Networking", "System Design"],
      githubLink: "https://github.com/meekness12/Classroom-Resource-Auto-Distribution-System-On-Lan",
      liveDemo: "#",
      categories: ["Personal", "Web"],
      status: "Completed",
      imageUrl: ClassroomImg,
      featured: false
    },
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
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Section Title */}
        <motion.div
           className="text-center mb-16"
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-light mb-4 text-glow">
            <span className="text-primary">Featured</span> <span className="text-white">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" role="tablist" aria-label="Project categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full font-mono text-sm tracking-wider border transition-all duration-300 relative overflow-hidden group
                ${selectedCategory === cat 
                  ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                  : 'bg-dark-100 border-white/10 text-light/60 hover:border-primary/50 hover:text-primary'
                }`}
              onClick={() => setSelectedCategory(cat)}
              role="tab"
              aria-selected={selectedCategory === cat}
            >
              <span className="relative z-10">{cat}</span>
              {selectedCategory === cat && (
                <span className="absolute inset-0 bg-primary/10 blur-md" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard3D key={index}>
              <motion.article
                className="group relative bg-dark-200/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent z-10 opacity-60" />
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {project.featured && (
                     <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary text-dark font-bold text-xs rounded-sm font-orbitron shadow-[0_0_10px_#00F0FF]">
                       FEATURED
                     </span>
                  )}
                  
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                     <div className="bg-dark/80 backdrop-blur-sm p-2 rounded-full border border-white/10">
                       <Code2 className="w-4 h-4 text-primary" />
                     </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-20">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((cat, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-secondary/10 border border-secondary/20 text-secondary-300 font-mono">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold font-space text-light mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-light/60 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-sm bg-dark-100 text-light/50 border border-white/5 font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-sm bg-dark-100 text-light/50 border border-white/5 font-mono">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded bg-primary/10 text-primary font-bold text-sm hover:bg-primary hover:text-dark transition-all duration-300 font-orbitron"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-white/5 text-light hover:text-white hover:bg-white/10 transition-colors"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.article>
              </ProjectCard3D>
            ))
          ) : (
            <p className="col-span-full text-center text-light/50 py-12">
              No projects found for "{selectedCategory}"
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
