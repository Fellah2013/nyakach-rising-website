import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Impact', href: '#impact' },
    { name: 'Get Involved', href: '#get-involved' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-uda-yellow rounded-full flex items-center justify-center text-uda-green-dark font-bold text-xl border-2 border-uda-green shadow-sm">
            AO
          </div>
          <span className={`font-bold text-xl ${isScrolled ? 'text-uda-green-dark' : 'text-white drop-shadow-md'}`}>
            Hon. Alfred Ochieng Opiyo
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-semibold transition-colors hover:text-uda-yellow ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-uda-green hover:bg-uda-green-dark text-white font-bold border-b-4 border-uda-green-dark active:border-b-0 active:translate-y-0.5 transition-all">
            Support Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-stone-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-stone-100 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-700 font-bold py-2 border-b border-stone-50 hover:text-uda-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-uda-green hover:bg-uda-green-dark text-white w-full font-bold">
              Support Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;