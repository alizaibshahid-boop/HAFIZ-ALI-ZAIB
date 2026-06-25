import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Database, Shield, Zap, TrendingUp, Layers } from 'lucide-react';
import { SkillItem } from '../types';

export default function Skills() {
  const skills: SkillItem[] = [
    // Operations & Logistics
    { name: 'Tank Dipping Operations', category: 'operations', level: 98, details: 'High-precision liquid manual tape gauging, thermal corrections, water bottom audits, and metric calculation for petroleum tanks.' },
    { name: 'Petroleum Operations', category: 'operations', level: 95, details: 'Managing terminal pumps, pipeline valving setups, customs clearance matching, and heavy transport scheduling.' },
    { name: 'Supply Chain Coordination', category: 'operations', level: 92, details: 'Liaising with vendors, scheduling bulk dispatch fleets, ensuring transit safety compliance, and matching invoices.' },
    { name: 'FMCG Distribution', category: 'operations', level: 90, details: 'Supervising finished goods storage, scheduling delivery rounds, and resolving client delivery discrepancies for Young\'s Food.' },
    { name: 'Logistics Coordination', category: 'operations', level: 93, details: 'Matching transport fleets with delivery manifest demands and optimizing route plans to curb freight costs.' },
    { name: 'Store Management', category: 'operations', level: 94, details: 'Controlling pharmacy stock levels, processing requisitions, and implementing FIFO/LIFO storage schemas.' },

    // Data & Analysis
    { name: 'Data Entry & Analysis', category: 'data', level: 97, details: 'Transforming warehouse registers and terminal logs into clean spreadsheets with advanced pivot filters and lookups.' },
    { name: 'Record Management', category: 'data', level: 96, details: 'Organizing clinical and warehouse archives to ensure rapid file retrieval and perfect data auditing.' },
    { name: 'Documentation & Filing', category: 'data', level: 95, details: 'Drafting customs registers, fuel shipments files, safety checklists, and corporate delivery memos.' },
    { name: 'Inventory Control & Auditing', category: 'data', level: 94, details: 'Conducting physical inventory stock audits, spotting discrepancies, and tracking daily product balances.' },

    // Technical & Clerical
    { name: 'Clerical Management', category: 'technical', level: 92, details: 'Managing front-desk reception triage, managing schedules, answering inquiries, and organizing operations.' },
    { name: 'Microsoft Office & Excel', category: 'technical', level: 94, details: 'Expertise in Excel (vLookups, formulas, charting), PowerPoint presentations, and Word reports.' },
    { name: 'Information Technology', category: 'technical', level: 88, details: 'Troubleshooting hardware networks, maintaining file servers, and operating secure custom enterprise databases.' },
    { name: 'Customer Service', category: 'management', level: 93, details: 'Resolving consumer complaints, assisting patients, and managing critical accounts with perfect professionalism.' },
    { name: 'Administrative Support', category: 'management', level: 91, details: 'Coordinating internal staff schedules, office utility supplies, and drafting official executive letters.' },
    { name: 'Operations Management', category: 'management', level: 94, details: 'Streamlining cross-departmental operations to boost productivity and comply with standard regulations.' },
  ];

  const categories = [
    { id: 'operations', label: 'Operations & Logistics', icon: Layers, color: 'text-amber-400 border-amber-500/30' },
    { id: 'data', label: 'Data & Analytics', icon: Database, color: 'text-cyan-400 border-cyan-500/30' },
    { id: 'technical', label: 'Technical & Clerical', icon: Cpu, color: 'text-emerald-400 border-emerald-500/30' },
    { id: 'management', label: 'Operations Management', icon: Shield, color: 'text-fuchsia-400 border-fuchsia-500/30' },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('operations');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(
    skills.find((s) => s.category === 'operations') || skills[0]
  );

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 md:px-12 relative flex flex-col justify-center select-none" id="section-skills">
      {/* Visual neon light glows */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 border-b border-slate-800 pb-6">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            Capabilities Matrix // File 02
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Skills & Telemetry
          </h2>
        </div>

        {/* Categories Quick Filter Bar */}
        <div className="flex flex-wrap gap-2 pb-2 overflow-x-auto border-b border-slate-900">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstOfCat = skills.find((s) => s.category === cat.id);
                  if (firstOfCat) setSelectedSkill(firstOfCat);
                }}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-mono uppercase tracking-wider border rounded-lg transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'bg-slate-900/40 hover:bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
                id={`btn-skill-cat-${cat.id}`}
              >
                <Icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Skills Lists (Left column) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setSelectedSkill(skill)}
                className={`p-4 sm:p-5 rounded-xl border backdrop-blur-md cursor-pointer transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-36 ${
                  selectedSkill.name === skill.name
                    ? 'bg-slate-900/80 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                    : 'bg-slate-900/30 hover:bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {/* Micro LED status node */}
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-slate-400 tracking-wider">
                    SYS_NODE // 0{idx + 1}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    selectedSkill.name === skill.name ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-slate-700'
                  }`} />
                </div>

                <div className="space-y-2 mt-2">
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase line-clamp-1">
                    {skill.name}
                  </h3>
                  
                  {/* Circular/Line Gauge */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-slate-500">
                      <span>POWER INDEX</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-slate-950 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Telemetry Console (Right column) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 rounded-2xl bg-slate-950 border border-slate-800/80 p-6 flex flex-col justify-between relative overflow-hidden shadow-[inset_0_0_25px_rgba(0,0,0,0.6)]">
              {/* Matrix Background Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.2)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40" />

              <div className="space-y-6 relative z-10">
                {/* Console Title Bar */}
                <div className="flex items-center justify-between border-b border-slate-900 pb-4">
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-cyan-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
                      Skill Telemetry Console
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-cyan-950 text-cyan-400 border border-cyan-500/20 rounded">
                      DIAG_OK
                    </span>
                  </div>
                </div>

                {/* Main Readout */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-cyan-500/60 block tracking-widest uppercase">
                    Selected Node Data
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                    {selectedSkill.name}
                  </h3>
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-900">
                    <p className="text-slate-300 text-xs sm:text-sm font-mono leading-relaxed">
                      {selectedSkill.details}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fluctuating Live Diagnostics Widget */}
              <div className="space-y-4 mt-8 pt-4 border-t border-slate-900 relative z-10">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>METRIC_FIELD</span>
                  <span>CALIBRATION</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-900 flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-slate-500">OPERATIONAL DENSITY</span>
                    <span className="text-sm font-bold text-emerald-400 tracking-wider">MAX_CAPACITY</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-900 flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-slate-500">COMPLIANCE LEDGER</span>
                    <span className="text-sm font-bold text-cyan-400 tracking-wider">100% SECURE</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
