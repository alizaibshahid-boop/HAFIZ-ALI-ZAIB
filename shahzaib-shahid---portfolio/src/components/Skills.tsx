import { motion } from 'motion/react';

const skills = [
  { category: 'Technology', items: ['Denim Washing Tech', 'Ozone Bleaching', 'Wet Ozone', 'Waterless Enzyme Tech'] },
  { category: 'Operations', items: ['Production Management', 'Cutting Quality Control', 'Stitching Operations', 'Textile Manufacturing'] },
  { category: 'Quality & Strategy', items: ['Laundry Quality Assurance', 'Garment Inspection', 'Buyer Compliance', 'Team Leadership', 'Process Optimization'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-16 justify-end"
        >
          <div className="h-[1px] bg-steel/30 flex-grow max-w-xs mr-4"></div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Core Expertise</h2>
          <span className="text-cyan font-mono text-xl">.02</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass p-8 rounded-xl border-t border-cyan/30 hover:border-cyan/80 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white font-display">{skillGroup.category}</h3>
                <div className="w-8 h-8 rounded-full border border-cyan/50 flex items-center justify-center bg-cyan/10">
                  <div className="w-2 h-2 bg-cyan rounded-full animate-pulse shadow-[0_0_10px_#00f0ff]" />
                </div>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((item, i) => (
                  <div key={item} className="relative group">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-steel group-hover:text-white transition-colors">{item}</span>
                    </div>
                    <div className="h-1.5 w-full bg-navy/80 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan/40 to-cyan rounded-full"
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        whileInView={{ scaleX: Math.random() * 0.2 + 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
