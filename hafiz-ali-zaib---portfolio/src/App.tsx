/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Code, 
  ShoppingBag, 
  Palette, 
  Globe, 
  ChevronRight,
  Download,
  Instagram,
  Facebook
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { RESUME_DATA } from "./constants";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4 text-white"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 text-lg max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "80px" }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-brand-primary mt-6 rounded-full"
    />
  </div>
);

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-dark/40 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-logo font-extrabold tracking-widest uppercase text-gradient"
        >
          HAZ
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {["About", "Skills", "Experience", "Education", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-brand-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <motion.a 
          href="#contact"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-5 py-2 rounded-full bg-brand-primary text-white text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
        >
          Hire Me
        </motion.a>
      </div>
    </nav>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white bg-brand-dark text-slate-100">
      <div className="atmosphere" />
      <Toaster position="top-center" richColors />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Nav />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
              AI PROMPT ENGINEER & SOCIAL MEDIA EXPERT
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tighter text-white">
              {RESUME_DATA.name.split(' ').map((word, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "text-gradient" : ""}>
                  {word}{i < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Helping brands grow through AI and strategic social media.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#experience" className="px-8 py-4 rounded-full bg-brand-primary text-white font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-blue-500/25">
                View Projects <ChevronRight size={20} />
              </a>
              <button 
                onClick={() => toast.success("CV Download started...")}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Download CV <Download size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-300"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-300 to-transparent" />
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="section-padding relative">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="A brief overview of my professional journey and passion.">
            About Me
          </SectionTitle>
          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            {RESUME_DATA.about}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="text-brand-primary mb-4"><Globe size={32} /></div>
              <h4 className="text-xl font-bold mb-2 text-white">Global Reach</h4>
              <p className="text-slate-400">Working with national and international clients across various industries.</p>
            </div>
            <div className="glass-card p-8">
              <div className="text-brand-primary mb-4"><Code size={32} /></div>
              <h4 className="text-xl font-bold mb-2 text-white">AI Driven</h4>
              <p className="text-slate-400">Leveraging cutting-edge AI tools to automate and optimize digital workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Specialized in modern digital tools and creative strategies.">
            Expertise & Skills
          </SectionTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_DATA.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-8 group hover:border-brand-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                  {index % 3 === 0 ? <Code className="text-brand-primary" /> : 
                   index % 3 === 1 ? <ShoppingBag className="text-brand-primary" /> : 
                   <Palette className="text-brand-primary" />}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{skill}</h3>
                <p className="text-slate-500 text-sm">Professional proficiency and hands-on implementation.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="My professional career and key contributions.">
            Work Experience
          </SectionTitle>

          <div className="space-y-12">
            {RESUME_DATA.experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-[200px_1fr] gap-12">
                  <div className="mb-4 md:mb-0">
                    <span className="text-brand-primary font-bold text-sm tracking-widest uppercase">{exp.period}</span>
                  </div>
                  <div className="glass-card p-8 relative">
                    {/* Timeline dot */}
                    <div className="absolute left-[-41px] md:left-[-61px] top-10 w-4 h-4 rounded-full bg-brand-primary border-4 border-brand-dark z-10" />
                    {/* Vertical line */}
                    {index !== RESUME_DATA.experience.length - 1 && (
                      <div className="absolute left-[-34px] md:left-[-54px] top-14 bottom-[-60px] w-[2px] bg-white/5" />
                    )}
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-white">{exp.title}</h3>
                        <p className="text-slate-400 font-medium flex items-center gap-2">
                          <Briefcase size={16} /> {exp.company}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-400 flex gap-3 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Academic background and foundational learning.">
            Education
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESUME_DATA.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:bg-slate-50 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-blue-50 text-brand-primary">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{edu.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
                <p className="text-brand-primary font-medium mb-4 text-sm">{edu.institution}</p>
                {edu.description && <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Communication abilities in multiple languages.">
            Languages
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {RESUME_DATA.languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-white">{lang.name}</span>
                  <span className="text-brand-primary font-bold">{lang.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-brand-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-white">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
                <p className="text-slate-400 mb-12 text-lg">Available for freelance opportunities and full-time collaborations. Reach out and let's discuss your next project.</p>
                
                <div className="space-y-6">
                  <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all border border-white/10">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email Me</p>
                      <p className="font-medium text-white">{RESUME_DATA.contact.email}</p>
                    </div>
                  </a>
                  <a href={`tel:${RESUME_DATA.contact.phone}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all border border-white/10">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Call Me</p>
                      <p className="font-medium text-white">{RESUME_DATA.contact.phone}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Location</p>
                      <p className="font-medium text-white">{RESUME_DATA.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-600" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all text-white placeholder:text-slate-600" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all resize-none text-white placeholder:text-slate-600" 
                    placeholder="How can I help you?" 
                  />
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-brand-primary text-white font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-blue-500/25">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-logo font-extrabold tracking-widest uppercase text-gradient">
            HAZ
          </div>
          
          <div className="flex gap-6 text-slate-500 border border-white/10 p-2 rounded-lg bg-white/5 backdrop-blur-md">
            {RESUME_DATA.contact.social?.facebook && (
              <a href={RESUME_DATA.contact.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
            )}
            {RESUME_DATA.contact.social?.instagram && (
              <a href={RESUME_DATA.contact.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
            )}
          </div>

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Hafiz Ali Zaib. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
