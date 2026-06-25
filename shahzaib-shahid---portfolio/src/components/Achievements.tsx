import { motion, useInView, animate } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Production Processes', value: 1000, suffix: '+' },
  { label: 'QA Inspections', value: 100, suffix: '+' },
  { label: 'Buyer Compliance', value: 100, suffix: '%' },
];

const ease = [0.22, 1, 0.36, 1];

function Counter({ from = 0, to, duration = 2, suffix = '' }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Achievements() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="glass p-6 md:p-8 rounded-xl text-center border border-[var(--color-frost)] relative group overflow-hidden hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-steel text-xs md:text-sm uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
