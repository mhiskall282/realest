import React from 'react';
import { Camera, Mail, Phone, MapPin, Building2, Calendar, Settings } from 'lucide-react';

const Profile = () => {
  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-light rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <button className="absolute bottom-0 right-0 bg-primary text-secondary p-2 rounded-full hover:bg-primary-dark transition-colors">
                    <Camera className="h-5 w-5" />
                  </button>
                </div>
                <h1 className="text-2xl font-bold mb-2">John Smith</h1>
                <p className="text-gray-400">Real Estate Agent</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>john.smith@luxestate.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Miami, Florida</span>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-primary text-secondary py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Profile Stats and Activity */}
          <div className="lg:col-span-2">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Building2, label: 'Properties Sold', value: '156' },
                { icon: Calendar, label: 'Years Experience', value: '8' },
                { icon: Settings, label: 'Active Listings', value: '12' }
              ].map((stat, index) => (
                <div key={index} className="bg-secondary-light p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Settings Sections */}
            <div className="bg-secondary-light rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">First Name</label>
                      <input
                        type="text"
                        value="John"
                        className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                      <input
                        type="text"
                        value="Smith"
                        className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        value="john.smith@luxestate.com"
                        className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Phone</label>
                      <input
                        type="tel"
                        value="(555) 123-4567"
                        className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Notification Settings */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
                  <div className="space-y-4">
                    {[
                      'Email notifications for new messages',
                      'SMS notifications for property updates',
                      'Email notifications for new offers',
                      'Weekly performance reports'
                    ].map((setting, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 mr-3 accent-primary"
                        />
                        <span>{setting}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                    Cancel
                  </button>
                  <button className="px-6 py-2 bg-primary text-secondary rounded-lg hover:bg-primary-dark transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;