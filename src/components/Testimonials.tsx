import React, { useEffect, useState, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Briefcase } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const testimonials = [
    {
      name: 'Harshitha L.',
      role: 'Software Developer',
      location: 'Bengaluru, Karnataka',
      rating: 5,
      text: 'SkillCraft transformed my coding journey! The hands-on projects and mentorship helped me land my dream job as a software developer. The virtual format allowed me to learn at my own pace while getting real industry experience.',
      program: 'Software & Web Development',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      company: 'Tech Solutions Pvt Ltd',
    },
    {
      name: 'K R Nandeesha',
      role: 'Software Development Intern',
      location: 'Bengaluru, Karnataka',
      rating: 5,
      text: 'The Machine Learning program at SkillCraft gave me the confidence to work on complex AI projects. The mentors were incredibly supportive, and the practical approach helped me understand concepts that seemed impossible before.',
      program: 'Machine Learning & Data Science',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      company: 'AI Innovations Ltd',
    },
    {
      name: 'Lavanya S',
      role: 'UI/UX Designer',
      location: 'Bengaluru, Karnataka',
      rating: 5,
      text: 'The UI/UX program exceeded my expectations! I learned industry-standard tools and created a portfolio that helped me secure my current position. The design thinking approach taught here is invaluable.',
      program: 'UI/UX & Graphic Design',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      company: 'Creative Design Studio',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Cybersecurity Analyst',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'The Cybersecurity program was comprehensive and practical. I learned ethical hacking techniques and security protocols that are directly applicable in my current role. The certification opened many doors for me.',
      program: 'Cyber Security',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      company: 'SecureNet Technologies',
    },
    {
      name: 'Priya Sharma',
      role: 'Digital Marketing Executive',
      location: 'Delhi, NCR',
      rating: 5,
      text: 'SkillCraft\'s Digital Marketing program gave me hands-on experience with real campaigns. The practical approach and industry insights helped me transition from a fresher to a confident marketing professional.',
      program: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      company: 'Digital Growth Agency',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our successful graduates who transformed their careers through SkillCraft's virtual internship programs.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-blue-600" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <Star key={index} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{testimonials[currentTestimonial].role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{testimonials[currentTestimonial].location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {testimonials[currentTestimonial].program}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentTestimonial
                  ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
              }`}
            ></button>
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 cursor-pointer hover:scale-105"
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;