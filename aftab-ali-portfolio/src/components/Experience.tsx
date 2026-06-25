import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Landmark, Syringe, Shield, Truck, MapPin, Calendar, HelpCircle, Layers, Settings, ChevronRight } from 'lucide-react';
import { ExperienceItem } from '../types';

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 'youngs',
      role: 'Supplier Of Finished Goods (FG)',
      company: 'Young\'s Food Pvt Ltd',
      location: 'Karachi, Pakistan',
      period: '2025 (Present)',
      responsibilities: [
        'Orchestrated FMCG finished goods distribution operations, matching distributor requisitions with actual supply loads.',
        'Managed core distributor accounts, streamlining client relationships and processing accounts balances.',
        'Coordinated with supply chain, warehouse, and shipping teams to ensure zero dispatch bottlenecks.',
        'Supervised daily transport delivery operations, analyzing logistics routes to curb transit delays.',
      ],
      category: 'fmcg',
    },
    {
      id: 'tankterminal',
      role: 'Operations & Clerks Management',
      company: 'International Tank Terminal Pvt Ltd',
      location: 'Karachi, Pakistan',
      period: '2020 – 2024',
      responsibilities: [
        'Supervised oil and petroleum terminal operations, coordinating bulk fuel shipments, pumps, and line routing setups.',
        'Conducted high-precision manual tank dipping operations, compiling depth logs and correcting volume data against temperature scales.',
        'Maintained complete fuel inventory registers, compiling stock balances with 100% compliance standards.',
        'Liaised with custom clearing agents, verifying logistics manifests, loading clearances, and customs registers.',
        'Supervised road transport loadings, tracking dispatch safety protocols, and auditing tanker truck logs.',
      ],
      category: 'petroleum',
    },
    {
      id: 'almustafa',
      role: 'Store Incharge',
      company: 'Al Mustafa Trust & Welfare',
      location: 'Karachi, Pakistan',
      period: '2019 – 2020',
      responsibilities: [
        'Directed pharmacy inventory control operations, auditing incoming medical supplies and prescription registers.',
        'Monitored stock levels, preparing purchase requisitions, and tracking supplier order fulfillments.',
        'Organized medical warehouse shelf structures, enforcing strict FIFO storage protocols for perishable therapeutics.',
        'Compiled store ledger balances, auditing monthly dispensing logs to secure zero stock discrepancies.',
      ],
      category: 'healthcare',
    },
    {
      id: 'nmc',
      role: 'Receptionist & Record Clerk',
      company: 'National Medical Center Pvt Ltd',
      location: 'Karachi, Pakistan',
      period: '2017 – 2019',
      responsibilities: [
        'Managed front-desk client services, guiding outpatient triage registries and organizing clinic scheduling.',
        'Maintained patient records, indexing medical folders and investigations reports inside secure databases.',
        'Coordinated with medical departments to streamline the flow of outpatient diagnostic folders.',
        'Provided comprehensive administrative support, drafting correspondence and resolving consumer queries.',
      ],
      category: 'medical',
    },
  ];

  const [activeId, setActiveId] = useState<string>('youngs');
  const activeExp = experiences.find((e) => e.id === activeId) || experiences[0];

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'fmcg':
        return Truck;
      case 'petroleum':
        return Layers;
      case 'healthcare':
        return Landmark;
      case 'medical':
        return Syringe;
      default:
        return Settings;
    }
  };

  const getThemeColor = (cat: string) => {
    switch (cat) {
      case 'fmcg':
        return { text: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.15)]', bg: 'bg-cyan-500/5' };
      case 'petroleum':
        return { text: 'text-amber-400', border: 'border-amber-500/30', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.15)]', bg: 'bg-amber-500/5' };
      case 'healthcare':
        return { text: 'text-emerald-400', border: 'border-emerald-500/30', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]', bg: 'bg-emerald-500/5' };
      case 'medical':
        return { text: 'text-fuchsia-400', border: 'border-fuchsia-500/30', glow: 'shadow-[0_0_15px_rgba(217,70,239,0.15)]', bg: 'bg-fuchsia-500/5' };
      default:
        return { text: 'text-slate-400', border: 'border-slate-800', glow: '', bg: 'bg-slate-900/40' };
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 md:px-12 relative flex flex-col justify-center select-none" id="section-experience">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 border-b border-slate-800 pb-6">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            Operations Chronicles // File 03
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline Nodes Selector (Left column) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pl-2">
              Select Chronology Node
            </span>
            <div className="flex flex-col gap-2">
              {experiences.map((exp) => {
                const Icon = getIcon(exp.category);
                const theme = getThemeColor(exp.category);
                const isActive = activeId === exp.id;

                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                      isActive
                        ? `bg-slate-900/90 border-slate-700 ${theme.glow}`
                        : 'bg-slate-900/20 hover:bg-slate-900/40 border-slate-900 hover:border-slate-800'
                    }`}
                    id={`btn-experience-node-${exp.id}`}
                  >
                    <div className={`p-2.5 rounded-lg bg-slate-950 border ${isActive ? theme.border + ' ' + theme.text : 'border-slate-800 text-slate-500'}`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-xs font-mono font-bold tracking-wider uppercase truncate ${isActive ? 'text-white' : 'text-slate-500'}`}>
                        {exp.company}
                      </h4>
                      <p className={`text-[10px] uppercase tracking-widest font-mono truncate ${isActive ? theme.text : 'text-slate-600'}`}>
                        {exp.period}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timeline Log Screen (Right column) */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/35 border border-slate-800 backdrop-blur-md space-y-6"
              id="experience-log-view"
            >
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                <div className="space-y-1">
                  <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded border ${getThemeColor(activeExp.category).border} ${getThemeColor(activeExp.category).text}`}>
                    {activeExp.category} node
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase mt-1">
                    {activeExp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Landmark size={12} className="text-cyan-400" />
                      {activeExp.company}
                    </span>
                    <span className="text-slate-700">|</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-cyan-400" />
                      {activeExp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-900 rounded-lg h-fit self-start font-mono text-[11px] text-slate-400 font-medium">
                  <Calendar size={12} className="text-cyan-400" />
                  {activeExp.period}
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-cyan-500/50 uppercase tracking-widest block">
                  Executed Operational Logistics & Protocols
                </span>
                <ul className="space-y-3.5 pl-1">
                  {activeExp.responsibilities.map((resp, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${getThemeColor(activeExp.category).text} bg-current`} />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Micro Sector Schematic Visualizer */}
              {activeExp.category === 'petroleum' && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Layers size={18} />
                    </div>
                    <div>
                      <div className="text-white font-bold uppercase tracking-wider">Tank Terminal Operations</div>
                      <div className="text-slate-500 text-[10px]">Measurement verification and customs protocols</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center bg-slate-900/50 border border-slate-900 px-3 py-1.5 rounded">
                      <div className="text-amber-400 font-bold">100% Manual</div>
                      <div className="text-slate-500 text-[9px]">Dipping Accuracy</div>
                    </div>
                    <div className="text-center bg-slate-900/50 border border-slate-900 px-3 py-1.5 rounded">
                      <div className="text-amber-400 font-bold">0.00% Error</div>
                      <div className="text-slate-500 text-[9px]">Ledger Compliance</div>
                    </div>
                  </div>
                </div>
              )}

              {activeExp.category === 'fmcg' && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Truck size={18} />
                    </div>
                    <div>
                      <div className="text-white font-bold uppercase tracking-wider">Finished Goods Distribution</div>
                      <div className="text-slate-500 text-[10px]">Route optimization and delivery matching</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center bg-slate-900/50 border border-slate-900 px-3 py-1.5 rounded">
                      <div className="text-cyan-400 font-bold">96.4% Efficiency</div>
                      <div className="text-slate-500 text-[9px]">Dispatch Load</div>
                    </div>
                    <div className="text-center bg-slate-900/50 border border-slate-900 px-3 py-1.5 rounded">
                      <div className="text-cyan-400 font-bold">SLA Compliant</div>
                      <div className="text-slate-500 text-[9px]">Distributors Managed</div>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
