import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Find Your Dream Property
          </h1>
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="flex items-center border-2 rounded-lg px-3 py-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for properties..."
                    className="ml-2 w-full outline-none text-secondary"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center border-2 rounded-lg px-3 py-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="ml-2 w-full outline-none text-secondary"
                  />
                </div>
              </div>
              <button className="bg-primary text-secondary px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-secondary-light rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img
                src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Luxury Villa</h3>
                <p className="text-gray-400 mb-2">123 Example Street, City</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary text-xl font-bold">$1,200,000</span>
                  <button className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;