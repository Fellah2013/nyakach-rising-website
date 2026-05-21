import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/af53913a-798f-48fc-9bdd-68dc3ff372f2/hon-alfred-opiya-hero-e722b45f-1778844817827.webp"
          alt="Hon. Alfred Ochieng Opiyo in West Nyakach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-uda-green-dark/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-uda-green-dark/40 via-transparent to-uda-green-dark/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-white"
          >
            <span className="inline-block px-4 py-1 bg-uda-yellow/90 backdrop-blur-md rounded-full text-uda-green-dark text-sm font-black mb-6 border-2 border-white shadow-lg uppercase tracking-wider">
              UDA Candidate – West Nyakach Ward
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight drop-shadow-2xl text-balance">
              Hon. <span className="text-uda-yellow">Alfred Ochieng Opiyo</span>
            </h1>
            <p className="text-xl md:text-3xl text-white mb-10 font-medium leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
              “Kazi ni Kazi. Building a Better West Nyakach Together”
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-uda-yellow hover:bg-yellow-400 text-uda-green-dark font-black text-xl px-10 py-8 h-auto shadow-2xl border-b-4 border-yellow-600 transition-all active:border-b-0 active:translate-y-1">
                Join the Movement
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-uda-green-dark font-bold text-xl px-10 py-8 h-auto backdrop-blur-sm shadow-2xl transition-all">
                Support the Campaign
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats/Floating element for visual interest */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl border-2 border-uda-yellow shadow-2xl flex items-center space-x-4 animate-bounce-subtle"
        >
          <div className="w-12 h-12 bg-uda-green rounded-full flex items-center justify-center text-white shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <p className="text-uda-green-dark font-black text-2xl leading-none">5,000+</p>
            <p className="text-uda-green font-bold text-sm">Supporters Joined</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;