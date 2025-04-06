import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { properties } from '../data/properties';

const PropertyDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="pt-20 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <p className="text-gray-400">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="container mx-auto">
        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative h-[60vh] rounded-lg overflow-hidden">
            <img
              src={property.images[activeImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-24 h-24 rounded-lg overflow-hidden ${
                  activeImage === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${property.title} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-secondary-light rounded-lg p-6 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-primary text-3xl font-bold mb-2">
                    ${property.price.toLocaleString()}
                  </div>
                  <div className="text-gray-400">
                    {property.type === 'sale' ? 'For Sale' : 'For Rent'}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-secondary rounded-lg mb-6">
                <div className="flex items-center">
                  <Bed className="h-6 w-6 mr-2" />
                  <div>
                    <div className="font-bold">{property.bedrooms}</div>
                    <div className="text-sm text-gray-400">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="h-6 w-6 mr-2" />
                  <div>
                    <div className="font-bold">{property.bathrooms}</div>
                    <div className="text-sm text-gray-400">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Square className="h-6 w-6 mr-2" />
                  <div>
                    <div className="font-bold">{property.area}</div>
                    <div className="text-sm text-gray-400">Sq Ft</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-gray-400 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Features</h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-400"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Agent Information */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-light rounded-lg p-6 sticky top-24">
              <div className="flex items-center mb-6">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{property.agent.name}</h3>
                  <p className="text-gray-400">Real Estate Agent</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center text-gray-400 hover:text-primary"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {property.agent.phone}
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center text-gray-400 hover:text-primary"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {property.agent.email}
                </a>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-primary text-secondary py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Schedule Viewing
                </button>
                <button className="w-full border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-secondary transition-colors flex items-center justify-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Save to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;