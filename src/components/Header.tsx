import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm shadow-lg border-b border-gray-800">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-1 px-4 md:py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={12} className="text-amber-400 md:w-3.5 md:h-3.5"/>
              <span className="text-amber-400 text-xs md:text-sm">(021) 266-3881</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Mail size={12} className="text-amber-400 md:w-3.5 md:h-3.5"/>
              <span className="text-amber-400 text-xs md:text-sm">balkandetailingco@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={12} className="text-amber-400 md:w-3.5 md:h-3.5"/>
            <span className="text-amber-400 text-xs md:text-sm">Serving Auckland City</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-2 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-white font-bold text-sm md:text-xl">B</div>
            </div>
            <div>
              <h1 className="text-sm md:text-xl font-bold text-white">Balkan Detailing Co.</h1>
              <p className="text-xs md:text-sm text-gray-300">Precision • Heritage • Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-colors ${
                  currentSection === item.id
                    ? 'text-amber-400 border-b-2 border-amber-400 pb-1'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 font-medium transition-colors ${
                    currentSection === item.id
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-amber-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;