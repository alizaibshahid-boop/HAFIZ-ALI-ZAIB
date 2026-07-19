import { useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const [imageError, setImageError] = useState(false);

  return (
    <footer className="bg-black py-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-blue/5 rounded-t-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 relative group inline-flex mb-2">
              <img 
                src="https://i.ibb.co/QjptDfy9/ZEVNORA-Logo-2.png" 
                alt="ZEVNORA Logo" 
                className="h-8 md:h-10 w-auto object-contain" 
              />
            </a>
            <p className="text-gray-400 font-light leading-relaxed">
              A modern digital agency helping ambitious brands grow through social media, marketing, branding and creative design.
            </p>
            <p className="text-electric-blue font-medium text-sm tracking-wide">
              Built for brands that move forward.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Branding & Identity</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Creative Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Connect</h4>
            <div className="space-y-4 mb-6">
              <a href="mailto:alizaib.shahid@icloud.com" className="block text-gray-400 hover:text-white transition-colors text-sm break-all">
                alizaib.shahid@icloud.com
              </a>
              <p className="text-gray-400 text-sm">UK: +44 73 4242 7542</p>
              <p className="text-gray-400 text-sm">PK: +92 307 278 4472</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-electric-blue hover:bg-electric-blue/10 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-electric-blue hover:bg-electric-blue/10 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © 2026 ZEVNORA. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
