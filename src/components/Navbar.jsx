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
  Twitter
} from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setActiveLink(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
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
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <CodeXml className="navbar-logo-icon" />
            <span className="navbar-logo-text">MyPortfolio</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-desktop-content">
          <ul className="navbar-desktop-list">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`navbar-desktop-link ${activeLink === link.href ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    <Icon className="navbar-icon" />
                    <span>{link.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="navbar-social">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-social-link"
                  aria-label={social.name}
                >
                  <Icon className="navbar-icon" />
                </a>
              );
            })}
          </div>

          {/* Hire Me Button (Desktop) */}
          <a
            href="#contact"
            className="navbar-hireme-button"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-mobile-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="navbar-mobile-icon" />
          ) : (
            <Menu className="navbar-mobile-icon" />
          )}
        </button>

        {/* Mobile Menu Content */}
        <div className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
          <div className="navbar-mobile-content">
            <ul className="navbar-mobile-list">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`navbar-mobile-link ${activeLink === link.href ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                    >
                      <Icon className="navbar-icon" />
                      <span>{link.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Social Icons (Mobile) */}
            <div className="navbar-mobile-social">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-mobile-social-link"
                    aria-label={social.name}
                  >
                    <Icon className="navbar-icon" />
                  </a>
                );
              })}
            </div>

            {/* Hire Me Button (Mobile) */}
            <a
              href="#contact"
              className="navbar-mobile-hireme-button"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
