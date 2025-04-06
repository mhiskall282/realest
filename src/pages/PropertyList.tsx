import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Bed, Bath, Square, Filter } from 'lucide-react';
import { properties } from '../data/properties';

const PropertyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [propertyType, setPropertyType] = useState<'all' | 'sale' | 'rent'>('all');

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesType = propertyType === 'all' || property.type === propertyType;
    
    return matchesSearch && matchesPrice && matchesType;
  });

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="container mx-auto">
        {/* Search and Filters */}
        <div className="bg-secondary-light p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="flex items-center border-2 border-gray-600 rounded-lg px-3 py-2">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="ml-2 w-full bg-transparent outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="bg-secondary border-2 border-gray-600 rounded-lg px-3 py-2"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value as 'all' | 'sale' | 'rent')}
              >
                <option value="all">All Types</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
              <button className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded-lg">
                <Filter className="h-5 w-5" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Link
              to={`/property/${property.id}`}
              key={property.id}
              className="bg-secondary-light rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full">
                  {property.type === 'sale' ? 'For Sale' : 'For Rent'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex justify-between items-center text-sm mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.area} sq ft</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary text-xl font-bold">
                    ${property.price.toLocaleString()}
                  </span>
                  <button className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;