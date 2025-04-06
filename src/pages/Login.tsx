import React from 'react';
import { Building2 } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-secondary">
      <div className="bg-secondary-light p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Building2 className="text-primary h-12 w-12 mb-4" />
          <h2 className="text-2xl font-bold text-white">Welcome to LuxEstate</h2>
        </div>
        
        <button className="w-full bg-primary text-secondary py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mb-4">
          Connect with Internet Identity
        </button>
        
        <p className="text-center text-gray-400 text-sm">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;