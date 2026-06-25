import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Settings, Database, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  const sectors = [
    {
      title: 'Petroleum Terminal Operations',
      desc: 'Supervising shipment loadings, tanker truck logs, customs clearances, and precise tank dipping measurements.',
      icon: Settings,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30 text-amber-400',
    },
    {
      title: 'FMCG Supply Chain',
      desc: 'Managing Young\'s Food finished goods dispatch schedules, delivery fleets, and corporate distributor channels.',
      icon: Database,
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30 text-cyan-400',
    },
    {
      title: 'Pharmacy Custody & Logistics',
      desc: 'Stocking prescription and medical inventories, auditing expiration lifecycles, and managing trust welfare supplies.',
      icon: Target,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30 text-emerald-400',
    },
    {
      title: 'Patient Record Management',
      desc: 'Directing front desk healthcare operations, patient logs, clinic investigations index, and administration schedules.',
      icon: Users,
      color: 'from-fuchsia-500/20 to-pink-500/20',
      borderColor: 'border-fuchsia-500/30 text-fuchsia-400',
    },
  ];

  const highlights = [
    { label: 'Integrity', text: 'Securing cargo assets and recording high-precision inventory logs under strict corporate audit standards.' },
    { label: 'Analytical Power', text: 'Translating manual physical tank dips into accurate metrics to eliminate supply chain discrepancies.' },
    { label: 'Agile Adaptation', text: 'Navigating diverse environments: clinical clinics, heavy oil storage terminals, and fast-paced consumer goods fleets.' },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 md:px-12 relative flex flex-col justify-center" id="section-about">
      {/* Background ambient lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl w-full mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 border-b border-slate-800 pb-6">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            Personnel Metadata // File 01
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Cinematic Overview
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story (Left column) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Glassmorphic Card */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md space-y-4"
              id="about-bio-card"
            >
              <h3 className="text-lg font-mono font-semibold text-cyan-400 uppercase tracking-wide flex items-center gap-2">
                <Briefcase size={18} />
                Professional Profile
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                I am a dedicated professional with extensive experience in administration, operations management, inventory control, petroleum sector operations, customer service, and supply chain management. 
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                My journey includes working as a Receptionist, Store Incharge, Operations Management Professional, and FMCG Supplier. My educational background in Commerce combined with practical industry experience enables me to contribute effectively to organizational success while maintaining operational excellence.
              </p>
            </motion.div>

            {/* highlights timeline / metrics */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest pl-2">
                Operational Highlights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="p-5 rounded-xl bg-slate-950/70 border border-slate-900 flex flex-col gap-2 hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-relaxed">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Sectors Grid (Right column) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest pl-2">
              Core Industry Realms
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {sectors.map((sec, idx) => {
                const IconComponent = sec.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6 }}
                    className={`p-5 rounded-xl bg-gradient-to-r ${sec.color} border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 flex gap-4`}
                  >
                    <div className={`p-3 rounded-lg bg-slate-900 border ${sec.borderColor} h-fit self-start`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        {sec.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-400 leading-normal">
                        {sec.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
