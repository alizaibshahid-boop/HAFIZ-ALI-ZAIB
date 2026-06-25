import { motion } from 'motion/react';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-navy py-12 px-6 border-t border-[var(--color-frost)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan/5 via-navy to-navy pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="font-display font-bold text-2xl tracking-tighter text-white block mb-2">
            SHAHZAIB<span className="text-cyan">.</span>
          </a>
          <p className="text-steel text-sm max-w-xs font-light">
            Innovating Denim. Ensuring Quality. Building the Future of Sustainable Manufacturing.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <motion.a 
              whileHover={{ y: -3, color: '#00f0ff' }}
              href="#" 
              className="text-steel hover:text-cyan transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, color: '#00f0ff' }}
              href="#" 
              className="text-steel hover:text-cyan transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, color: '#00f0ff' }}
              href="mailto:shahzaibshahid@icloud.com" 
              className="text-steel hover:text-cyan transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
          <div className="text-steel/50 text-xs font-mono">
            &copy; {new Date().getFullYear()} Shahzaib Shahid. All rights reserved.
          </div>
        </div>

        <div className="flex gap-6 text-sm text-steel font-mono">
          <a href="#about" className="hover:text-cyan transition-colors">About</a>
          <a href="#experience" className="hover:text-cyan transition-colors">Experience</a>
          <a href="#contact" className="hover:text-cyan transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
