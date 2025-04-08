import React, { useState } from 'react';
import { Timer, DollarSign, Users, ArrowUpRight, Building2 } from 'lucide-react';

interface Auction {
  id: string;
  propertyId: string;
  title: string;
  image: string;
  currentBid: number;
  startingPrice: number;
  endTime: string;
  totalBids: number;
  participants: number;
  status: 'live' | 'upcoming' | 'ended';
}

const auctions: Auction[] = [
  {
    id: '1',
    propertyId: '1',
    title: 'Luxury Beachfront Villa',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    currentBid: 2500000,
    startingPrice: 2000000,
    endTime: '2024-03-20T15:00:00',
    totalBids: 15,
    participants: 8,
    status: 'live'
  },
  {
    id: '2',
    propertyId: '2',
    title: 'Downtown Penthouse Suite',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    currentBid: 1800000,
    startingPrice: 1500000,
    endTime: '2024-03-25T18:00:00',
    totalBids: 8,
    participants: 5,
    status: 'upcoming'
  },
  {
    id: '3',
    propertyId: '3',
    title: 'Mountain View Estate',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    currentBid: 3200000,
    startingPrice: 3000000,
    endTime: '2024-03-15T20:00:00',
    totalBids: 25,
    participants: 12,
    status: 'ended'
  }
];

const Auctions = () => {
  const [filter, setFilter] = useState<'all' | 'live' | 'upcoming' | 'ended'>('all');

  const filteredAuctions = auctions.filter(
    auction => filter === 'all' || auction.status === filter
  );

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="bg-secondary-light rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Property Auctions</h1>
            <div className="flex gap-2">
              {(['all', 'live', 'upcoming', 'ended'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg capitalize ${
                    filter === status
                      ? 'bg-primary text-secondary'
                      : 'bg-secondary hover:bg-secondary-light'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAuctions.map((auction) => (
              <div
                key={auction.id}
                className="bg-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${
                    auction.status === 'live'
                      ? 'bg-green-500'
                      : auction.status === 'upcoming'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}>
                    {auction.status}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{auction.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-400">
                        <DollarSign className="h-5 w-5 mr-2" />
                        <span>Current Bid</span>
                      </div>
                      <span className="text-primary font-bold">
                        ${auction.currentBid.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-400">
                        <Timer className="h-5 w-5 mr-2" />
                        <span>Ends In</span>
                      </div>
                      <span>2d 5h 30m</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-400">
                        <Users className="h-5 w-5 mr-2" />
                        <span>Participants</span>
                      </div>
                      <span>{auction.participants}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button className="w-full bg-primary text-secondary py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center">
                      <span>Place Bid</span>
                      <ArrowUpRight className="h-5 w-5 ml-2" />
                    </button>
                    <button className="w-full border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
