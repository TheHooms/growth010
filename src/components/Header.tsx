import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart, BookOpen, Home, User } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { isOnboarded } = useUser();
  
  // Don't show header on landing page or during onboarding
  if (location.pathname === '/' || !isOnboarded) {
    return null;
  }
  
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { path: '/scenarios', label: 'Scenarios', icon: <BookOpen size={20} /> },
    { path: '/progress', label: 'Progress', icon: <BarChart size={20} /> },
    { path: '/profile', label: 'Profile', icon: <User size={20} /> }
  ];
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/dashboard" className="text-xl font-bold text-blue-600">
                GrowthMindset
              </Link>
            </div>
          </div>
          <nav className="flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span className="hidden md:block">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;