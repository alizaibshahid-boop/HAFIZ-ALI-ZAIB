import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const corePillars = ['Strategy', 'Creativity', 'Technology', 'Content', 'Marketing'];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-vibrant-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              CREATIVE MINDS. <br />
              <span className="text-electric-blue">DIGITAL IMPACT.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed mb-8">
              <p>
                ZEVNORA is a modern digital agency focused on helping businesses and brands build a powerful, lasting digital presence. We don't just create content; we build digital experiences that drive real results.
              </p>
              <p>
                In a crowded digital landscape, standing out requires more than just good design. It requires a perfect combination of:
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {corePillars.map((pillar, index) => (
                <motion.div
                  key={pillar}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/5 text-sm font-medium text-white"
                >
                  <CheckCircle2 className="w-4 h-4 text-electric-blue" />
                  {pillar}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:ml-auto w-full max-w-md"
          >
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-electric-blue/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-electric-blue/20 to-transparent blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-vibrant-purple to-electric-blue p-[2px]">
                  <div className="w-full h-full rounded-full bg-deep-black flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-vibrant-purple to-electric-blue">
                      AZ
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">Ali Zaib</h3>
                  <p className="text-electric-blue text-sm font-medium tracking-wide uppercase">CEO & Founder, ZEVNORA</p>
                </div>
              </div>

              <div className="relative">
                <span className="absolute -top-4 -left-2 text-4xl text-white/10 font-serif">"</span>
                <p className="text-gray-300 italic font-light leading-relaxed relative z-10 pl-4">
                  Our mission is to help ambitious brands navigate the digital world with confidence. We combine creative thinking with strategic execution to turn ideas into measurable growth.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
