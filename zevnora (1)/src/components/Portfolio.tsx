import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { title: 'Social Media Campaign', category: 'Marketing' },
  { title: 'Brand Identity', category: 'Branding' },
  { title: 'Digital Marketing Campaign', category: 'Strategy' },
  { title: 'Creative Content', category: 'Content' },
  { title: 'Social Media Design', category: 'Design' },
  { title: 'Video Content', category: 'Production' },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-white/[0.02] border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold"
          >
            SELECTED WORK
          </motion.h2>
          
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-electric-blue hover:text-white transition-colors flex items-center gap-2 font-medium"
          >
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/5 border border-white/10 glass-panel-hover">
                {/* Placeholder Image Graphic */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center p-8">
                   <div className="w-full h-full border border-dashed border-white/20 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:border-electric-blue/30 transition-colors">
                     <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-purple/20 to-electric-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     <span className="text-white/30 font-heading text-lg font-medium group-hover:text-white/70 transition-colors relative z-10">
                       Project Image Placeholder
                     </span>
                   </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-1 text-white group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-electric-blue group-hover:text-black group-hover:border-electric-blue transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
