import React, { useEffect, useState, useRef } from 'react';
import { Monitor, Clock, Award, Users, MapPin, Zap, CheckCircle, Star } from 'lucide-react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Monitor,
      title: 'Fully Virtual Experience',
      description: 'Learn from anywhere with our comprehensive online platform designed for remote learning excellence.',
      benefits: ['24/7 Platform Access', 'Interactive Learning Tools', 'Cross-Platform Compatibility'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Balance your studies with our flexible batch timings and self-paced learning modules.',
      benefits: ['Multiple Batch Options', 'Self-Paced Modules', 'Weekend Sessions Available'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Earn certificates that are valued by top companies and enhance your professional credibility.',
      benefits: ['Industry-Approved Curriculum', 'Employer-Recognized Certificates', 'LinkedIn Verification'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Get personalized guidance from industry professionals with years of hands-on experience.',
      benefits: ['1-on-1 Mentoring Sessions', 'Industry Expert Trainers', 'Career Guidance'],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: MapPin,
      title: 'Nationwide Reach',
      description: 'Connect with students from across India and build a strong professional network.',
      benefits: ['Pan-India Student Community', 'Regional Language Support', 'Local Industry Insights'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'Rapid Skill Development',
      description: 'Accelerated learning paths designed to make you job-ready in weeks, not months.',
      benefits: ['Intensive Learning Programs', 'Real-World Project Focus', 'Quick Skill Acquisition'],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const stats = [
    { number: '20K+', label: 'Students Trained', icon: Users },
    { number: '6+', label: 'Tech Domains', icon: Monitor },
    { number: '99%', label: 'Success Rate', icon: Star },
    { number: '₹99', label: 'Affordable Certification', icon: Award },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SkillCraft</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes our virtual internship programs the preferred choice for ambitious students across India.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Features List */}
          <div className={`space-y-4 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                    isActive ? 'border-blue-200 bg-white' : 'border-white/50'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        isActive ? 'scale-110' : ''
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                          isActive ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <div className={`transition-transform duration-300 ${
                        isActive ? 'rotate-90' : 'group-hover:rotate-90'
                      }`}>
                        <CheckCircle className={`w-5 h-5 ${
                          isActive ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Detail */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="sticky top-24">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${features[activeFeature].gradient} rounded-xl flex items-center justify-center`}>
                    {React.createElement(features[activeFeature].icon, { className: 'w-8 h-8 text-white' })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {features[activeFeature].title}
                    </h3>
                    <p className="text-gray-600">Feature Highlight</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {features[activeFeature].description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${features[activeFeature].gradient} rounded-full`}></div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-2 mt-8">
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        index === activeFeature ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2 hover:w-4 hover:bg-gray-400'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;