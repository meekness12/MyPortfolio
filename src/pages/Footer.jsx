import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
// import './Footer.css'; // Deprecated

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-dark-100/50 backdrop-blur-md border-t border-white/5 font-mono text-sm relative z-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Contact Quick Links */}
        <div className="flex gap-6 text-light/60">
          <a href="mailto:meeknessbon@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} /> meeknessbon@gmail.com
          </a>
          <span className="opacity-20 hidden md:block">|</span>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Kigali, Rwanda
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/meekness12" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
            <Github size={18} />
          </a>
          <a href="https://twitter.com/meek1hinker" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
            <Twitter size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-light/30">
          © {year} <span className="text-primary">Meekness_Bonheur</span>. Executing Protocol...
        </div>
      </div>
    </footer>
  );
}
