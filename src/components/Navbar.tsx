import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, User, LogIn, Calendar, Plus, MessageSquare, Menu, X, Gavel, BarChart } from 'lucide-react';
import Notifications from './Notifications';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/properties', icon: Building2, label: 'Properties' },
    { path: '/appointments', icon: Calendar, label: 'Appointments' },
    { path: '/messages', icon: MessageSquare, label: 'Messages' },
    { path: '/add-property', icon: Plus, label: 'Add Property' },
    { path: '/auctions', icon: Gavel, label: 'Auctions' },
    { path: '/analytics', icon: BarChart, label: 'Analytics' }
  ];

  return (
    <nav className="bg-secondary-light p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="text-primary h-8 w-8" />
            <span className="text-2xl font-bold text-primary">LuxEstate</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-400 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
            <Notifications />
            <Link to="/profile" className="flex items-center space-x-1 hover:text-primary transition-colors">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-1 bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-secondary rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="py-2">
                <Notifications />
              </div>
              <Link
                to="/profile"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <Link
                to="/login"
                className="flex items-center space-x-2 bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
