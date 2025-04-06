import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, User, X } from 'lucide-react';

const appointments = [
  {
    id: 1,
    property: 'Modern Luxury Villa',
    client: 'Emma Thompson',
    date: '2024-03-15',
    time: '10:00 AM',
    location: '123 Ocean Drive, Miami Beach, FL',
    status: 'upcoming'
  },
  {
    id: 2,
    property: 'Downtown Penthouse',
    client: 'Michael Brown',
    date: '2024-03-16',
    time: '2:30 PM',
    location: '456 Park Avenue, New York, NY',
    status: 'upcoming'
  },
  {
    id: 3,
    property: 'Beachfront Paradise',
    client: 'Sarah Wilson',
    date: '2024-03-14',
    time: '11:00 AM',
    location: '789 Coastal Highway, Malibu, CA',
    status: 'completed'
  }
];

const Appointments = () => {
  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="bg-secondary-light rounded-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Appointments</h1>
            <button className="bg-primary text-secondary px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              Schedule New
            </button>
          </div>

          {/* Calendar View */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-secondary rounded-lg p-6">
                {/* Calendar would go here - using a placeholder for now */}
                <div className="h-96 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Calendar View Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6">Upcoming Appointments</h2>
                <div className="space-y-4">
                  {appointments
                    .filter(apt => apt.status === 'upcoming')
                    .map(appointment => (
                      <div
                        key={appointment.id}
                        className="bg-secondary-light rounded-lg p-4"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-bold">{appointment.property}</h3>
                          <button className="text-gray-400 hover:text-primary">
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            {appointment.client}
                          </div>
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            {appointment.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {appointment.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {appointment.location}
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <button className="flex-1 bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                            Confirm
                          </button>
                          <button className="flex-1 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                            Reschedule
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Past Appointments */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">Past Appointments</h2>
            <div className="bg-secondary rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary-light">
                    <th className="px-6 py-3 text-left">Property</th>
                    <th className="px-6 py-3 text-left">Client</th>
                    <th className="px-6 py-3 text-left">Date</th>
                    <th className="px-6 py-3 text-left">Time</th>
                    <th className="px-6 py-3 text-left">Location</th>
                    <th className="px-6 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments
                    .filter(apt => apt.status === 'completed')
                    .map(appointment => (
                      <tr key={appointment.id} className="border-t border-gray-700">
                        <td className="px-6 py-4">{appointment.property}</td>
                        <td className="px-6 py-4">{appointment.client}</td>
                        <td className="px-6 py-4">{appointment.date}</td>
                        <td className="px-6 py-4">{appointment.time}</td>
                        <td className="px-6 py-4">{appointment.location}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-900 text-green-200 rounded-full text-sm">
                            Completed
                          </span>
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

export default Appointments;