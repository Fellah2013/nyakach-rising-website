import React from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Manifesto from './components/sections/Manifesto';
import Impact from './components/sections/Impact';
import GetInvolved from './components/sections/GetInvolved';
import News from './components/sections/News';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import WhatsAppButton from './components/WhatsAppButton';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-uda-yellow selection:text-uda-green-dark">
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --uda-yellow: #FFD700;
          --uda-green: #008000;
          --uda-green-dark: #004d00;
          --uda-green-light: #00a000;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        /* Fallback classes if Tailwind theme doesn't pick up variables */
        .bg-uda-yellow { background-color: var(--uda-yellow); }
        .text-uda-yellow { color: var(--uda-yellow); }
        .border-uda-yellow { border-color: var(--uda-yellow); }
        
        .bg-uda-green { background-color: var(--uda-green); }
        .text-uda-green { color: var(--uda-green); }
        .border-uda-green { border-color: var(--uda-green); }
        
        .bg-uda-green-dark { background-color: var(--uda-green-dark); }
        .text-uda-green-dark { color: var(--uda-green-dark); }
        .border-uda-green-dark { border-color: var(--uda-green-dark); }

        .bg-uda-yellow\\/90 { background-color: rgba(255, 215, 0, 0.9); }
        .bg-uda-yellow\\/20 { background-color: rgba(255, 215, 0, 0.2); }
        .bg-uda-yellow\\/10 { background-color: rgba(255, 215, 0, 0.1); }
        .bg-uda-green\\/20 { background-color: rgba(0, 128, 0, 0.2); }
        .bg-uda-green\\/10 { background-color: rgba(0, 128, 0, 0.1); }
        .border-uda-yellow\\/30 { border-color: rgba(255, 215, 0, 0.3); }
        .border-uda-yellow\\/50 { border-color: rgba(255, 215, 0, 0.5); }
        .bg-uda-yellow\\/30 { background-color: rgba(255, 215, 0, 0.3); }
      `}} />
      <Header />
      <main>
        <Hero />
        <About />
        <Manifesto />
        <Impact />
        <News />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;