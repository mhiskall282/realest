import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, MapPin, Building2, DollarSign, Camera } from 'lucide-react';

const AddProperty = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    type: 'sale',
    bedrooms: '',
    bathrooms: '',
    area: '',
    features: [] as string[],
    images: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically submit to the backend
    navigate('/dashboard');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Property Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                placeholder="Enter property title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2 h-32"
                placeholder="Describe your property"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Property Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
              >
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Price</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full bg-secondary border border-gray-600 rounded-lg pl-10 pr-4 py-2"
                    placeholder="Enter price"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Area (sq ft)</label>
                <input
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                  placeholder="Enter area"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Bedrooms</label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                  placeholder="Number of bedrooms"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Bathrooms</label>
                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleInputChange}
                  className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                  placeholder="Number of bathrooms"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full bg-secondary border border-gray-600 rounded-lg pl-10 pr-4 py-2"
                  placeholder="Enter property location"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Features</label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Smart Home System',
                  'Swimming Pool',
                  'Garden',
                  'Garage',
                  'Security System',
                  'Air Conditioning',
                  'Heating',
                  'Furnished',
                  'Pet Friendly',
                  'Gym',
                  'Wine Cellar',
                  'Home Theater'
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="w-4 h-4 mr-2 accent-primary"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Images</label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-400">Drag and drop images here, or click to select files</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={() => {}} // Would handle image upload
                />
                <button className="mt-4 bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                  Upload Images
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-secondary-light rounded-lg p-8">
          <div className="flex items-center mb-8">
            <Building2 className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-2xl font-bold">Add New Property</h1>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex-1 relative ${
                  stepNumber < 3 ? 'after:content-[""] after:h-1 after:w-full after:bg-gray-600 after:absolute after:top-4 after:left-1/2' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full ${
                    step >= stepNumber ? 'bg-primary' : 'bg-gray-600'
                  } flex items-center justify-center mx-auto relative z-10`}
                >
                  {stepNumber}
                </div>
                <p className="text-center mt-2 text-sm text-gray-400">
                  {stepNumber === 1 ? 'Basic Info' : stepNumber === 2 ? 'Details' : 'Features'}
                </p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {renderStep()}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-secondary transition-colors"
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="ml-auto px-6 py-2 bg-primary text-secondary rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-2 bg-primary text-secondary rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Submit Property
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;