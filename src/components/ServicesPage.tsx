import React from 'react';
import { Shield, Star, Zap, Award, ArrowRight, Check } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (section: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-amber-400" />,
      title: 'Premium Exterior Detailing',
      description: 'Complete exterior transformation with meticulous attention to every detail.',
      price: 'Starting at $150',
      features: [
        'Hand wash with premium products',
        'Clay bar treatment',
        'Paint decontamination',
        'Machine polish application',
        'Premium wax protection',
        'Tire and wheel detailing',
        'Glass cleaning and treatment'
      ]
    },
    {
      icon: <Star className="w-12 h-12 text-amber-400" />,
      title: 'Interior Deep Cleaning',
      description: 'Thorough interior restoration bringing back that new car feel.',
      price: 'Starting at $120',
      features: [
        'Complete vacuum treatment',
        'Leather conditioning',
        'Fabric protection application',
        'Dashboard and console detailing',
        'Door panel cleaning',
        'Carpet and upholstery cleaning',
        'Air freshening treatment'
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-amber-400" />,
      title: 'Paint Correction',
      description: 'Professional removal of swirls, scratches, and paint imperfections.',
      price: 'Starting at $300',
      features: [
        'Multi-stage paint correction',
        'Swirl and scratch removal',
        'Paint depth measurement',
        'Machine polishing',
        'Paint sealant application',
        'Before/after documentation',
        '6-month shine guarantee'
      ]
    },
    {
      icon: <Award className="w-12 h-12 text-amber-400" />,
      title: 'Ceramic Coating',
      description: 'Ultimate protection with long-lasting ceramic coating technology.',
      price: 'Starting at $800',
      features: [
        'Paint preparation and correction',
        '9H hardness ceramic coating',
        'UV protection',
        'Hydrophobic properties',
        'Enhanced gloss and depth',
        'Easy maintenance',
        '5-year warranty included'
      ]
    }
  ];

  const packages = [
    {
      name: 'Essential Care',
      price: '$199',
      popular: false,
      features: [
        'Exterior wash and wax',
        'Interior vacuum and wipe down',
        'Tire shine',
        'Window cleaning'
      ]
    },
    {
      name: 'Premium Detail',
      price: '$399',
      popular: true,
      features: [
        'Complete exterior detailing',
        'Interior deep cleaning',
        'Clay bar treatment',
        'Paint sealant',
        'Leather conditioning'
      ]
    },
    {
      name: 'Balkan Elite',
      price: '$799',
      popular: false,
      features: [
        'Full paint correction',
        'Ceramic coating application',
        'Complete interior restoration',
        'Engine bay detailing',
        '1-year maintenance plan'
      ]
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Luxury car detailing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Car Detailing Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto relative z-20">
            Each service is performed with the precision and care that reflects our Balkan heritage of craftsmanship and excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:shadow-2xl transition-all duration-300 hover:border-amber-500/50"
              >
                <div className="flex items-center mb-6">
                  {service.icon}
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-amber-400 font-semibold text-lg">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-amber-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 relative">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Luxury car" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
              Complete Detail Packages
            </h3>
            <p className="text-lg text-gray-300 relative z-10">
              Choose the perfect package for your vehicle's needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border-2 relative ${
                  pkg.popular
                    ? 'border-amber-500 shadow-2xl scale-105'
                    : 'border-gray-700'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                  <div className="text-4xl font-bold text-amber-400 mb-4">{pkg.price}</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-amber-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Book This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Vehicle?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Experience the difference that true craftsmanship makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Get Your Quote</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;