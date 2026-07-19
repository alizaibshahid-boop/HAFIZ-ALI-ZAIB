/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyZevnora } from './components/WhyZevnora';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-deep-black text-white selection:bg-electric-blue selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyZevnora />
        <Process />
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
