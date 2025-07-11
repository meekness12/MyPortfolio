import React from 'react';
import {
  Download,
  Code,
  Paintbrush,
  GitBranch,
  Film,
  School,
  Lightbulb,
  FileCode,
  Figma,
  Github
} from 'lucide-react';

import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">
          <span className="title-icon">✦</span> About Me
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="intro-text">
              <Lightbulb size={18} className="inline-icon" /> IT student at <strong>Rwanda Polytechnic</strong> and <strong>frontend developer</strong> with 2+ years experience building web apps, editing videos, and creating digital brands.
            </p>

            <div className="highlights">
              <h3 className="highlight-title">
                <span className="highlight-icon">▹</span> Core Skills
              </h3><ul className="skills-list">
  <li>
    <FileCode size={16} className="skill-icon" />
    <strong>HTML</strong> & <strong>CSS</strong>
  </li>
  <li>
    <Code size={16} className="skill-icon" />
    <strong>JavaScript</strong>
  </li>
  <li>
    <Code size={16} className="skill-icon" />
    <strong>React.js</strong>
  </li>
  <li>
    <Figma size={16} className="skill-icon" />
    UI Design with <strong>Figma</strong>
  </li>
  <li>
    <GitBranch size={16} className="skill-icon" />
    Version Control with <strong>Git</strong>
  </li>
  <li>
    <Film size={16} className="skill-icon" />
    Video Editing
  </li>
</ul>

            </div>

            <p className="mission">
              <span className="quote-icon">“</span>
              Passionate about creating clean, functional interfaces that solve real problems.
            </p>
          </div>

          <div className="about-details">
            <div className="education-card">
              <h3 className="education-title">
                <School size={18} className="edu-icon" /> Education
              </h3>
              <p className="education-info">
                Advanced Diploma in IT<br/>
                <span className="institution">Rwanda Polytechnic</span>
              </p>
            </div>

            <a href="#" download className="cv-button">
              <Download size={16} className="button-icon" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}