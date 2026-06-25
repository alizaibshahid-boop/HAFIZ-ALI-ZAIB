import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-cyan font-mono text-xl">05.</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Contact</h2>
          <div className="h-[1px] bg-steel/30 flex-grow max-w-xs ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease }}
          >
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Let's connect.</h3>
            <p className="text-steel mb-10 text-base md:text-lg font-light leading-relaxed">
              Whether you have a question about denim sustainability, quality assurance, or want to discuss a potential collaboration, my inbox is always open.
            </p>

            <div className="space-y-6">
              <a href="tel:+923060032384" className="flex items-center gap-4 group w-max">
                <div className="w-12 h-12 bg-navy border border-[var(--color-frost)] rounded-full flex items-center justify-center group-hover:border-cyan group-hover:bg-cyan/10 transition-all duration-300">
                  <Phone size={20} className="text-cyan group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-steel group-hover:text-white transition-colors">+92-306-0032384</span>
              </a>
              <a href="tel:+923151249989" className="flex items-center gap-4 group w-max">
                <div className="w-12 h-12 bg-navy border border-[var(--color-frost)] rounded-full flex items-center justify-center group-hover:border-cyan group-hover:bg-cyan/10 transition-all duration-300">
                  <Phone size={20} className="text-cyan group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-steel group-hover:text-white transition-colors">+92-315-1249989</span>
              </a>
              <a href="mailto:shahzaibshahid@icloud.com" className="flex items-center gap-4 group w-max">
                <div className="w-12 h-12 bg-navy border border-[var(--color-frost)] rounded-full flex items-center justify-center group-hover:border-cyan group-hover:bg-cyan/10 transition-all duration-300">
                  <Mail size={20} className="text-cyan group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-steel group-hover:text-white transition-colors break-all">shahzaibshahid@icloud.com</span>
              </a>
              <div className="flex items-center gap-4 group w-max">
                <div className="w-12 h-12 bg-navy border border-[var(--color-frost)] rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-cyan" />
                </div>
                <span className="text-steel">Shah Faisal, Karachi, Pakistan</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="glass p-6 md:p-8 rounded-xl relative hover:shadow-[0_0_30px_rgba(0,240,255,0.05)] transition-shadow duration-500"
          >
            <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-steel mb-2 font-mono">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-navy/50 border border-[var(--color-frost)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:bg-navy transition-all duration-300 placeholder:text-steel/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-steel mb-2 font-mono">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-navy/50 border border-[var(--color-frost)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:bg-navy transition-all duration-300 placeholder:text-steel/50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-steel mb-2 font-mono">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-navy/50 border border-[var(--color-frost)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan focus:bg-navy transition-all duration-300 resize-none placeholder:text-steel/50"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan text-navy font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-navy hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 group active:scale-[0.98]"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
