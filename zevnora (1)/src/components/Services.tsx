import { motion } from 'motion/react';
import { Share2, TrendingUp, Users, Hexagon, PenTool, Image as ImageIcon } from 'lucide-react';

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Build a stronger social presence with strategic content, campaigns and audience-focused marketing.',
    icon: Share2,
  },
  {
    title: 'Digital Marketing',
    description: 'Reach the right audience with smart digital strategies designed to increase visibility, engagement and growth.',
    icon: TrendingUp,
  },
  {
    title: 'Social Media Management',
    description: 'Keep your brand active, consistent and engaging across your social platforms.',
    icon: Users,
  },
  {
    title: 'Branding & Visual Identity',
    description: 'Create a memorable brand identity that communicates who you are and what you stand for.',
    icon: Hexagon,
  },
  {
    title: 'Creative Design',
    description: 'Scroll-stopping graphics, campaign creatives and visual content designed to make your brand stand out.',
    icon: PenTool,
  },
  {
    title: 'Content Creation',
    description: 'Creative and engaging content designed to connect with your audience and strengthen your digital presence.',
    icon: ImageIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            WHAT WE DO
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl font-light"
          >
            Creative thinking. Digital strategy. Measurable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl group hover:border-electric-blue/50 hover:bg-glass-bg/80 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-purple/10 to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-electric-blue group-hover:text-white group-hover:bg-gradient-to-tr from-vibrant-purple to-electric-blue transition-all duration-500">
                <service.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-heading text-xl font-bold mb-3 text-white group-hover:text-glow transition-all">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
