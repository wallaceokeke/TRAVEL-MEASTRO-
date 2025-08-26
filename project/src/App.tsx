import React, { useState } from 'react';
import { MapPin, Upload, BookOpen, Camera, Utensils, Bed, Calendar, Tips } from 'lucide-react';
import DestinationForm from './components/DestinationForm';
import DestinationGuide from './components/DestinationGuide';
import Header from './components/Header';
import { DestinationData } from './types/destination';

function App() {
  const [destinationData, setDestinationData] = useState<DestinationData | null>(null);
  const [activeView, setActiveView] = useState<'input' | 'guide'>('input');

  const handleDataSubmit = (data: DestinationData) => {
    setDestinationData(data);
    setActiveView('guide');
  };

  const handleNewDestination = () => {
    setDestinationData(null);
    setActiveView('input');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header onNewDestination={handleNewDestination} showNewButton={activeView === 'guide'} />
      
      <main className="container mx-auto px-4 py-8">
        {activeView === 'input' ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                🌍 The Ultimate Travel Maestro
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Advanced Travel Destination Intelligence Analyst & Personalized Itinerary Curator
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium">Destination Intelligence</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <Camera className="w-8 h-8 text-green-600 mb-2" />
                  <span className="text-sm font-medium">Visual Enrichment</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <Bed className="w-8 h-8 text-purple-600 mb-2" />
                  <span className="text-sm font-medium">Stay & Booking</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <Calendar className="w-8 h-8 text-orange-600 mb-2" />
                  <span className="text-sm font-medium">Smart Itineraries</span>
                </div>
              </div>
            </div>
            <DestinationForm onSubmit={handleDataSubmit} />
          </div>
        ) : (
          destinationData && <DestinationGuide data={destinationData} />
        )}
      </main>
    </div>
  );
}

export default App;