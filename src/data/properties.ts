export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  features: string[];
  agent: {
    name: string;
    image: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    description: 'Stunning modern villa with panoramic ocean views, featuring high-end finishes and smart home technology throughout.',
    price: 2500000,
    location: '123 Ocean Drive, Miami Beach, FL',
    type: 'sale',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    ],
    features: ['Smart Home System', 'Infinity Pool', 'Wine Cellar', 'Home Theater', 'Private Gym'],
    agent: {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      phone: '(305) 555-0123',
      email: 'sarah.j@luxestate.com'
    }
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    description: 'Luxurious penthouse apartment with wraparound terrace and stunning city views.',
    price: 3200000,
    location: '456 Park Avenue, New York, NY',
    type: 'sale',
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3200,
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1600607687854-fe8a0592a381?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    ],
    features: ['Private Elevator', 'Chef\'s Kitchen', 'Smart Home System', 'Wine Room'],
    agent: {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      phone: '(212) 555-0123',
      email: 'michael.c@luxestate.com'
    }
  },
  {
    id: '3',
    title: 'Beachfront Paradise',
    description: 'Direct beachfront property with private access and stunning sunset views.',
    price: 4800000,
    location: '789 Coastal Highway, Malibu, CA',
    type: 'sale',
    bedrooms: 6,
    bathrooms: 5,
    area: 5500,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1600607687166-bff0c45c4a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    ],
    features: ['Private Beach Access', 'Infinity Pool', 'Outdoor Kitchen', 'Guest House'],
    agent: {
      name: 'Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      phone: '(310) 555-0123',
      email: 'emily.r@luxestate.com'
    }
  }
];