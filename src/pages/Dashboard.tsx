import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Heart, Calendar, MessageSquare, TrendingUp, Plus } from 'lucide-react';
import { properties } from '../data/properties';

const Dashboard = () => {
  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="container mx-auto">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button className="flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
            <Plus className="h-5 w-5" />
            Add Property
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Building2, label: 'Listed Properties', value: '12' },
            { icon: Heart, label: 'Saved Properties', value: '24' },
            { icon: Calendar, label: 'Scheduled Viewings', value: '8' },
            { icon: MessageSquare, label: 'New Messages', value: '16' }
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

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Properties */}
          <div className="lg:col-span-2">
            <div className="bg-secondary-light rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">My Properties</h2>
                <Link to="/properties" className="text-primary hover:text-primary-dark">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {properties.slice(0, 3).map((property) => (
                  <Link
                    key={property.id}
                    to={`/property/${property.id}`}
                    className="flex gap-4 bg-secondary p-4 rounded-lg hover:bg-secondary-light transition-colors"
                  >
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold mb-2">{property.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{property.location}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold">
                          ${property.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-400">
                          {property.type === 'sale' ? 'For Sale' : 'For Rent'}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-light rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-6">
                {[
                  {
                    type: 'message',
                    title: 'New Message',
                    description: 'Sarah Johnson sent you a message about 123 Ocean Drive',
                    time: '2 hours ago'
                  },
                  {
                    type: 'viewing',
                    title: 'Viewing Scheduled',
                    description: 'New viewing scheduled for Downtown Penthouse',
                    time: '4 hours ago'
                  },
                  {
                    type: 'offer',
                    title: 'New Offer',
                    description: 'You received a new offer for Beachfront Paradise',
                    time: '1 day ago'
                  }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                    <div>
                      <h3 className="font-bold mb-1">{activity.title}</h3>
                      <p className="text-gray-400 text-sm mb-1">
                        {activity.description}
                      </p>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;