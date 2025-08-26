import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { Attraction } from '../types/destination';

interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-bold text-gray-900 text-lg">{attraction.name}</h4>
        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 ml-2" />
      </div>

      {attraction.description && (
        <p className="text-gray-600 mb-4 leading-relaxed">{attraction.description}</p>
      )}

      <a
        href={attraction.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        View Details
      </a>
    </div>
  );
};

export default AttractionCard;