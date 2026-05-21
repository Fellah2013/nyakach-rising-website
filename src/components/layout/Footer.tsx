import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white py-16 border-t-4 border-uda-yellow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-uda-yellow rounded-full flex items-center justify-center text-uda-green-dark font-black text-xl border-2 border-white">
                AO
              </div>
              <span className="font-black text-2xl">Hon. Alfred Ochieng Opiyo</span>
            </div>
            <p className="text-stone-400 text-lg mb-8 max-w-md font-medium">
              A leadership of integrity, accountability, and community-first service for the people of West Nyakach Ward.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-uda-yellow hover:text-uda-green-dark hover:scale-110 transition-all shadow-lg"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xl mb-6 text-uda-yellow uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#about" className="text-stone-400 hover:text-uda-yellow transition-colors">About Alfred</a></li>
              <li><a href="#manifesto" className="text-stone-400 hover:text-uda-yellow transition-colors">Manifesto</a></li>
              <li><a href="#impact" className="text-stone-400 hover:text-uda-yellow transition-colors">Community Vision</a></li>
              <li><a href="#news" className="text-stone-400 hover:text-uda-yellow transition-colors">Latest News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl mb-6 text-uda-yellow uppercase tracking-widest">Get Involved</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#get-involved" className="text-stone-400 hover:text-uda-yellow transition-colors">Volunteer</a></li>
              <li><a href="#get-involved" className="text-stone-400 hover:text-uda-yellow transition-colors">Support Pledge</a></li>
              <li><a href="#contact" className="text-stone-400 hover:text-uda-yellow transition-colors">Contact Team</a></li>
              <li><a href="#home" className="text-stone-400 hover:text-uda-yellow transition-colors">Join Movement</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 text-sm font-bold">
            © {new Date().getFullYear()} Hon. Alfred Ochieng Opiyo Campaign. All rights reserved.
          </p>
          <div className="flex items-center text-stone-500 text-sm font-bold">
            Made with <Heart className="w-4 h-4 mx-1 text-uda-yellow" /> for West Nyakach
          </div>
          <div className="flex space-x-6 text-stone-500 text-sm font-bold">
            <a href="#" className="hover:text-uda-yellow">Privacy Policy</a>
            <a href="#" className="hover:text-uda-yellow">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;