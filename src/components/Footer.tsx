import React from 'react';
import { Code, Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const programs = [
    'Software & Web Development',
    'Mobile/App Development',
    'Machine Learning & Data Science',
    'Cyber Security',
    'UI/UX & Graphic Design',
    'Digital Marketing',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Code className="h-8 w-8 text-blue-400" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-50"></div>
                </div>
                <span className="text-2xl font-bold">SkillCraft</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting success through technology by empowering the next generation of tech professionals with practical skills and industry experience.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-300">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-300">Programs</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection('#programs')}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block text-left text-sm"
                    >
                      {program}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-300">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Mumbai, Maharashtra</p>
                    <p className="text-gray-400 text-sm">India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:hello@skillcraft.tech" className="text-gray-300 hover:text-white transition-colors duration-300">
                    hello@skillcraft.tech
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-blue-300">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-lg hover:shadow-lg transition-all duration-300 flex items-center">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} SkillCraft Technology. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                <span>for aspiring developers</span>
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;