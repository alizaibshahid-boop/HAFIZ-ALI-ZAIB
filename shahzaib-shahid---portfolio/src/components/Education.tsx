import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Terminal } from 'lucide-react';

const educations = [
  { degree: "Master's in International Relations", inst: 'Sindh University', icon: BookOpen },
  { degree: 'Bachelor of Arts', inst: 'Sindh University', icon: GraduationCap },
  { degree: 'DAE Textile Dyeing & Printing', inst: 'Karachi Technical Board', icon: Award },
  { degree: 'Advance Software Engineering', inst: 'Aptech', icon: Terminal },
  { degree: 'Information Technology Certificate', inst: 'Korean Computer Academy', icon: Terminal },
];

const ease = [0.22, 1, 0.36, 1];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-16 justify-end"
        >
          <div className="h-[1px] bg-steel/30 flex-grow max-w-xs mr-4"></div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Education</h2>
          <span className="text-cyan font-mono text-xl">.04</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="glass p-6 rounded-xl relative group hover:border-cyan/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,240,255,0.05)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy rounded-xl border border-[var(--color-frost)] group-hover:border-cyan/50 group-hover:bg-cyan/10 transition-colors duration-300 shrink-0">
                  <edu.icon className="text-cyan group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 leading-tight">{edu.degree}</h3>
                  <p className="text-steel text-sm">{edu.inst}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
