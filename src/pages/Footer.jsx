import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        {/* ——— Contact details ——— */}
        <ul className="footer__list">
          <li className="footer__item">
            <Mail size={16} aria-hidden="true" />
            <a href="mailto:meeknessbon@gmail.com" className="footer__link">
              meeknessbon@gmail.com
            </a>
          </li>
          <li className="footer__item">
            <Phone size={16} aria-hidden="true" />
            <a href="tel:+250793171200" className="footer__link">
              +250 793 171 200
            </a>
          </li>
          <li className="footer__item">
            <MapPin size={16} aria-hidden="true" />
            <span>Kigali, Rwanda</span>
          </li>
        </ul>

        {/* ——— Social links ——— */}
        <nav className="footer__social" aria-label="Social media">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/meekness12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://twitter.com/meek1hinker"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
          >
            <Twitter size={18} />
          </a>
        </nav>
      </div>

      {/* ——— Copyright ——— */}
      <small className="footer__copy">
        © {year} Meekness Bonheur. All rights reserved.
      </small>
    </footer>
  );
}
