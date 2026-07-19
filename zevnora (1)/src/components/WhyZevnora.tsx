import { motion } from 'motion/react';
import { Lightbulb, MonitorSmartphone, Target, Rocket } from 'lucide-react';

const reasons = [
  {
    title: 'Creative & Strategic Thinking',
    description: 'Every project combines creative ideas with a clear digital strategy.',
    icon: Lightbulb,
  },
  {
    title: 'Modern Digital Approach',
    description: 'We use modern tools, trends and technology to create impactful digital experiences.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Brand-Focused Solutions',
    description: 'We build solutions around your brand identity, audience and goals.',
    icon: Target,
  },
  {
    title: 'Focused on Growth',
    description: 'Our work is designed to help brands improve visibility, engagement and long-term digital growth.',
    icon: Rocket,
  },
];

export function WhyZevnora() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            WHY CHOOSE ZEVNORA?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex items-start gap-6 group hover:border-vibrant-purple/40 transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-vibrant-purple group-hover:text-white group-hover:bg-vibrant-purple transition-colors duration-300">
                <reason.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-2 text-white">{reason.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
