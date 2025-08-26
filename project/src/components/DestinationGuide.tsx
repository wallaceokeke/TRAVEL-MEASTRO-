import React, { useState } from 'react';
import { MapPin, Star, ExternalLink, Camera, Calendar, Utensils, Plane, Eclipse as Tips, Bed, Globe, Shield, CloudRain, Users, Clock } from 'lucide-react';
import { DestinationData } from '../types/destination';
import ImageGallery from './ImageGallery';
import AccommodationCard from './AccommodationCard';
import AttractionCard from './AttractionCard';
import ItineraryGenerator from './ItineraryGenerator';

interface DestinationGuideProps {
  data: DestinationData;
}

const DestinationGuide: React.FC<DestinationGuideProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'attractions' | 'stays' | 'itinerary'>('overview');

  const tabs = [
    { id: 'overview', label: 'Intelligence', icon: Globe },
    { id: 'attractions', label: 'Attractions', icon: Camera },
    { id: 'stays', label: 'Stays', icon: Bed },
    { id: 'itinerary', label: 'Itineraries', icon: Calendar },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="relative">
          {data.images && data.images.length > 0 && (
            <div className="h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${data.images[0].url})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
          )}
          <div className="absolute inset-0 flex items-end p-8">
            <div className="text-white">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-blue-600/90 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    🌍 {data.destination}
                  </h1>
                  <p className="text-xl opacity-90">{data.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {data.categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
              >
                {category}
              </span>
            ))}
          </div>
          
          {data.overview && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Destination Intelligence
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">{data.overview}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-lg mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 bg-blue-50/50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Images Gallery */}
              {data.images && data.images.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-purple-600" />
                    📸 Visual Enrichment Gallery
                  </h3>
                  <ImageGallery images={data.images} />
                </div>
              )}

              {/* Advanced Intelligence Grid */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  🔎 Advanced Destination Intelligence
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {data.climate && (
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                        <CloudRain className="w-4 h-4 mr-2" />
                        Climate & Weather
                      </h4>
                      <p className="text-blue-800">{data.climate}</p>
                    </div>
                  )}
                  
                  {data.safety && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Safety & Security
                      </h4>
                      <p className="text-green-800">{data.safety}</p>
                    </div>
                  )}
                  
                  {data.culture && (
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Culture & Etiquette
                      </h4>
                      <p className="text-purple-800">{data.culture}</p>
                    </div>
                  )}
                  
                  {data.best_time && (
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Optimal Visiting Time
                      </h4>
                      <p className="text-orange-800">{data.best_time}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Food & Culinary */}
              {data.food && data.food.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Utensils className="w-5 h-5 mr-2 text-green-600" />
                    🍴 Food & Culinary Intelligence
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {data.food.map((item, index) => (
                      <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
                        <p className="text-gray-700 flex items-start">
                          <span className="text-orange-600 mr-2 flex-shrink-0">🍽️</span>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Transport & Logistics */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Plane className="w-5 h-5 mr-2 text-indigo-600" />
                  🚀 Transport & Logistics Intelligence
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                      <Plane className="w-4 h-4 mr-2" />
                      Getting There
                    </h4>
                    <p className="text-blue-800">{data.transport.getting_there}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Local Transport
                    </h4>
                    <p className="text-green-800">{data.transport.local}</p>
                  </div>
                </div>
              </div>

              {/* Pro Hacks & Money-Saving Tips */}
              {data.budget_tips && data.budget_tips.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Tips className="w-5 h-5 mr-2 text-yellow-600" />
                    💡 Pro Hacks & Money-Saving Intelligence
                  </h3>
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200">
                    <div className="grid md:grid-cols-2 gap-4">
                      {data.budget_tips.map((tip, index) => (
                        <div key={index} className="text-yellow-800 flex items-start">
                          <span className="text-yellow-600 mr-2 flex-shrink-0">💰</span>
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'attractions' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-600" />
                🎭 Top Attractions & Hidden Gems
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {data.attractions.map((attraction, index) => (
                  <AttractionCard key={index} attraction={attraction} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'stays' && (
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Bed className="w-5 h-5 mr-2 text-purple-600" />
                🏨 Stay & Booking Intelligence
              </h3>
              
              {/* Budget Accommodations */}
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">💰</span>
                  Budget-Friendly (Worthy Affordability)
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.accommodations.budget.map((hotel, index) => (
                    <AccommodationCard key={index} accommodation={hotel} tier="budget" />
                  ))}
                </div>
              </div>

              {/* Mid-Range Accommodations */}
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🏨</span>
                  Mid-Range (Comfort & Value)
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.accommodations.mid_range.map((hotel, index) => (
                    <AccommodationCard key={index} accommodation={hotel} tier="mid-range" />
                  ))}
                </div>
              </div>

              {/* Luxury Accommodations */}
              <div>
                <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✨</span>
                  Luxury (Splurge-Worthy)
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.accommodations.luxury.map((hotel, index) => (
                    <AccommodationCard key={index} accommodation={hotel} tier="luxury" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'itinerary' && (
            <ItineraryGenerator data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationGuide;