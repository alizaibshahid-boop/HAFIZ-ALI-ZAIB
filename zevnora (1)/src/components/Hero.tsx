import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-mesh">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vibrant-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-electric-blue/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-electric-blue/30 text-electric-blue text-sm font-medium tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
            Digital Creative Agency
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            WE BUILD BRANDS THAT <br className="hidden md:block" />
            <span className="text-gradient">MOVE FORWARD.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            ZEVNORA is a modern digital agency helping ambitious brands grow through social media, digital marketing, branding, creative design and content that makes an impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white bg-gradient-to-r from-vibrant-purple to-electric-blue hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white glass-panel glass-panel-hover flex items-center justify-center transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll down</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
