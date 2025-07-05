import React from 'react';
import { 
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          <span className="title-decoration">✉️</span> Get In Touch
        </h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            
            <div className="contact-methods">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:meeknessbon@gmail.com" className="contact-link">
                    meeknessbon@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+250793171200" className="contact-link">
                    +250 793 171 200
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p className="contact-text">Kigali, Rwanda</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/meekness12" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/meek1hinker" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Your message" required></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}