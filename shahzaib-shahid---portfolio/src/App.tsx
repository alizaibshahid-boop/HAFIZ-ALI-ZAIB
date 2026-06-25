/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Background3D = lazy(() => import('./components/Background3D'));

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans antialiased selection:bg-cyan selection:text-navy">
      <Suspense fallback={<div className="fixed inset-0 bg-navy z-0" />}>
        <Background3D />
      </Suspense>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

