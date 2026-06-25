import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Globe, BookOpen, CheckCircle, Flame } from 'lucide-react';
import { EducationItem, CertificationItem, LanguageItem } from '../types';

export default function EducationCertifications() {
  const educations: EducationItem[] = [
    {
      degree: 'Bachelor of Commerce (B.Com)',
      institution: 'Karachi University',
      period: 'Continuing',
      status: 'Active Academic Ledger',
    },
    {
      degree: 'Intermediate (Science & Commerce)',
      institution: 'Degree Boys Science & Commerce College',
      period: 'Completed',
    },
    {
      degree: 'Matriculation',
      institution: 'Karachi Board',
      period: 'Completed',
    },
  ];

  const certifications: CertificationItem[] = [
    {
      name: 'Information Technology Certificate',
      issuer: 'Technical Training Board, Karachi',
      period: 'Hardware & Database Foundations',
    },
    {
      name: 'English Language Certification',
      issuer: 'Professional Language Institute (6-Month)',
      period: 'Professional Business Communication',
    },
  ];

  const languages: LanguageItem[] = [
    { name: 'Urdu', level: 'Native / Bilingual', percentage: 100 },
    { name: 'English', level: 'Intermediate / Business', percentage: 72 },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 md:px-12 relative flex flex-col justify-center select-none" id="section-education">
      {/* Dynamic backdrop elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 border-b border-slate-800 pb-6">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            Qualifications Ledger // File 04
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Education & Dialects
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Education timeline (Left column) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 px-2">
              <GraduationCap className="text-cyan-400" size={18} />
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                Academic Chronicle Files
              </h3>
            </div>

            <div className="space-y-4 relative pl-4 border-l border-slate-800">
              {educations.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  whileHover={{ scale: 1.01 }}
                  className="p-5 rounded-xl bg-slate-900/30 border border-slate-900/80 hover:border-cyan-500/20 transition-all duration-300 relative"
                >
                  {/* Timeline point */}
                  <div className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-950 border-2 border-cyan-400" />

                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-bold text-white tracking-wide uppercase">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        {edu.institution}
                      </p>
                    </div>

                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-semibold shrink-0 ${
                      edu.period === 'Continuing'
                        ? 'bg-amber-950/60 text-amber-400 border border-amber-500/30 animate-pulse'
                        : 'bg-slate-950 text-slate-500 border border-slate-900'
                    }`}>
                      {edu.period}
                    </span>
                  </div>

                  {edu.status && (
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono uppercase bg-cyan-950/30 border border-cyan-500/10 px-2 py-0.5 rounded">
                      <Flame size={10} className="animate-pulse" />
                      {edu.status}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications and Languages (Right column) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Certifications Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-2">
                <Award className="text-cyan-400" size={18} />
                <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Verifiable Licenses & Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    className="p-5 rounded-xl bg-slate-950 border border-slate-900/80 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between h-40"
                  >
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                        <BookOpen size={14} />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide leading-snug">
                        {cert.name}
                      </h4>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-[10px] text-cyan-400 font-mono uppercase">
                        <CheckCircle size={10} />
                        Verified Complete
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        {cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages Block */}
            <div className="space-y-4 flex-1 flex flex-col justify-end">
              <div className="flex items-center gap-2 px-2">
                <Globe className="text-cyan-400" size={18} />
                <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Dialect Profiling
                </h3>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-900/80 flex flex-col sm:flex-row gap-6 items-center justify-around">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-4">
                    {/* Ring Indicator */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      {/* Outer Ring Circle */}
                      <svg className="absolute w-full h-full transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          className="stroke-slate-800 fill-transparent"
                          strokeWidth="3.5"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="28"
                          className="stroke-cyan-500 fill-transparent"
                          strokeWidth="3.5"
                          strokeDasharray={175}
                          initial={{ strokeDashoffset: 175 }}
                          animate={{ strokeDashoffset: 175 - (175 * lang.percentage) / 100 }}
                          transition={{ duration: 1, delay: 0.3 }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="text-xs font-mono font-bold text-white">
                        {lang.percentage}%
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        {lang.name}
                      </h4>
                      <p className="text-[10px] font-mono text-cyan-400 uppercase">
                        {lang.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
