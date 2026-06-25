import { motion } from 'motion/react';
import { ShieldCheck, Droplet, Sparkles, Activity } from 'lucide-react';
import { BlurImage } from './BlurImage';

import waterBg from '../assets/images/water_abstract_1782418095577.jpg';

const features = [
  { icon: Droplet, title: 'Sustainable Washing', desc: 'Waterless washing & ozone technology' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous garment inspection protocols' },
  { icon: Activity, title: 'Process Optimization', desc: 'Maximizing production efficiency' },
  { icon: Sparkles, title: 'Innovation', desc: 'Future-forward denim engineering' },
];

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease }}
        className="absolute right-0 top-0 w-full lg:w-1/2 h-full z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))'
        }}
      >
        <BlurImage 
          src={waterBg}
          alt="Water ripples"
          className="w-full h-full object-cover mix-blend-screen"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-12 md:mb-20"
        >
          <span className="text-cyan font-mono text-xl">01.</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">About Me</h2>
          <div className="h-[1px] bg-steel/30 flex-grow max-w-xs ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-steel text-base md:text-lg leading-relaxed mb-6 font-light">
              I am an Experienced <span className="text-cyan font-medium">Denim Washing Professional</span> with over 10 years of expertise spanning washing, stitching, cutting, quality assurance, production management, and textile operations.
            </p>
            <p className="text-steel text-base md:text-lg leading-relaxed font-light">
              My mission is to revolutionize the denim industry by integrating sustainable practices, such as <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Ozone Bleaching</span> and <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Waterless Enzyme Technology</span>, while maintaining the highest standards of quality assurance and buyer compliance. I bridge the gap between traditional craftsmanship and futuristic manufacturing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, scale: 0.8, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="glass-card p-6 rounded-xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <feat.icon className="text-cyan mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" size={32} />
                <h3 className="text-white font-bold mb-2 font-display">{feat.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{feat.desc}</p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan/10 rounded-full blur-2xl group-hover:bg-cyan/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
