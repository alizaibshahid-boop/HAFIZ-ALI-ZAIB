import { motion } from 'motion/react';
import { BlurImage } from './BlurImage';

import laserBg from '../assets/images/laser_scan_1782418116646.jpg';

const experiences = [
  { role: 'Deputy Manager – QA External (Laundry)', company: 'Artistic Milliners (Pvt.) Ltd', period: '2025 – Present', active: true },
  { role: 'Assistant Manager (Washing)', company: 'Denim Privé', period: '2023 – 2025' },
  { role: 'Incharge (Washing)', company: 'Soorty Enterprises', period: '2022 – 2023' },
  { role: 'Assistant Incharge (Washing)', company: 'Soorty Enterprises', period: '2019 – 2022' },
  { role: 'Supervisor (Washing)', company: 'Artistic Milliners', period: '2018 – 2019' },
  { role: 'Quality Controller (Cutting)', company: 'Artistic Garments', period: '2016 – 2018' },
  { role: 'Supervisor (Washing)', company: 'AN Textile', period: '2015 – 2016' },
  { role: 'Supervisor (Stitching)', company: 'AN Textile', period: '2014 – 2015' },
];

const ease = [0.22, 1, 0.36, 1];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Abstract Background image */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease }}
        className="absolute left-0 top-1/4 w-full h-[150%] z-0 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)'
        }}
      >
        <BlurImage 
          src={laserBg}
          alt="QA laser scan abstract"
          className="w-full h-full object-cover mix-blend-screen opacity-60"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-cyan font-mono text-xl">03.</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Career Timeline</h2>
          <div className="h-[1px] bg-steel/30 flex-grow max-w-xs ml-4"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease }}
            className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan via-steel/20 to-transparent transform md:-translate-x-1/2 origin-top" 
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, x: isEven ? -20 : 20, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 md:left-1/2 w-6 h-6 rounded-full transform md:-translate-x-1/2 flex items-center justify-center bg-navy ${exp.active ? 'border-2 border-cyan' : 'border border-[var(--color-frost)]'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${exp.active ? 'bg-cyan shadow-[0_0_10px_#00f0ff] animate-pulse' : 'bg-steel/50'}`} />
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`glass p-6 rounded-xl relative overflow-hidden group hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] hover:border-cyan/50 transition-all duration-300 border ${exp.active ? 'border-cyan/50 shadow-[0_0_15px_rgba(0,240,255,0.1)]' : 'border-[var(--color-frost)]'}`}
                    >
                      {exp.active && (
                         <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan/20 via-cyan to-cyan/20 animate-[pulse_2s_ease-in-out_infinite]" />
                      )}
                      <span className="text-cyan font-mono text-xs md:text-sm mb-2 block">{exp.period}</span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-cyan transition-colors">{exp.role}</h3>
                      <h4 className="text-steel font-medium text-sm md:text-base">{exp.company}</h4>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
