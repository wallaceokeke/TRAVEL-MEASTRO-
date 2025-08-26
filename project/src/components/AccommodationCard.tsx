import React from 'react';
import { Star, ExternalLink, DollarSign } from 'lucide-react';
import { Accommodation } from '../types/destination';

interface AccommodationCardProps {
  accommodation: Accommodation;
  tier: 'budget' | 'mid-range' | 'luxury';
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ accommodation, tier }) => {
  const tierColors = {
    budget: 'border-green-200 bg-green-50',
    'mid-range': 'border-blue-200 bg-blue-50',
    luxury: 'border-purple-200 bg-purple-50'
  };

  const tierBadgeColors = {
    budget: 'bg-green-100 text-green-800',
    'mid-range': 'bg-blue-100 text-blue-800',
    luxury: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className={`border-2 rounded-lg p-4 hover:shadow-md transition-shadow ${tierColors[tier]}`}>
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-gray-900 text-lg">{accommodation.name}</h4>
        <span className={`px-2 py-1 rounded text-xs font-medium ${tierBadgeColors[tier]}`}>
          {tier.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        {accommodation.price && (
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-4 h-4 mr-1" />
            <span className="font-medium">{accommodation.price}</span>
          </div>
        )}

        {accommodation.rating && (
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            <span className="font-medium text-gray-700">{accommodation.rating}</span>
          </div>
        )}
      </div>

      <a
        href={accommodation.booking_link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        Book Now
      </a>
    </div>
  );
};

export default AccommodationCard;