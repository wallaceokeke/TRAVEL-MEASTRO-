import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Star, Users, Backpack, Coffee, Camera, Heart, Utensils, Plane, Sunset } from 'lucide-react';
import { DestinationData } from '../types/destination';

interface ItineraryGeneratorProps {
  data: DestinationData;
}

interface ItineraryDay {
  day: number;
  title: string;
  activities: {
    time: string;
    activity: string;
    location?: string;
    icon: React.ComponentType<any>;
    description: string;
  }[];
  meals: {
    type: 'breakfast' | 'lunch' | 'dinner';
    suggestion: string;
  }[];
  accommodation?: string;
}

const ItineraryGenerator: React.FC<ItineraryGeneratorProps> = ({ data }) => {
  const [selectedDuration, setSelectedDuration] = useState<1 | 3 | 7>(3);
  const [travelerType, setTravelerType] = useState<'explorer' | 'foodie' | 'relaxer' | 'culture' | 'adventurer'>('explorer');

  const travelerTypes = [
    { id: 'explorer', label: 'Explorer', icon: MapPin, description: 'Discover hidden gems and iconic sights' },
    { id: 'foodie', label: 'Foodie', icon: Utensils, description: 'Culinary adventures and local flavors' },
    { id: 'relaxer', label: 'Relaxer', icon: Coffee, description: 'Peaceful moments and scenic relaxation' },
    { id: 'culture', label: 'Culture Seeker', icon: Star, description: 'Heritage sites and cultural immersion' },
    { id: 'adventurer', label: 'Adventurer', icon: Backpack, description: 'Thrilling activities and outdoor experiences' },
  ] as const;

  const generateItinerary = (): ItineraryDay[] => {
    const baseActivities = {
      explorer: [
        { time: '9:00 AM', activity: 'Historic Walking Tour', location: 'Old Town', icon: MapPin, description: 'Explore the historic heart of the destination' },
        { time: '2:00 PM', activity: 'Local Market Visit', location: 'Central Market', icon: Camera, description: 'Discover local crafts and interact with vendors' },
        { time: '6:00 PM', activity: 'Sunset Viewpoint', location: 'Best Scenic Spot', icon: Sunset, description: 'Watch the sunset from the most iconic viewpoint' },
      ],
      foodie: [
        { time: '10:00 AM', activity: 'Food Market Tour', location: 'Local Market', icon: Utensils, description: 'Taste authentic street food and local specialties' },
        { time: '3:00 PM', activity: 'Cooking Class', location: 'Local Kitchen', icon: Coffee, description: 'Learn to prepare traditional dishes' },
        { time: '7:00 PM', activity: 'Fine Dining Experience', location: 'Upscale Restaurant', icon: Star, description: 'Experience the destination\'s refined cuisine' },
      ],
      relaxer: [
        { time: '10:00 AM', activity: 'Spa & Wellness', location: 'Resort/Spa', icon: Heart, description: 'Rejuvenate with local wellness treatments' },
        { time: '3:00 PM', activity: 'Peaceful Gardens', location: 'Botanical Gardens', icon: Coffee, description: 'Stroll through serene natural spaces' },
        { time: '6:00 PM', activity: 'Sunset Meditation', location: 'Quiet Beach/Park', icon: Sunset, description: 'Find inner peace watching the sunset' },
      ],
      culture: [
        { time: '9:00 AM', activity: 'Museum Visit', location: 'National Museum', icon: Star, description: 'Dive deep into local history and culture' },
        { time: '2:00 PM', activity: 'Cultural Performance', location: 'Cultural Center', icon: Users, description: 'Experience traditional music and dance' },
        { time: '6:00 PM', activity: 'Heritage Site', location: 'UNESCO Site', icon: Camera, description: 'Explore significant cultural landmarks' },
      ],
      adventurer: [
        { time: '7:00 AM', activity: 'Adventure Activity', location: 'Nature Reserve', icon: Backpack, description: 'Hiking, diving, or extreme sports' },
        { time: '1:00 PM', activity: 'Outdoor Exploration', location: 'Natural Park', icon: MapPin, description: 'Discover natural wonders and wildlife' },
        { time: '5:00 PM', activity: 'Adventure Sports', location: 'Activity Center', icon: Plane, description: 'Try local adventure activities' },
      ],
    };

    const mealSuggestions = {
      breakfast: data.food?.slice(0, 2) || ['Local breakfast cafe', 'Traditional morning meal'],
      lunch: data.food?.slice(2, 4) || ['Authentic local restaurant', 'Street food experience'],
      dinner: data.food?.slice(4, 6) || ['Fine dining restaurant', 'Rooftop dining experience'],
    };

    const accommodationSuggestions = {
      1: data.accommodations.mid_range[0]?.name || data.accommodations.budget[0]?.name || 'Comfortable local accommodation',
      3: data.accommodations.mid_range[0]?.name || 'Quality mid-range hotel',
      7: data.accommodations.luxury[0]?.name || data.accommodations.mid_range[0]?.name || 'Extended stay accommodation',
    };

    const activities = baseActivities[travelerType];
    const itinerary: ItineraryDay[] = [];

    for (let day = 1; day <= selectedDuration; day++) {
      const dayTitle = selectedDuration === 1 ? 'Perfect Day' : 
                      selectedDuration === 3 ? `Day ${day} - ${day === 1 ? 'Arrival & First Impressions' : day === 2 ? 'Deep Dive Experience' : 'Final Adventures'}` :
                      `Day ${day} - ${day <= 2 ? 'Getting Oriented' : day <= 5 ? 'Core Experiences' : 'Farewell Moments'}`;

      const dayActivities = activities.map((activity, index) => ({
        ...activity,
        location: activity.location === 'Old Town' && data.attractions[0] ? 
                  data.attractions[0].name : 
                  activity.location === 'Central Market' && data.attractions[1] ? 
                  data.attractions[1].name : 
                  activity.location,
      }));

      itinerary.push({
        day,
        title: dayTitle,
        activities: dayActivities,
        meals: [
          { type: 'breakfast', suggestion: mealSuggestions.breakfast[Math.floor(Math.random() * mealSuggestions.breakfast.length)] },
          { type: 'lunch', suggestion: mealSuggestions.lunch[Math.floor(Math.random() * mealSuggestions.lunch.length)] },
          { type: 'dinner', suggestion: mealSuggestions.dinner[Math.floor(Math.random() * mealSuggestions.dinner.length)] },
        ],
        accommodation: accommodationSuggestions[selectedDuration],
      });
    }

    return itinerary;
  };

  const itinerary = generateItinerary();

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Calendar className="w-6 h-6 mr-3" />
          Personalized Itinerary Generator
        </h3>
        <p className="text-gray-600 mb-8">
          Create your perfect {data.destination} experience tailored to your travel style and duration.
        </p>
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Duration Selector */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Trip Duration
          </h4>
          <div className="flex space-x-3">
            {[1, 3, 7].map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration as 1 | 3 | 7)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedDuration === duration
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {duration} {duration === 1 ? 'Day' : 'Days'}
              </button>
            ))}
          </div>
        </div>

        {/* Traveler Type Selector */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Travel Style
          </h4>
          <div className="space-y-2">
            {travelerTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setTravelerType(type.id as any)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    travelerType === type.id
                      ? 'bg-blue-50 border-2 border-blue-200'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900">{type.label}</div>
                      <div className="text-sm text-gray-600">{type.description}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Generated Itinerary */}
      <div className="border-t pt-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">
          Your {selectedDuration}-Day {travelerTypes.find(t => t.id === travelerType)?.label} Itinerary
        </h4>
        
        <div className="space-y-8">
          {itinerary.map((day, index) => (
            <div key={day.day} className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h5 className="text-lg font-bold text-gray-900">{day.title}</h5>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Day {day.day}
                </span>
              </div>

              {/* Activities */}
              <div className="space-y-4 mb-6">
                {day.activities.map((activity, activityIndex) => {
                  const ActivityIcon = activity.icon;
                  return (
                    <div key={activityIndex} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2 text-blue-600 font-medium min-w-0 flex-shrink-0">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{activity.time}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1">
                          <ActivityIcon className="w-5 h-5 text-gray-700" />
                          <h6 className="font-semibold text-gray-900">{activity.activity}</h6>
                        </div>
                        {activity.location && (
                          <p className="text-sm text-blue-600 mb-1">{activity.location}</p>
                        )}
                        <p className="text-sm text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Meals */}
              <div className="border-t pt-4 mb-4">
                <h6 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Utensils className="w-4 h-4 mr-2" />
                  Meal Recommendations
                </h6>
                <div className="grid md:grid-cols-3 gap-3">
                  {day.meals.map((meal, mealIndex) => (
                    <div key={mealIndex} className="p-3 bg-orange-50 rounded-lg">
                      <div className="font-medium text-orange-900 capitalize text-sm mb-1">{meal.type}</div>
                      <div className="text-sm text-orange-800">{meal.suggestion}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accommodation */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2 text-purple-700">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium text-sm">Stay:</span>
                  <span className="text-sm">{day.accommodation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tips for Itinerary */}
        <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
          <h6 className="font-bold text-yellow-900 mb-3 flex items-center">
            <Star className="w-5 h-5 mr-2" />
            Pro Tips for Your {data.destination} Adventure
          </h6>
          <div className="space-y-2">
            {data.budget_tips?.slice(0, 3).map((tip, index) => (
              <div key={index} className="text-sm text-yellow-800 flex items-start">
                <span className="text-yellow-600 mr-2 flex-shrink-0">•</span>
                <span>{tip}</span>
              </div>
            ))}
            <div className="text-sm text-yellow-800 flex items-start">
              <span className="text-yellow-600 mr-2 flex-shrink-0">•</span>
              <span>Book accommodations early during peak season ({data.best_time || 'check local peak seasons'})</span>
            </div>
            <div className="text-sm text-yellow-800 flex items-start">
              <span className="text-yellow-600 mr-2 flex-shrink-0">•</span>
              <span>Keep copies of important documents and have emergency contacts ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryGenerator;