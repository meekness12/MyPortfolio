import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  FolderKanban,
  Phone,
  Menu,
  X,
  CodeXml,
  Github,
  Instagram,
  Twitter,
  Volume2,
  VolumeX
} from 'lucide-react';
import TextScramble from './TextScramble';
import { soundManager } from '../utils/SoundManager';
// import './Navbar.css'; // Deprecated in favor of Tailwind

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = `#${section.id}`;
        }
      });

      setActiveLink(current || '#home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setActiveLink(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { href: "#home", text: "Home", icon: Home },
    { href: "#about", text: "About", icon: User },
    { href: "#projects", text: "Projects", icon: FolderKanban },
    { href: "#contact", text: "Contact", icon: Phone },
  ];

  const socialLinks = [
    { href: "https://github.com/meekness12", icon: Github, name: "GitHub" },
    { href: "https://instagram.com/meek_hinker", icon: Instagram, name: "Instagram" },
    { href: "https://twitter.com/meek1hinker", icon: Twitter, name: "Twitter" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-dark/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
      }`}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
          className="group flex items-center gap-2 group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
            <CodeXml className="w-5 h-5 text-light" />
          </div>
          <span className="font-heading font-semibold text-xl tracking-tight text-light group-hover:text-white transition-colors flex gap-1">
            MyPortfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1 bg-dark-200/50 px-2 py-1 rounded-full border border-white/5 backdrop-blur-sm" role="list">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.href;
              return (
                <li key={link.href} role="listitem">
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    onMouseEnter={() => soundManager.play('hover')}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                      ${isActive
                        ? 'text-dark bg-light'
                        : 'text-light/70 hover:text-light hover:bg-white/5'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span className="font-space">{link.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            {/* Sound Toggle */}
            <button
              onClick={toggleMute}
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" aria-hidden="true" /> : <Volume2 className="w-5 h-5" aria-hidden="true" />}
            </button>

            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundManager.play('hover')}
                  className="text-gray-400 hover:text-primary hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
            onMouseEnter={() => soundManager.play('hover')}
            className="ml-4 px-6 py-2 rounded-full bg-white text-dark font-heading font-medium text-sm hover:bg-white/90 hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleMute}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>

          <button
            className="p-2 text-light hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className={`fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.href;
              return (
                <li key={link.href} className="w-full text-center">
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className={`text-3xl font-heading font-semibold flex items-center gap-3 transition-all duration-300
                      ${isActive ? 'text-white' : 'text-light/50 hover:text-light'}`
                    }
                  >
                    <Icon className="w-6 h-6" />
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex gap-6 mt-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Icon className="w-8 h-8" />
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
            className="mt-8 px-8 py-3 bg-white text-dark font-heading font-medium rounded-full hover:scale-105 transition-all duration-300"
          >
            Hire Me Now
          </a>
        </div>
      </div>
    </nav>
  );
}
