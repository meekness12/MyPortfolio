import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Loader2, Check, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    
    const serviceId = 'service_7d1rdnu';
    const templateId = 'template_pi90lov';
    const publicKey = 'jSzN1nnBCyfWN1SA3';

    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage('');

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setIsSuccess(true);
      form.current.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      setErrorMessage(error.text || 'Failed to send message. Please try again later.');
      setIsError(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <header className="contact-header">
          <h2 className="section-title">
            <span className="title-decoration">✉️</span> Contact Me
          </h2>
          <p className="section-subtitle">Have a project in mind or want to connect? Send me a message.</p>
        </header>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <Mail className="contact-icon" />
              <div>
                <h3 className="info-title">Email</h3>
                <a href="mailto:meeknessbon@gmail.com" className="contact-link">
                  meeknessbon@gmail.com
                </a>
              </div>
            </div>
            
            <div className="info-card">
              <Phone className="contact-icon" />
              <div>
                <h3 className="info-title">Phone</h3>
                <a href="tel:+250793171200" className="contact-link">
                  +250 793 171 200
                </a>
              </div>
            </div>
            
            <div className="info-card">
              <MapPin className="contact-icon" />
              <div>
                <h3 className="info-title">Location</h3>
                <p className="contact-text">Kigali, Rwanda</p>
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
          
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input"
                placeholder="Enter your full name" 
                required 
                minLength={2}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input"
                placeholder="your.email@example.com" 
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-textarea"
                rows={5} 
                placeholder="Tell me about your project or inquiry..." 
                required
                minLength={10}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`submit-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {isSuccess && (
              <div className="notification success">
                <Check size={18} />
                <span>Your message has been sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {isError && (
              <div className="notification error">
                <X size={18} />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}