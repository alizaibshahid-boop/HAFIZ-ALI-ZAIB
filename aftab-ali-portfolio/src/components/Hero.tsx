import React from 'react';
import { motion } from 'motion/react';
import { Shield, ChevronRight, Activity, Cpu, Layers } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const stats = [
    { value: '8+', label: 'Years Experience', desc: 'Cross-functional administration' },
    { value: '4+', label: 'Petroleum Terminal Ops', desc: 'International Tank Terminal' },
    { value: '100%', label: 'Record Accuracy', desc: 'Data Entry & Dipping Verification' },
    { value: 'FMCG', label: 'Distribution Expert', desc: 'Young\'s Food FG Supplier' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 py-16 overflow-hidden select-none" id="section-hero">
      {/* Visual Glitch Backdrops */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Tactical Data Elements */}
      <div className="absolute top-10 right-12 hidden lg:flex flex-col gap-1 items-end font-mono text-[10px] text-cyan-500/40 border-r border-cyan-500/20 pr-4">
        <div>ORBIT_REF: 24.8607° N, 67.0011° E</div>
        <div>SYS_TIME: UTC+5 | STATUS: NOMINAL</div>
        <div>DATA_INDEXING_RATE: 1200 records/sec</div>
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-start gap-6">
        
        {/* Holographic Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-cyan-400 uppercase">
            Data & Operations Control Node
          </span>
        </motion.div>

        {/* Name Title */}
        <div className="space-y-1">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8.5xl font-black tracking-tighter text-white font-sans uppercase relative leading-none"
            id="hero-name-heading"
          >
            Aftab Ali
            <span className="absolute -top-1 -right-4 text-xs font-mono font-normal text-cyan-400/50 bg-slate-900/80 border border-cyan-500/20 px-1 py-0.5 rounded">
              PK
            </span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-2xl md:text-3xl font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 font-medium uppercase"
            id="hero-title-subheading"
          >
            Data Clerk Analyst
          </motion.h2>
        </div>

        {/* Corporate Headline */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans"
          id="hero-headline-paragraph"
        >
          Transforming Operations, Data Management & Business Efficiency Through Experience, Accuracy & Professional Excellence
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-2"
          id="hero-cta-group"
        >
          <button
            onClick={() => onNavigate('experience')}
            className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer pointer-events-auto"
            id="hero-btn-explore"
          >
            Explore Ledgers
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900/80 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-lg backdrop-blur-md transition-all duration-300 cursor-pointer pointer-events-auto"
            id="hero-btn-contact"
          >
            Establish Comm-link
          </button>
        </motion.div>

        {/* Dynamic Holographic Bento Stats Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 bg-slate-900/30 border border-slate-800 rounded-xl p-4 sm:p-6 backdrop-blur-md"
          id="hero-stats-panel"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1 border-r border-slate-800 last:border-none pr-4 last:pr-0">
              <span className="text-2xl sm:text-3.5xl font-black font-sans text-cyan-400 tracking-tight flex items-baseline gap-1">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-white uppercase tracking-wider font-mono">
                {stat.label}
              </span>
              <span className="text-[10px] text-slate-400 leading-tight">
                {stat.desc}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cybernetic Grid Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[9px] font-mono tracking-widest text-cyan-500 uppercase">
          Ops Navigation Protocol
        </span>
        <div className="w-5 h-8 border-2 border-cyan-500/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
