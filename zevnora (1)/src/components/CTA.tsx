import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-vibrant-purple/30 to-electric-blue/30 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel max-w-5xl mx-auto rounded-3xl p-12 md:p-20 relative overflow-hidden border-electric-blue/20"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
          
          <div className="relative z-10">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              READY TO MOVE YOUR <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-purple to-electric-blue">BRAND FORWARD?</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              Let's turn your ideas into a digital presence that gets noticed.
            </p>
            <a
              href="#contact"
              className="inline-flex px-8 py-4 rounded-full font-medium text-white bg-gradient-to-r from-vibrant-purple to-electric-blue hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 items-center justify-center gap-2 group text-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
