import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Balkan Detailing Co.</h3>
                <p className="text-sm text-gray-400">Heritage • Excellence • Trust</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bringing three generations of Balkan craftsmanship to modern automotive detailing, ensuring every vehicle receives the care it deserves.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Exterior Detailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interior Deep Clean</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paint Correction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ceramic Coating</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Complete Packages</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Our Heritage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">View Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Get a Quote</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service Area</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <p className="text-white font-medium">(555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <p className="text-white font-medium">info@balkandetailing.com</p>
                  <p className="text-gray-400 text-sm">24-hour response</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Greater Metro Area</p>
                  <p className="text-gray-400 text-sm">Mobile service available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Balkan Detailing Co. All rights reserved.
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
                <span className="text-gray-400 text-sm ml-2">4.9/5 Rating</span>
              </div>
            </div>
            
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Service Guarantee</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;