import React from 'react';
import { Shield, Star, Clock, Award, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-amber-400" />,
      title: 'Exterior Detailing',
      description: 'Complete wash, clay bar, polish, and protection'
    },
    {
      icon: <Star className="w-8 h-8 text-amber-400" />,
      title: 'Interior Deep Clean',
      description: 'Thorough cleaning and conditioning of all surfaces'
    },
    {
      icon: <Award className="w-8 h-8 text-amber-400" />,
      title: 'Paint Correction',
      description: 'Professional swirl and scratch removal'
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-400" />,
      title: 'Ceramic Coating',
      description: 'Long-lasting protection and shine'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      text: 'Incredible attention to detail. My car looks better than when I bought it!',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      text: 'Professional service with a personal touch. Highly recommend!',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      text: 'The craftsmanship is outstanding. Worth every penny.',
      rating: 5
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
        {/* Luxury car background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <img 
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Luxury car detail" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Subtle Balkan pattern overlay */}
        <div className="absolute inset-0 opacity-5 z-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpolygon points='30,0 60,30 30,60 0,30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 z-30">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Precision Car Detailing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                with a Balkan Touch
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 md:mb-8 max-w-3xl mx-auto">
              Bringing Old-World Craftsmanship to Modern Vehicle Care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onNavigate('services')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <span>View Our Services</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Premium Services
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Each service reflects our commitment to excellence and attention to detail, 
              inspired by generations of Balkan craftsmanship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-amber-500/50 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 relative">
        {/* Background luxury car image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Luxury car interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Balkan Detailing Co.?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Generational Craftsmanship
                    </h4>
                    <p className="text-gray-300">
                      Our techniques are rooted in Old-World attention to detail and pride in workmanship.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Personal Touch
                    </h4>
                    <p className="text-gray-300">
                      We treat every vehicle like it belongs to family, ensuring unmatched care and attention.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Quality Guarantee
                    </h4>
                    <p className="text-gray-300">
                      We stand behind our work with a satisfaction guarantee on all services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">BC</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Family Heritage Meets Modern Excellence
                </h4>
                <p className="text-gray-300 mb-6">
                  Founded on the principles of dedication, precision, and authentic care that have been passed down through generations in the Balkans.
                </p>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center space-x-2 mx-auto transition-colors"
                >
                  <span>Learn Our Story</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h3>
            <p className="text-lg text-gray-300">
              Don't just take our word for it - hear from satisfied customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-white">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;