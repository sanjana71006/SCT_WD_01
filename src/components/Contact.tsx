import React, { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, User, MessageSquare, Clock, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    'Software & Web Development',
    'Mobile/App Development',
    'Machine Learning & Data Science',
    'Cyber Security',
    'UI/UX & Graphic Design',
    'Digital Marketing'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@skillcraft.tech',
      description: 'Get in touch for program inquiries',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 98765 43210',
      description: 'Speak to our admission counselors',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Mumbai, Maharashtra',
      description: 'Our headquarters location',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Sat: 9AM - 7PM',
      description: 'We\'re here to help you',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Started</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your career? Contact us today to begin your virtual internship journey with SkillCraft Technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                Apply for Internship
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Program *
                    </label>
                    <select
                      id="program"
                      name="program"
                      required
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    >
                      <option value="">Select a program</option>
                      {programs.map((program, index) => (
                        <option key={index} value={program}>{program}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                        placeholder="Tell us about your career goals and expectations..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Application
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h4>
                  <p className="text-gray-600">Thank you for your interest. We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-lg font-bold text-gray-800">{info.value}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="font-bold text-xl mb-4">Why Choose SkillCraft?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-200" />
                  <span>Industry-recognized certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-200" />
                  <span>Expert mentorship & guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-200" />
                  <span>Hands-on project experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-200" />
                  <span>Affordable pricing at ₹99</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;