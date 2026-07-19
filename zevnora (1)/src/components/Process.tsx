import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Discover',
    description: 'We understand your brand, audience and goals.',
  },
  {
    num: '02',
    title: 'Strategise',
    description: 'We develop a clear creative and digital strategy.',
  },
  {
    num: '03',
    title: 'Create',
    description: 'We turn ideas into powerful visuals, content and campaigns.',
  },
  {
    num: '04',
    title: 'Grow',
    description: 'We optimise, improve and help your brand move forward.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold"
          >
            FROM IDEA TO <span className="text-electric-blue">IMPACT</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 right-0 h-[1px] bg-white/10 hidden md:block">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-electric-blue to-transparent origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center group"
              >
                <div className="w-24 h-24 mx-auto rounded-full glass-panel flex items-center justify-center mb-6 relative z-10 group-hover:border-electric-blue/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 bg-deep-black">
                  <span className="font-heading text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 group-hover:from-electric-blue group-hover:to-vibrant-purple transition-all duration-300">
                    {step.num}
                  </span>
                </div>
                
                <h3 className="font-heading text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
