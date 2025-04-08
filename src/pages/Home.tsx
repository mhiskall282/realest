import React, { useState } from 'react';
import { Search, MapPin, Building2, Star, TrendingUp, Shield, Users } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const features = [
    {
      icon: Building2,
      title: 'Premium Properties',
      description: 'Exclusive access to luxury real estate worldwide'
    },
    {
      icon: Star,
      title: 'Expert Agents',
      description: 'Professional guidance through every step'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Safe and transparent property dealings'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Real-time insights and property valuations'
    }
  ];

  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'Property Investor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      text: 'LuxEstate helped me find my dream property with exceptional service.'
    },
    {
      name: 'Michael Chen',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      text: 'The most professional real estate platform I've ever worked with.'
    },
    {
      name: 'Sarah Wilson',
      role: 'Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      text: 'Outstanding platform for both agents and clients. Highly recommended!'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="h-[80vh] bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Find Your Dream Property
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover luxury properties in prime locations worldwide
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border-2 rounded-lg px-3 py-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for properties..."
                    className="ml-2 w-full outline-none text-secondary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center border-2 rounded-lg px-3 py-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="ml-2 w-full outline-none text-secondary"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <button className="w-full mt-4 bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors text-lg font-semibold">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose LuxEstate</h2>
            <p className="text-gray-400">Experience the difference with our premium services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-secondary-light p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="py-20 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
              <p className="text-gray-400">Explore our hand-picked luxury properties</p>
            </div>
            <button className="bg-primary text-secondary px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">Trusted by thousands of satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
                <div className="flex text-primary mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-secondary-light text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect home with LuxEstate
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary-light transition-colors">
              Browse Properties
            </button>
            <button className="bg-white text-secondary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
