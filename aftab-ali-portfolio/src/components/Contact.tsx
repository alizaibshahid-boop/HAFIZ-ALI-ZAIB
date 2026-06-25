import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, MapPin, Send, ShieldCheck, Terminal, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmitStatus, setTransmitStatus] = useState<string[]>([]);
  const [transmissionComplete, setTransmissionComplete] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateTransmission = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsTransmitting(true);
    setTransmissionComplete(false);
    setTransmitStatus([]);

    const logSteps = [
      'Establishing secure TLS operations handshake...',
      'Mapping gateway nodes to Karachi, Pakistan...',
      'Packing message parameters into secure telemetry envelope...',
      `Targeting coordinates: 24.8607° N, 67.0011° E (Korangi #5)`,
      'Verifying digital dispatch permissions...',
      'Transmitting secure operational packet...',
      'DISPATCH TRANSMITTED AND REGISTERED SUCCESSFULLY.',
    ];

    for (let i = 0; i < logSteps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setTransmitStatus((prev) => [...prev, logSteps[i]]);
    }

    setTransmissionComplete(true);
    setIsTransmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 md:px-12 relative flex flex-col justify-center select-none" id="section-contact">
      {/* Background radial spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 border-b border-slate-800 pb-6">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            Communications Channel // File 05
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Establish Comm-link
          </h2>
        </div>

        {/* Form and info split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coordinates and info (Left column) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pl-2">
                Central Operations Node
              </span>

              <div className="space-y-3">
                {/* Node Location */}
                <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-900 flex gap-4 hover:border-cyan-500/20 transition-all duration-300">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 h-fit self-start">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      Location / HQ
                    </h4>
                    <p className="text-sm font-bold text-white tracking-wide mt-0.5">
                      Korangi #5, Karachi, Pakistan
                    </p>
                  </div>
                </div>

                {/* Node Email */}
                <a 
                  href="mailto:affiaftab96@gmail.com"
                  className="p-5 rounded-xl bg-slate-900/30 border border-slate-900 flex gap-4 hover:border-cyan-500/30 transition-all duration-300 pointer-events-auto cursor-pointer block"
                >
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 h-fit self-start">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      Direct Email Node
                    </h4>
                    <p className="text-sm font-bold text-white tracking-wide mt-0.5 hover:text-cyan-400 transition-colors break-all">
                      affiaftab96@gmail.com
                    </p>
                  </div>
                </a>

                {/* Node LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/aftab-malik-9303102b2" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-5 rounded-xl bg-slate-900/30 border border-slate-900 flex gap-4 hover:border-cyan-500/30 transition-all duration-300 pointer-events-auto cursor-pointer block"
                >
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 h-fit self-start">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      LinkedIn Directory
                    </h4>
                    <p className="text-sm font-bold text-white tracking-wide mt-0.5 hover:text-cyan-400 transition-colors truncate">
                      aftab-malik-9303102b2
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Micro secure notice */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex items-center gap-3.5 font-mono text-[10px] text-slate-500">
              <ShieldCheck className="text-emerald-400 shrink-0" size={16} />
              <span>TLS v1.3 Secure Connection. Packets are dispatched directly to the registry inbox.</span>
            </div>
          </div>

          {/* Secure Transmitter Form (Right column) */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/35 border border-slate-800 backdrop-blur-md flex flex-col gap-6">
              
              <AnimatePresence mode="wait">
                {!isTransmitting && !transmissionComplete ? (
                  <motion.form 
                    key="form"
                    onSubmit={simulateTransmission}
                    className="space-y-4 pointer-events-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    id="contact-transmitting-form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider pl-1">
                          OPERATOR NAME *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-850 hover:border-slate-700 focus:border-cyan-500/50 rounded-lg text-xs sm:text-sm text-white font-mono outline-none focus:ring-0 transition-all placeholder-slate-700"
                          placeholder="Identify sender..."
                          id="contact-input-name"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider pl-1">
                          SENDER EMAIL *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-850 hover:border-slate-700 focus:border-cyan-500/50 rounded-lg text-xs sm:text-sm text-white font-mono outline-none focus:ring-0 transition-all placeholder-slate-700"
                          placeholder="Define target reply email..."
                          id="contact-input-email"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider pl-1">
                        SUBJECT MANIFEST
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-850 hover:border-slate-700 focus:border-cyan-500/50 rounded-lg text-xs sm:text-sm text-white font-mono outline-none focus:ring-0 transition-all placeholder-slate-700"
                        placeholder="Define subject protocol..."
                        id="contact-input-subject"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider pl-1">
                        COMMUNICATION PAYLOAD *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-850 hover:border-slate-700 focus:border-cyan-500/50 rounded-lg text-xs sm:text-sm text-white font-mono outline-none focus:ring-0 transition-all placeholder-slate-700 resize-none"
                        placeholder="State your business/ops enquiry..."
                        id="contact-input-message"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 transform active:scale-98 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      id="contact-btn-submit"
                    >
                      <Send size={14} />
                      Transmit Telemetry Packet
                    </button>
                  </motion.form>
                ) : isTransmitting ? (
                  /* Telemetry Transmitter Screen (Log sequence) */
                  <motion.div 
                    key="transmitter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 rounded-xl bg-slate-950 border border-cyan-500/30 flex flex-col h-72 justify-between"
                  >
                    <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                      <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                        <Terminal size={14} className="animate-pulse" />
                        <span>Transmitting Packet...</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        TLS GATEWAY SECURE
                      </span>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-1.5 p-2 font-mono text-[10px] sm:text-xs text-slate-400 leading-relaxed scrollbar-none">
                      {transmitStatus.map((status, idx) => (
                        <div 
                          key={idx} 
                          className={idx === transmitStatus.length - 1 ? 'text-cyan-400 font-bold' : ''}
                        >
                          &gt; {status}
                        </div>
                      ))}
                    </div>

                    <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4.2, ease: 'linear' }}
                      />
                    </div>
                  </motion.div>
                ) : (
                  /* Success Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-xl bg-slate-950 border border-emerald-500/30 text-center flex flex-col items-center justify-center gap-4 h-72"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      <ShieldCheck size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-mono font-bold text-white uppercase tracking-wider">
                        Transmission Successful
                      </h3>
                      <p className="text-xs text-slate-400 font-sans max-w-sm">
                        Your secure operations ledger query has been packaged, encrypted, and dispatched to Aftab Ali's terminal mailbox.
                      </p>
                    </div>

                    <button
                      onClick={() => setTransmissionComplete(false)}
                      className="px-6 py-2 bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-cyan-400 hover:text-cyan-300 font-mono text-[10px] uppercase tracking-wider rounded-lg transition-all cursor-pointer pointer-events-auto"
                    >
                      Reset Gateway Port
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
