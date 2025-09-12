import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <img 
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Contact luxury detailing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-20">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto relative z-20">
            Ready to experience the Balkan Detailing Co. difference? Contact us for a personalized quote and consultation.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">(555) 123-4567</p>
                    <p className="text-sm text-gray-400">Available 7 days a week</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">info@balkandetailing.com</p>
                    <p className="text-sm text-gray-400">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Service Area</h4>
                    <p className="text-gray-300">Greater Metro Area</p>
                    <p className="text-sm text-gray-400">Mobile service available</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Hours</h4>
                    <div className="text-gray-300 space-y-1">
                      <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p>Sat: 9:00 AM - 5:00 PM</p>
                      <p>Sun: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Request Your Quote
                </h3>
                
                {isSubmitted ? (
                  <div className="bg-gradient-to-b from-green-800 to-green-900 border border-green-600 rounded-lg p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                    <p className="text-green-200">
                      We've received your request and will contact you within 24 hours with your personalized quote.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors text-white"
                        >
                          <option value="">Select a service</option>
                          <option value="exterior">Exterior Detailing</option>
                          <option value="interior">Interior Deep Clean</option>
                          <option value="correction">Paint Correction</option>
                          <option value="coating">Ceramic Coating</option>
                          <option value="package">Complete Package</option>
                          <option value="custom">Custom Service</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="vehicle" className="block text-sm font-medium text-gray-300 mb-2">
                          Vehicle Details
                        </label>
                        <input
                          type="text"
                          id="vehicle"
                          name="vehicle"
                          value={formData.vehicle}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                          placeholder="Year, Make, Model"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                        placeholder="Tell us about your vehicle's condition, specific concerns, or any special requests..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Quote Request</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-800 to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need Same-Day Service?
          </h3>
          <p className="text-red-200 mb-6">
            For urgent requests or same-day availability, call us directly and we'll do our best to accommodate your needs.
          </p>
          <button className="bg-white text-red-800 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
            Call (555) 123-4567
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;