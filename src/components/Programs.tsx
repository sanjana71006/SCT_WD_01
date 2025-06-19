import React, { useEffect, useState, useRef } from 'react';
import { Code, Smartphone, Brain, Shield, Palette, TrendingUp, ArrowRight, Clock, Users, Award } from 'lucide-react';

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const programs = [
    {
      icon: Code,
      title: 'Software & Web Development',
      description: 'Master full-stack development with modern frameworks and build production-ready applications.',
      skills: ['React', 'Node.js', 'Python', 'JavaScript', 'HTML/CSS'],
      duration: '4 Weeks',
      projects: '3-5 Projects',
      difficulty: 'Beginner to Advanced',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Smartphone,
      title: 'Mobile/App Development',
      description: 'Create native and cross-platform mobile applications for iOS and Android.',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      duration: '4 Weeks',
      projects: '2-4 Apps',
      difficulty: 'Intermediate',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      icon: Brain,
      title: 'Machine Learning & Data Science',
      description: 'Dive into AI/ML algorithms, data analysis, and predictive modeling techniques.',
      skills: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Jupyter'],
      duration: '6 Weeks',
      projects: '4-6 Models',
      difficulty: 'Advanced',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Learn ethical hacking, penetration testing, and cybersecurity best practices.',
      skills: ['Ethical Hacking', 'Network Security', 'Cryptography', 'Forensics'],
      duration: '5 Weeks',
      projects: '3-4 Security Audits',
      difficulty: 'Intermediate to Advanced',
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50',
    },
    {
      icon: Palette,
      title: 'UI/UX & Graphic Design',
      description: 'Design beautiful user interfaces and create compelling visual experiences.',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping'],
      duration: '4 Weeks',
      projects: '5-7 Designs',
      difficulty: 'Beginner to Intermediate',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Master SEO, social media marketing, and digital advertising strategies.',
      skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics', 'Content Strategy'],
      duration: '3 Weeks',
      projects: '2-3 Campaigns',
      difficulty: 'Beginner',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive virtual internship programs designed to give you hands-on experience in today's most in-demand tech domains.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent cursor-pointer transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={scrollToContact}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${program.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {program.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {program.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${program.gradient} text-white text-sm rounded-full font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                        >
                          {skill}
                        </span>
                      ))}
                      {program.skills.length > 3 && (
                        <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full font-medium">
                          +{program.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{program.projects}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      <span>{program.difficulty}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${program.gradient} text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300 transform group-hover:translate-y-0 translate-y-1`}>
                    Apply Now
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${program.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }}></div>
              </div>
            );
          })}
        </div>

        {/* Program Benefits */}
        <div className={`bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What You'll Get in Every Program
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures you gain practical skills and industry-ready experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Verified Certificate</h4>
              <p className="text-gray-600 text-sm">Industry-recognized certificate for just ₹99 to validate your skills and boost your resume.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Industry Mentorship</h4>
              <p className="text-gray-600 text-sm">Get guidance from experienced professionals working in top tech companies.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Hands-on Projects</h4>
              <p className="text-gray-600 text-sm">Build real-world projects that you can showcase in your portfolio to potential employers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;