import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface SearchFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ isOpen, onClose, onApply }) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    propertyType: [],
    bedrooms: '',
    bathrooms: '',
    amenities: [],
    area: [0, 10000]
  });

  const propertyTypes = ['House', 'Apartment', 'Villa', 'Penthouse', 'Land'];
  const amenities = ['Pool', 'Garden', 'Garage', 'Gym', 'Security', 'Elevator'];

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-secondary-light rounded-lg w-full max-w-3xl mx-4">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h3 className="text-xl font-bold">Search Filters</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Price Range */}
          <div>
            <h4 className="font-semibold mb-4">Price Range</h4>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min Price"
                className="flex-1 bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                value={filters.priceRange[0]}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: [parseInt(e.target.value), filters.priceRange[1]]
                })}
              />
              <input
                type="number"
                placeholder="Max Price"
                className="flex-1 bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], parseInt(e.target.value)]
                })}
              />
            </div>
          </div>

          {/* Property Type */}
          <div>
            <h4 className="font-semibold mb-4">Property Type</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 accent-primary"
                    checked={filters.propertyType.includes(type)}
                    onChange={(e) => {
                      const newTypes = e.target.checked
                        ? [...filters.propertyType, type]
                        : filters.propertyType.filter(t => t !== type);
                      setFilters({ ...filters, propertyType: newTypes });
                    }}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-4">Bedrooms</h4>
              <select
                className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
              >
                <option value="">Any</option>
                {[1, 2, 3, 4, 5, '6+'].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Bathrooms</h4>
              <select
                className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                value={filters.bathrooms}
                onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
              >
                <option value="">Any</option>
                {[1, 2, 3, 4, '5+'].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h4 className="font-semibold mb-4">Amenities</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {amenities.map((amenity) => (
                <label key={amenity} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 accent-primary"
                    checked={filters.amenities.includes(amenity)}
                    onChange={(e) => {
                      const newAmenities = e.target.checked
                        ? [...filters.amenities, amenity]
                        : filters.amenities.filter(a => a !== amenity);
                      setFilters({ ...filters, amenities: newAmenities });
                    }}
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-700 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-secondary transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-2 bg-primary text-secondary rounded-lg hover:bg-primary-dark transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
