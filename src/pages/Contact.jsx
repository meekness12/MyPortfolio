import React, { useRef, useState, Suspense, lazy } from 'react';
import { Send, Loader2, Check, X, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const WireframeGlobe = lazy(() => import('../components/3d/WireframeGlobe'));

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
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(112,0,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(112,0,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 3D Wireframe Globe */}
      <Suspense fallback={null}>
        <WireframeGlobe />
      </Suspense>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-light mb-4">
            Let's <span className="text-primary text-glow">Collaborate</span>
          </h2>
          <p className="text-light/60 max-w-2xl mx-auto font-space">
            Whether you have an idea to bring to life or just want to say hello, I’m all ears.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Info & Map */}
          <motion.div
            className="flex-1 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-2 rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors">
              <iframe
                title="Kibuye Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31672.415096765064!2d29.34534865575784!3d-2.057058868610377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d01bb2f0e21d13%3A0xe84f19f3b6a5692f!2sKibuye%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1690112345678!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px', filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:meeknessbon@gmail.com" className="group p-6 bg-dark-100/80 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all">
                <Mail className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-orbitron text-light mb-1">Email Me</h4>
                <p className="text-light/50 text-sm group-hover:text-primary transition-colors">meeknessbon@gmail.com</p>
              </a>
              <a href="tel:+250793171200" className="group p-6 bg-dark-100/80 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/50 transition-all">
                <Phone className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-orbitron text-light mb-1">Call Me</h4>
                <p className="text-light/50 text-sm group-hover:text-secondary transition-colors">+250 793 171 200</p>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glass-card p-8 rounded-2xl border border-white/5"
            >
              <h3 className="text-2xl font-orbitron text-light mb-8">
                Initialize <span className="text-secondary">Communication</span>
              </h3>

              <div className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-xs font-mono text-primary mb-2 uppercase tracking-wider">Target ID (Name)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-dark-200 border-b-2 border-white/10 p-4 text-light focus:outline-none focus:border-primary focus:bg-primary/5 transition-all rounded-t-lg"
                    placeholder="Enter your name"
                    required
                    minLength={2}
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-xs font-mono text-primary mb-2 uppercase tracking-wider">Comms Link (Email)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-dark-200 border-b-2 border-white/10 p-4 text-light focus:outline-none focus:border-primary focus:bg-primary/5 transition-all rounded-t-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-xs font-mono text-primary mb-2 uppercase tracking-wider">Subject Protocol</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-dark-200 border-b-2 border-white/10 p-4 text-light focus:outline-none focus:border-primary focus:bg-primary/5 transition-all rounded-t-lg"
                    placeholder="Project Inquiry"
                    required
                    minLength={3}
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-xs font-mono text-primary mb-2 uppercase tracking-wider">Data Payload (Message)</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-dark-200 border-b-2 border-white/10 p-4 text-light focus:outline-none focus:border-primary focus:bg-primary/5 transition-all rounded-t-lg resize-none h-32"
                    placeholder="Describe your mission..."
                    required
                    minLength={10}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 bg-primary text-dark font-orbitron font-bold text-lg rounded hover:shadow-[0_0_20px_#00F0FF] transition-all duration-300 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Transmission
                    </>
                  )}
                </button>

                {isSuccess && (
                  <div className="p-4 bg-green-500/10 border border-green-500/50 rounded text-green-400 flex items-center gap-3">
                    <Check size={20} />
                    <span>Transmission successful! Stand by for response.</span>
                  </div>
                )}

                {isError && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded text-red-400 flex items-center gap-3">
                    <X size={20} />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
