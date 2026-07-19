import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', details: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              LET'S CREATE <br />
              <span className="text-electric-blue">SOMETHING GREAT.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-12 max-w-md leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, we're here to help your brand grow.
            </p>

            <div className="space-y-8">
              <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-vibrant-purple/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-vibrant-purple/10 flex items-center justify-center text-vibrant-purple shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">WhatsApp Us</h3>
                    <div className="space-y-2 mt-3">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">UK & International</p>
                        <a href="https://wa.me/447342427542" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-blue transition-colors font-medium text-lg">
                          +44 73 4242 7542
                        </a>
                      </div>
                      <div className="pt-2">
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Pakistan</p>
                        <a href="https://wa.me/923072784472" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-blue transition-colors font-medium text-lg">
                          +92 307 278 4472
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-electric-blue/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">Email Us</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1 mt-3">Ali Zaib - CEO</p>
                    <a href="mailto:alizaib.shahid@icloud.com" className="text-gray-300 hover:text-electric-blue transition-colors font-medium text-lg break-all">
                      alizaib.shahid@icloud.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border-white/10 relative">
              <h3 className="font-heading text-2xl font-bold text-white mb-6">Send an Enquiry</h3>
              
              {isSuccess ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-2xl text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p className="text-green-400/80">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-400 ml-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="company" className="text-sm font-medium text-gray-400 ml-1">Company / Brand</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="service" className="text-sm font-medium text-gray-400 ml-1">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-deep-black text-gray-400">Select a service</option>
                      <option value="Social Media Marketing" className="bg-deep-black">Social Media Marketing</option>
                      <option value="Digital Marketing" className="bg-deep-black">Digital Marketing</option>
                      <option value="Branding" className="bg-deep-black">Branding & Visual Identity</option>
                      <option value="Creative Design" className="bg-deep-black">Creative Design</option>
                      <option value="Content Creation" className="bg-deep-black">Content Creation</option>
                      <option value="Other" className="bg-deep-black">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="details" className="text-sm font-medium text-gray-400 ml-1">Project Details</label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors resize-none"
                      placeholder="Tell us about your goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-medium text-white bg-gradient-to-r from-vibrant-purple to-electric-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
