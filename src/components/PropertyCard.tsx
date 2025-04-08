import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'sale' | 'rent';
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  image,
  bedrooms,
  bathrooms,
  area,
  type
}) => {
  return (
    <div className="bg-secondary-light rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:brightness-75 transition-all duration-300"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <span className="bg-primary text-secondary px-3 py-1 rounded-full text-sm">
            {type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
          <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors">
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <Link to={`/property/${id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{title}</h3>
        </Link>
        
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center justify-center p-2 bg-secondary rounded-lg">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{bedrooms}</span>
          </div>
          <div className="flex items-center justify-center p-2 bg-secondary rounded-lg">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{bathrooms}</span>
          </div>
          <div className="flex items-center justify-center p-2 bg-secondary rounded-lg">
            <Square className="h-4 w-4 mr-1" />
            <span className="text-sm">{area}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-primary text-xl font-bold">
            ${price.toLocaleString()}
          </span>
          <Link
            to={`/property/${id}`}
            className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
