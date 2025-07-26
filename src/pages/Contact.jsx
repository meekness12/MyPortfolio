import React, { useRef, useState } from 'react';
import { Send, Loader2, Check, X, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
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
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-container">
        <header className="contact-header">
          <h2 className="section-title">
            <span className="title-decoration">✉️</span> Let's Collaborate
          </h2>
          <p className="section-subtitle">
            Whether you have an idea to bring to life or just want to say hello, I’m all ears.
          </p>
        </header>

        <div className="contact-content">
          {/* Left: Map Embed with CTA */}
          <motion.div
            className="contact-map"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Kibuye Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31672.415096765064!2d29.34534865575784!3d-2.057058868610377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d01bb2f0e21d13%3A0xe84f19f3b6a5692f!2sKibuye%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1690112345678!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* ✨ Call-to-Action Block */}
           <motion.div
  className="project-start-container"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <h3>Ready to Start Your Project?</h3>
  <p>Let's discuss your ideas and turn them into reality.</p>
  <div className="project-start-buttons">
    <a href="meeknessbon@gmail.com" className="email-btn">
      <Mail className="w-5 h-5 mr-2" />
      Email Me Directly
    </a>
    <a href="tel:+250793171200" className="call-btn">
      <Phone className="w-5 h-5 mr-2" />
      Schedule a Call
    </a>
  </div>
</motion.div>

          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Let’s Talk Code, Creativity, and Collaboration</h2>

            <div className="form-group horizontal">
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="FullName"
                required
                minLength={2}
              />
            </div>

            <div className="form-group horizontal">
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Your Gmail"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              />
            </div>

            <div className="form-group horizontal">
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Subject of your message"
                required
                minLength={3}
              />
            </div>

            <div className="form-group horizontal">
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows={3}
                placeholder="Message"
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
                  Sending...
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
                <span>Thank you for reaching out! I will respond as soon as possible.</span>
              </div>
            )}

            {isError && (
              <div className="notification error">
                <X size={18} />
                <span>{errorMessage}</span>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
