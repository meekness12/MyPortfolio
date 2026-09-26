import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check, Loader2, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/meekness12' },
    { name: 'Twitter (X)', icon: Twitter, url: 'https://twitter.com/meek1hinker' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Email', icon: Mail, url: 'mailto:meeknessbon@gmail.com' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || status === 'sending') return;

    setStatus('sending');

    const serviceId = 'service_7d1rdnu';
    const templateId = 'template_pi90lov';
    const publicKey = 'jSzN1nnBCyfWN1SA3';

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: name.trim(),
          user_email: email.trim(),
          message: message.trim(),
        },
        publicKey
      );
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('Email error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="w-full min-h-screen relative z-20 flex flex-col items-center pt-28 md:pt-36 pb-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-[520px]"
      >
        {/* Dashed Border Card Container (Matching Palakonweb Ot) */}
        <div className="dashed-border-anim rounded-2xl w-full shadow-soft hover:shadow-soft-hover">
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-5 sm:p-7 md:p-9 transition-colors duration-150">
            <h1 className="font-instrument font-semibold text-2xl md:text-3xl text-slate-800 dark:text-white mb-2">
              Send a Message
            </h1>
            <p className="font-sans text-sm text-slate-500 dark:text-white/60 leading-relaxed mb-7">
              Want to collaborate, discuss an engineering role, or explore a project together? Fill out the form and I’ll get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="w-full bg-transparent border border-black/10 dark:border-white/15 rounded-xl px-4 py-3 text-[16px] sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 outline-none focus:border-brand-blue dark:focus:border-brand-blue transition-colors duration-150"
                />
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent border border-black/10 dark:border-white/15 rounded-xl px-4 py-3 text-[16px] sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 outline-none focus:border-brand-blue dark:focus:border-brand-blue transition-colors duration-150"
                />
              </div>

              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full bg-transparent border border-black/10 dark:border-white/15 rounded-xl px-4 py-3 text-[16px] sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 outline-none focus:border-brand-blue dark:focus:border-brand-blue transition-colors duration-150 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="glare-button group flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-medium text-sm hover:opacity-90 transition-all duration-150 disabled:opacity-60 shadow-soft"
              >
                {status === 'sending' ? (
                  <>
                    <span>Sending</span>
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : status === 'sent' ? (
                  <>
                    <span>Message Sent</span>
                    <Check size={16} className="text-emerald-500" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-xs text-red-500 text-center">
                  Could not send message right now. Feel free to email directly at{' '}
                  <a href="mailto:meeknessbon@gmail.com" className="underline font-mono">
                    meeknessbon@gmail.com
                  </a>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Socials Row */}
        <div className="mt-10 flex flex-col items-center">
          <h2 className="font-sans text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-white/50 mb-4">
            Connect directly
          </h2>
          <div className="flex flex-nowrap justify-center items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="glare-button flex items-center justify-center bg-white dark:bg-dark-surface border border-black/10 dark:border-white/10 shadow-soft rounded-2xl w-12 h-12 hover:border-brand-blue/60 transition-all"
                >
                  <Icon size={18} className="text-slate-800 dark:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
