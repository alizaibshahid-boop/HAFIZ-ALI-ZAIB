import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { BlurImage } from './BlurImage';

import denimBg from '../assets/images/denim_abstract_1782418074079.jpg';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-6">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy to-navy z-10" />
        <BlurImage 
          src={denimBg}
          alt="Abstract denim texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease }}
          className="text-cyan font-mono mb-4 md:mb-6 ml-1 tracking-wide text-sm md:text-base"
        >
          Initializing profile...
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60, rotateX: -15, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          style={{ transformPerspective: 1000 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white mb-4 leading-none"
        >
          SHAHZAIB
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500 inline-block pb-2">
            SHAHID.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-6 mb-10 max-w-2xl"
        >
          <h2 className="text-xl md:text-3xl font-light text-steel mb-4 leading-snug">
            DENIMIST | DEPUTY MANAGER – QA EXTERNAL (LAUNDRY)
          </h2>
          <p className="text-base md:text-lg text-steel/80 leading-relaxed font-light">
            Transforming Denim Through Innovation, Sustainability, Quality Assurance & Manufacturing Excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row flex-wrap gap-4"
        >
          <a
            href="#experience"
            className="group relative px-8 py-4 bg-cyan text-navy font-bold rounded-sm overflow-hidden flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95 text-center"
          >
            <span className="relative z-10">View Experience</span>
            <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.22,1,0.36,1]" />
          </a>
          
          <a
            href="#skills"
            className="px-8 py-4 border border-[var(--color-frost)] text-white font-medium rounded-sm hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center active:scale-95 text-center"
          >
            Explore Expertise
          </a>
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="299" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="10 10"/>
            <circle cx="300" cy="300" r="200" stroke="url(#paint1_linear)" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M300 0V600M0 300H600" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1"/>
            <defs>
              <linearGradient id="paint0_linear" x1="300" y1="0" x2="300" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F0FF" />
                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="300" y1="100" x2="300" y2="500" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
