import React, { useEffect, useState, useRef } from 'react';
import { Target, Users, Award, TrendingUp, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const companyInfo = [
    { icon: MapPin, label: 'Headquarters', value: 'Mumbai, Maharashtra' },
    { icon: Calendar, label: 'Founded', value: '2024' },
    { icon: Users, label: 'Team Size', value: '2-10 Employees' },
    { icon: TrendingUp, label: 'LinkedIn Followers', value: '20.9K+' },
  ];

  const achievements = [
    { icon: Target, title: 'Mission-Driven', description: 'Crafting success through technology by bridging the gap between education and industry needs.' },
    { icon: Users, title: 'Student-Centric', description: 'Helping students across various fields develop practical skills and gain career-ready experience.' },
    { icon: Award, title: 'Quality Focused', description: 'Curated programs with hands-on projects, verified certificates, and industry mentorship.' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SkillCraft</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A new age technology company promoting practical learning through virtual internships and industry-focused skill development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Story */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                Our Story
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2024, SkillCraft Technology emerged as a Mumbai-based startup with a clear vision: to revolutionize how students and young professionals acquire practical tech skills. We recognized the gap between traditional education and industry requirements.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our virtual internship programs are designed to provide hands-on experience across high-demand tech domains, ensuring our students are not just educated but industry-ready.
              </p>
              
              {/* Company Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                {companyInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-500">{info.label}</div>
                        <div className="font-semibold text-gray-900">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-blue-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                "To craft success through technology by empowering the next generation of tech professionals with practical skills, industry mentorship, and real-world experience that bridges the gap between education and career excellence."
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;