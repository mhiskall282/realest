import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, User, LogIn, Calendar, Plus, MessageSquare } from 'lucide-react';
import Notifications from './Notifications';

const Navbar = () => {
  return (
    <nav className="bg-secondary-light p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Building2 className="text-primary h-8 w-8" />
          <span className="text-2xl font-bold text-primary">LuxEstate</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-1 hover:text-primary transition-colors">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/properties" className="flex items-center space-x-1 hover:text-primary transition-colors">
            <Building2 className="h-5 w-5" />
            <span>Properties</span>
          </Link>
          <Link to="/appointments" className="flex items-center space-x-1 hover:text-primary transition-colors">
            <Calendar className="h-5 w-5" />
            <span>Appointments</span>
          </Link>
          <Link to="/messages" className="flex items-center space-x-1 hover:text-primary transition-colors">
            <MessageSquare className="h-5 w-5" />
            <span>Messages</span>
          </Link>
          <Link to="/add-property" className="flex items-center space-x-1 hover:text-primary transition-colors">
            <Plus className="h-5 w-5" />
            <span>Add Property</span>
          </Link>
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
    </nav>
  );
};

export default Navbar;