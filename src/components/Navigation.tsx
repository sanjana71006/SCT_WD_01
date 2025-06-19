import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Users, BookOpen, Shield, Palette, TrendingUp } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'programs', 'features', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <img src="skillcraft.jpeg"  alt="SkillCraft Logo" className={`h-8 w-8 transition-all duration-300 ${
    isScrolled ? 'brightness-100' : 'brightness-150'
  } group-hover:scale-110 group-hover:rotate-12`}  
  />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              SkillCraft
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-white bg-white/20'
                    : isScrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      : 'text-white/80 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Start Learning
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 mt-4"
            >
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;