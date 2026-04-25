import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ExternalLink,
  ShieldCheck,
  Globe,
  Database
} from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Rwanda National Police",
      role: "Digital Systems Developer",
      period: "2024 - Present",
      location: "Kigali, Rwanda",
      description: "Engineered a centralized digital platform for managing driver's license applications and administrative workflows across the national police network.",
      achievements: [
        "Implemented secure RBAC (Role-Based Access Control) for administrative personnel.",
        "Integrated real-time data validation for license applicants.",
        "Reduced application processing time by approximately 40% through automation."
      ],
      skills: ["React", "Material UI", "System Architecture", "API Integration"],
      icon: ShieldCheck,
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      company: "Academic Project (Enterprise Scale)",
      role: "Lead Full-Stack Architect",
      period: "2023 - 2024",
      location: "Rwanda Polytechnic",
      description: "Conceptualized and built InternBridge, a multi-tenant platform to digitize the academic internship lifecycle, currently managing end-to-end internship coordination.",
      achievements: [
        "Architected a Three-Tier Monolithic System using Java 21 and Spring Boot.",
        "Designed a decoupled React frontend with high-performance state management.",
        "Built an automated ATS (Applicant Tracking System) for intern placements."
      ],
      skills: ["Java 21", "Spring Boot", "PostgreSQL", "React", "Enterprise Design Patterns"],
      icon: Database,
      color: "from-purple-500/20 to-purple-600/5"
    },
    {
      company: "LAN Systems Engineering",
      role: "System Designer",
      period: "2023",
      location: "Rwanda Polytechnic",
      description: "Developed an automated resource distribution system optimized for Local Area Networks (LAN) in high-density classroom environments.",
      achievements: [
        "Enabled zero-latency resource sharing across 50+ concurrent LAN nodes.",
        "Implemented custom file-syncing protocols using Java Networking.",
        "Optimized bandwidth usage for large-scale asset distribution."
      ],
      skills: ["Java", "Socket Programming", "LAN Protocols", "Concurrency"],
      icon: Globe,
      color: "from-cyan-500/20 to-cyan-600/5"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-light/70 uppercase tracking-widest">Professional Dossier</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
            Real-World <span className="text-white/40">Experience</span>
          </h2>
          <p className="text-light/60 text-lg leading-relaxed font-sans max-w-2xl">
            A track record of engineering scalable systems and high-fidelity interfaces for national-scale organizations and enterprise environments.
          </p>
        </motion.div>

        {/* Timeline / Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative glass-card p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden group`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Card Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:items-start">
                
                {/* Left: Icon & Meta */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Center: Main Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium text-lg">
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-sm font-mono text-light/40">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-light/70 mb-8 leading-relaxed text-lg max-w-3xl">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3">
                        <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-light/60 text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-light/40 group-hover:text-light/70 group-hover:border-white/10 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: CTA (Optional) */}
                <div className="hidden xl:flex flex-col justify-center">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-white cursor-pointer hover:bg-white hover:text-dark transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
