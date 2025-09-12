import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'exterior', label: 'Exterior Detailing' },
    { id: 'interior', label: 'Interior Cleaning' },
    { id: 'correction', label: 'Paint Correction' },
    { id: 'coating', label: 'Ceramic Coating' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'exterior',
      title: 'BMW M3 Exterior Detail',
      before: 'Weathered and neglected paint',
      after: 'Mirror-like finish with deep gloss',
      description: 'Complete exterior transformation including clay bar, polish, and premium wax application.',
    },
    {
      id: 2,
      category: 'interior',
      title: 'Mercedes-Benz Interior Restoration',
      before: 'Worn leather and stained fabric',
      after: 'Like-new interior condition',
      description: 'Deep cleaning, conditioning, and protection of all interior surfaces.',
    },
    {
      id: 3,
      category: 'correction',
      title: 'Audi A6 Paint Correction',
      before: 'Heavy swirl marks and scratches',
      after: 'Flawless paint finish',
      description: 'Multi-stage paint correction removing years of damage and imperfections.',
    },
    {
      id: 4,
      category: 'coating',
      title: 'Porsche 911 Ceramic Coating',
      before: 'Factory paint condition',
      after: 'Enhanced gloss with ultimate protection',
      description: 'Professional ceramic coating application with 5-year warranty protection.',
    },
    {
      id: 5,
      category: 'exterior',
      title: 'Tesla Model S Full Detail',
      before: 'Road grime and water spots',
      after: 'Showroom-perfect finish',
      description: 'Complete wash, decontamination, and protection service.',
    },
    {
      id: 6,
      category: 'interior',
      title: 'Range Rover Interior Care',
      before: 'Dirty and neglected cabin',
      after: 'Pristine luxury interior',
      description: 'Premium interior detailing with specialized leather treatments.',
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Car detailing gallery" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-20">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto relative z-20">
            See the incredible transformations we achieve through dedication, skill, and traditional craftsmanship.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700 hover:border-amber-500/50"
              >
                {/* Before/After Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-800">
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 bg-gradient-to-br from-gray-600 to-gray-700 relative">
                      <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">
                        BEFORE
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-amber-500 to-amber-600 relative">
                      <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">
                        AFTER
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 left-1/2 w-1 bg-gray-300 transform -translate-x-1/2"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-red-600 mt-1" />
                      <span className="text-sm text-gray-300">{item.before}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-amber-400 mt-1" />
                      <span className="text-sm text-gray-300">{item.after}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            See Our Process in Action
          </h3>
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-12 mb-8 border border-gray-700">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
              <ArrowRight className="w-12 h-12 text-white" />
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Watch our master craftsmen transform vehicles using time-honored techniques combined with modern technology.
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg">
              Play Process Video
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            * High-resolution before/after photos and process videos available upon request
          </p>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;