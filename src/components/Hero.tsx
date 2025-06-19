import React, { useEffect, useState } from 'react';
import { ChevronRight, Play, Award, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: Users, value: '20K+', label: 'Students Trained' },
    { icon: Award, value: '99%', label: 'Success Rate' },
    { icon: BookOpen, value: '6+', label: 'Tech Domains' },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Craft Your
            </span>
            <br />
            <span className="relative">
              Tech Future
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform scale-x-0 animate-scale-x"></div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join India's leading virtual internship platform and master in-demand tech skills through hands-on projects and industry mentorship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToPrograms}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Start Your Journey
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>

          {/* Animated Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className={`text-center transition-all duration-500 ${
                    currentStat === index ? 'scale-110 text-blue-300' : 'text-blue-100'
                  }`}
                >
                  <div className="flex justify-center mb-2">
                    <Icon className={`w-8 h-8 transition-all duration-500 ${
                      currentStat === index ? 'animate-bounce' : ''
                    }`} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm md:text-base opacity-80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;