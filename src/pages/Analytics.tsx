import React from 'react';
import { TrendingUp, Users, DollarSign, Eye, ArrowUp, ArrowDown } from 'lucide-react';

const Analytics = () => {
  const stats = [
    {
      title: 'Total Views',
      value: '45.2K',
      change: '+12.5%',
      trend: 'up',
      icon: Eye
    },
    {
      title: 'Total Leads',
      value: '1.2K',
      change: '+8.2%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Revenue',
      value: '$125.4K',
      change: '-2.4%',
      trend: 'down',
      icon: DollarSign
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+4.8%',
      trend: 'up',
      icon: TrendingUp
    }
  ];

  const propertyPerformance = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      views: 1250,
      leads: 45,
      conversion: 3.6,
      trend: 'up'
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      views: 980,
      leads: 32,
      conversion: 3.2,
      trend: 'down'
    },
    {
      id: 3,
      title: 'Beachfront Paradise',
      views: 1500,
      leads: 58,
      conversion: 3.8,
      trend: 'up'
    }
  ];

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="bg-secondary-light rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-8">Analytics Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-secondary-light rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className={`flex items-center ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 mr-1" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-gray-400 mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Property Performance Table */}
          <div className="bg-secondary rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold">Property Performance</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary-light">
                    <th className="px-6 py-3 text-left">Property</th>
                    <th className="px-6 py-3 text-left">Views</th>
                    <th className="px-6 py-3 text-left">Leads</th>
                    <th className="px-6 py-3 text-left">Conversion Rate</th>
                    <th className="px-6 py-3 text-left">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {propertyPerformance.map((property) => (
                    <tr key={property.id} className="border-t border-gray-700">
                      <td className="px-6 py-4">{property.title}</td>
                      <td className="px-6 py-4">{property.views.toLocaleString()}</td>
                      <td className="px-6 py-4">{property.leads}</td>
                      <td className="px-6 py-4">{property.conversion}%</td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center ${
                          property.trend === 'up' ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {property.trend === 'up' ? (
                            <ArrowUp className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDown className="h-4 w-4 mr-1" />
                          )}
                          <span>{property.trend === 'up' ? '+2.4%' : '-1.2%'}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
