import React from 'react';
import { MapPin, Plus } from 'lucide-react';

interface HeaderProps {
  onNewDestination: () => void;
  showNewButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNewDestination, showNewButton }) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Travel Maestro</h1>
              <p className="text-sm text-gray-600">Destination Intelligence System</p>
            </div>
          </div>
          
          {showNewButton && (
            <button
              onClick={onNewDestination}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New Destination</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;