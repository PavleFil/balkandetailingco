import React from 'react';
import { MapPin, Award, Users, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-amber-400" />,
      title: 'Excellence',
      description: 'Every detail matters, every surface counts, every customer deserves perfection.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Passion',
      description: 'Our love for automobiles and craftsmanship drives everything we do.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Family',
      description: 'We treat every customer like family and every car like our own.'
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      title: 'Heritage',
      description: 'Proudly carrying forward generations of Balkan craftsmanship traditions.'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <img 
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Luxury car heritage" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-20">
            Our Story: Heritage Meets Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto relative z-20">
            Three generations of craftsmanship, brought from the mountains of the Balkans to serve your automotive needs with unmatched dedication.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                From the Balkans to Your Driveway
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Balkan Detailing Co. was born from a simple belief: that true craftsmanship never goes out of style. Our founder, Marko Petrović, grew up in a small village in Montenegro where his grandfather was known as the finest craftsman in the region—whether working with wood, metal, or anything that required precision and care.
                </p>
                <p>
                  When Marko immigrated to America, he brought with him not just his family's tools, but their values: that every job deserves your absolute best effort, that shortcuts are never worth taking, and that your reputation is built one satisfied customer at a time.
                </p>
                <p>
                  Today, we apply these time-honored principles to automotive detailing. Every vehicle we touch receives the same meticulous attention that Marko's grandfather would have given to crafting a piece of furniture—because to us, your car isn't just transportation, it's a reflection of your standards and our craftsmanship.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-white">BC</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Marko Petrović
                </h4>
                <p className="text-amber-400 font-semibold mb-4">Founder & Master Detailer</p>
                <p className="text-gray-300 italic">
                  "In the Balkans, we have a saying: 'Rad čini čovjeka'—work makes the man. Every car I detail is a testament to this philosophy."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 relative">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Luxury car interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto relative z-10">
              These principles guide every interaction, every service, and every relationship we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 shadow-2xl border border-gray-700 text-center hover:shadow-3xl transition-all duration-300 hover:border-amber-500/50 relative z-10"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-6">
                The Balkan Difference
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  The Balkan Peninsula has always been a crossroads of cultures, techniques, and traditions. This diversity has fostered a unique approach to craftsmanship—one that values both precision and adaptability, tradition and innovation.
                </p>
                <p>
                  In our homeland, craftsmen didn't specialize in just one trade. They were expected to master multiple skills, to understand how different materials and techniques could work together to create something greater than the sum of its parts. This holistic approach is what we bring to car detailing.
                </p>
                <p>
                  We don't just clean your car—we restore it. We don't just apply products—we understand how they interact with different surfaces, climates, and usage patterns. This is the Balkan way: comprehensive, thoughtful, and built to last.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-black p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3">Our Promise</h4>
                <p className="text-black/80">
                  We guarantee that every service reflects the pride and precision that has been our family tradition for generations.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-xl border border-gray-700 shadow-lg">
                <h4 className="text-xl font-bold mb-3">Our Community</h4>
                <p className="text-gray-300">
                  Proudly serving our new homeland with the same dedication our ancestors showed their neighbors in the mountains of Montenegro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Experience the Heritage Difference
          </h3>
          <p className="text-xl text-black/80 mb-8">
            Let us show you what three generations of craftsmanship can do for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
              Schedule Your Service
            </button>
            <button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Call Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;