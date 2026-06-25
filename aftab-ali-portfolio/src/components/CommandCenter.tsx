import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, User, Database, History, GraduationCap, Mail, 
  Terminal, Shield, Cpu, RefreshCw, AlertCircle, Wifi, Play, Heart 
} from 'lucide-react';

import ThreeCanvas from './ThreeCanvas';
import TerminalOverlay from './TerminalOverlay';

// Import sections
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import EducationCertifications from './EducationCertifications';
import Contact from './Contact';

export default function CommandCenter() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [systemTime, setSystemTime] = useState<string>('');
  const [cpuLoad, setCpuLoad] = useState<number>(12);
  const [dbStatus, setDbStatus] = useState<'SECURE' | 'SYNCING'>('SECURE');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Live clock generator (Karachi, Pakistan / UTC+5)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setSystemTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fluctuating metric simulation for high-end feel
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(Math.floor(Math.random() * 8) + 8); // 8-15%
      setDbStatus((prev) => (prev === 'SECURE' && Math.random() > 0.85 ? 'SYNCING' : 'SECURE'));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Setup Intersection Observer to highlight sidebar tab automatically during natural scrolling
  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies center focus
      threshold: 0.1,
    };

    const sectionIds = ['hero', 'about', 'skills', 'experience', 'education', 'contact'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionIds.forEach((id) => {
      const element = document.getElementById(`section-${id}`);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(`section-${id}`);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Click-to-navigate action
  const handleNavigation = (sectionId: string) => {
    const targetElement = document.getElementById(`section-${sectionId}`);
    if (targetElement && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Command Deck', icon: Compass },
    { id: 'about', label: 'Personnel Bio', icon: User },
    { id: 'skills', label: 'Analytics Node', icon: Database },
    { id: 'experience', label: 'Shipment Ledger', icon: History },
    { id: 'education', label: 'Qualifications', icon: GraduationCap },
    { id: 'contact', label: 'Comm-Link', icon: Mail },
  ];

  return (
    <div className="w-screen h-screen bg-[#020617] text-white font-sans flex flex-col overflow-hidden relative select-none">
      
      {/* 1. Immersive 3D WebGL Backdrop */}
      <ThreeCanvas currentSection={activeSection} />

      {/* Cyber ambient visual background scanlines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.02)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none z-10" />

      {/* 2. Top Navigation Operations Bar */}
      <header className="w-full h-16 bg-slate-950/80 border-b border-cyan-500/10 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 z-30 select-none">
        
        {/* Header Left (Aftab Branding + Operational state) */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 tracking-tighter shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              AA
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-widest uppercase font-sans">
                AFTAB ALI
              </span>
              <span className="text-[9px] font-mono font-medium text-cyan-400 uppercase tracking-widest leading-none">
                DATA CLERK ANALYST
              </span>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="hidden sm:block h-6 w-px bg-slate-800" />

          {/* Core Status indicator */}
          <div className="hidden sm:flex items-center gap-2 px-2 py-1 bg-slate-900/50 border border-slate-850 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-400 font-medium">
              OPERATIONS: ACTIVE
            </span>
          </div>
        </div>

        {/* Header Right (Telemetry Readouts & Real-time Clock) */}
        <div className="flex items-center gap-6">
          {/* Diagnostic Stats (Uptime, CPU load) */}
          <div className="hidden md:flex items-center gap-5 font-mono text-[10px] text-slate-400">
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500">CPU_CORE</span>
              <span className="text-cyan-400 font-bold">{cpuLoad}%</span>
            </div>
            
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-500">LEDGER_SYNC</span>
              <span className={`font-bold transition-colors ${dbStatus === 'SECURE' ? 'text-emerald-400' : 'text-amber-400'}`}>
                {dbStatus}
              </span>
            </div>

            <div className="flex flex-col gap-0.5 pr-2 border-r border-slate-800">
              <span className="text-slate-500">GATEWAY_CONN</span>
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                <Wifi size={10} />
                SECURE
              </span>
            </div>
          </div>

          {/* Digital Clock Widget */}
          <div className="flex items-center gap-2 bg-slate-900/40 border border-cyan-500/20 rounded-lg px-3.5 py-1.5 shadow-[inset_0_0_10px_rgba(6,182,212,0.05)]">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest leading-none">
                KARACHI TIME
              </span>
              <span className="text-xs font-mono font-black text-cyan-400 tracking-wider">
                {systemTime || '00:00:00'}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Main Body Cockpit Layout */}
      <div className="flex-1 flex overflow-hidden w-full relative z-20">
        
        {/* Left Control Rail Sidebar (Fixed Navigation HUD) */}
        <nav className="hidden md:flex w-20 xl:w-56 flex-col justify-between items-center xl:items-start py-8 px-2 xl:px-4 bg-slate-950/60 border-r border-cyan-500/5 backdrop-blur-sm z-30 select-none">
          <div className="w-full flex flex-col gap-3">
            <span className="hidden xl:block text-[9px] font-mono text-slate-500 uppercase tracking-widest pl-3 mb-2">
              Navigation HUD
            </span>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full py-3.5 px-3 rounded-lg flex items-center justify-center xl:justify-start gap-3 transition-all duration-300 relative group cursor-pointer pointer-events-auto`}
                  id={`sidebar-tab-${item.id}`}
                >
                  {/* Glowing left highlight strip */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-r-md shadow-[0_0_10px_#22d3ee]"
                    />
                  )}

                  <Icon 
                    size={16} 
                    className={`transition-colors duration-300 ${
                      isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-300'
                    }`} 
                  />

                  <span className={`hidden xl:block text-xs font-mono font-bold tracking-wider uppercase transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Diagnostics Card */}
          <div className="hidden xl:block w-full p-4 bg-slate-900/30 border border-slate-900 rounded-lg text-[10px] font-mono text-slate-500 space-y-2">
            <div className="flex justify-between items-center text-[9px] font-bold text-slate-400">
              <span>LEDGER COMPLIANCE</span>
              <span className="text-emerald-400">100% OK</span>
            </div>
            <div className="h-1 bg-slate-950 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-full" />
            </div>
            <p className="leading-relaxed">All operations verified against Pakistani Board & Karachi University standards.</p>
          </div>
        </nav>

        {/* Floating Quick Tabs Navigation Bar for Mobile Screens */}
        <div className="md:hidden fixed bottom-24 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-cyan-500/20 px-3 py-2 rounded-full flex items-center gap-1 z-40 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] select-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer pointer-events-auto ${
                  isActive ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-500 hover:text-cyan-300'
                }`}
                title={item.label}
                id={`mobile-tab-${item.id}`}
              >
                <Icon size={14} />
              </button>
            );
          })}
        </div>

        {/* 4. Central Scrolling Glass Viewport */}
        <main 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto scroll-smooth relative pointer-events-auto z-20 select-text"
          id="ops-dashboard-scroll-viewport"
        >
          {/* Main content sections stacked inside scroll element */}
          <div className="w-full flex flex-col">
            <Hero onNavigate={handleNavigation} />
            <About />
            <Skills />
            <Experience />
            <EducationCertifications />
            <Contact />

            {/* Custom footer in scroll container */}
            <footer className="w-full bg-slate-950/90 border-t border-slate-900/80 py-8 px-4 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-500 z-10">
              <div className="flex items-center gap-3">
                <span className="font-bold text-white uppercase">Aftab Ali</span>
                <span className="text-slate-800">|</span>
                <span>Operations Operations Central Node</span>
              </div>
              <div className="flex items-center gap-1 font-medium text-[9px]">
                <span>Crafted with</span>
                <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
                <span>for World-Class Interactive Presentation</span>
              </div>
            </footer>
          </div>
        </main>

      </div>

      {/* 5. Terminal CLI Assistant overlay */}
      <TerminalOverlay />
    </div>
  );
}
