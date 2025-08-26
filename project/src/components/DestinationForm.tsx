import React, { useState } from 'react';
import { Upload, FileText, Sparkles, Globe, Camera, MapPin } from 'lucide-react';
import { DestinationData } from '../types/destination';

interface DestinationFormProps {
  onSubmit: (data: DestinationData) => void;
}

const DestinationForm: React.FC<DestinationFormProps> = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const sampleData: DestinationData = {
    destination: "Zanzibar",
    country: "Tanzania",
    categories: ["Beach Tours", "Cultural & Heritage Tours", "Food & Culinary Journeys"],
    overview: "🏝️ Zanzibar is a semi-autonomous island off the coast of Tanzania, famed for its spice trade, pristine white-sand beaches, and UNESCO-listed Stone Town. This tropical paradise offers a perfect blend of African, Arabic, and Indian cultures, creating a unique destination where history meets paradise.",
    climate: "🌤️ Tropical climate with warm temperatures year-round (25-32°C). Two rainy seasons: short rains (Nov-Dec) and long rains (Mar-May). Dry season (June-October) offers the best weather with lower humidity and gentle breezes.",
    safety: "🛡️ Generally very safe for tourists with low crime rates. Exercise normal precautions, respect local customs, and avoid walking alone at night in remote areas. Medical facilities are adequate in Stone Town.",
    culture: "🎭 Rich Swahili culture with influences from Arab, Persian, Indian, and European traditions. 99% Muslim population - dress modestly, especially in Stone Town. Friday prayers are important, and Ramadan is widely observed.",
    best_time: "📅 June to October (dry season) for best weather, calm seas, and optimal diving conditions. December-February is also good but hotter. Avoid March-May (heavy rains) and November (short rains).",
    attractions: [
      {
        name: "Stone Town UNESCO World Heritage Site",
        link: "https://en.wikivoyage.org/wiki/Stone_Town",
        description: "🏛️ Historic heart of Zanzibar with winding alleys, ornate buildings, vibrant markets, and the famous Mercury House. Former slave market and spice trading center."
      },
      {
        name: "Nungwi Beach",
        link: "https://opentripmap.com/nungwi_beach",
        description: "🏖️ Pristine white-sand beach with crystal-clear waters, perfect for swimming, snorkeling, and watching spectacular sunsets. Less tidal variation than other beaches."
      },
      {
        name: "Spice Farms (Kizimbani & Tangawizi)",
        link: "https://en.wikivoyage.org/wiki/Zanzibar",
        description: "🌿 Guided tours through aromatic plantations growing cloves, nutmeg, cinnamon, vanilla, and cardamom. Includes tastings and traditional medicine demonstrations."
      },
      {
        name: "Prison Island (Changuu Island)",
        link: "https://en.wikivoyage.org/wiki/Zanzibar",
        description: "🐢 Historic island with Aldabra giant tortoises (over 100 years old), coral reefs for snorkeling, and ruins of a former quarantine station."
      },
      {
        name: "Jozani Forest Reserve",
        link: "https://en.wikivoyage.org/wiki/Zanzibar",
        description: "🌳 Home to the rare Red Colobus monkey found only in Zanzibar, plus diverse wildlife and mangrove boardwalk trails."
      },
      {
        name: "Kendwa Beach",
        link: "https://en.wikivoyage.org/wiki/Zanzibar",
        description: "🌅 Famous for full moon parties, pristine sands, and excellent swimming conditions. Popular for beach bars and water sports."
      }
    ],
    accommodations: {
      budget: [
        {
          name: "Lost & Found Hostel Stone Town",
          booking_link: "https://www.booking.com/hotel/tz/lost-and-found-zanzibar.html",
          price: "$15-25/night",
          rating: 4.2
        },
        {
          name: "Zenji Hotel",
          booking_link: "https://www.booking.com/hotel/tz/zenji-hotel.html",
          price: "$30-45/night",
          rating: 4.0
        },
        {
          name: "Shaba Backpackers Lodge",
          booking_link: "https://www.booking.com/hotel/tz/shaba-lodge.html",
          price: "$20-35/night",
          rating: 4.1
        }
      ],
      mid_range: [
        {
          name: "Tembo House Hotel & Apartments",
          booking_link: "https://www.booking.com/hotel/tz/tembo-house.html",
          price: "$80-120/night",
          rating: 4.5
        },
        {
          name: "Zanzibar Serena Hotel",
          booking_link: "https://www.booking.com/hotel/tz/zanzibar-serena.html",
          price: "$100-150/night",
          rating: 4.4
        },
        {
          name: "Ocean View Hotel",
          booking_link: "https://www.booking.com/hotel/tz/ocean-view-zanzibar.html",
          price: "$90-130/night",
          rating: 4.3
        }
      ],
      luxury: [
        {
          name: "Park Hyatt Zanzibar",
          booking_link: "https://www.booking.com/hotel/tz/park-hyatt-zanzibar.html",
          price: "$400-600/night",
          rating: 4.8
        },
        {
          name: "The Residence Zanzibar",
          booking_link: "https://www.booking.com/hotel/tz/the-residence-zanzibar.html",
          price: "$500-800/night",
          rating: 4.9
        },
        {
          name: "Zuri Zanzibar Resort",
          booking_link: "https://www.booking.com/hotel/tz/zuri-zanzibar.html",
          price: "$350-550/night",
          rating: 4.7
        }
      ]
    },
    images: [
      {
        url: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg",
        caption: "🏛️ Historic alleys and Arabic architecture of Stone Town UNESCO site",
        source: "Pexels"
      },
      {
        url: "https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg",
        caption: "🏖️ Crystal clear turquoise waters and pristine white sand beaches",
        source: "Pexels"
      },
      {
        url: "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg",
        caption: "🛥️ Traditional dhow boats silhouetted against spectacular sunset",
        source: "Pexels"
      },
      {
        url: "https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg",
        caption: "🌶️ Colorful spices at local markets - cloves, cardamom, and saffron",
        source: "Pexels"
      }
    ],
    food: [
      "🍕 Zanzibar pizza at Forodhani Gardens night market - unique local street food with meat, vegetables, and cheese",
      "🦐 Fresh seafood platters at beachfront restaurants - grilled lobster, king prawns, and red snapper",
      "🌿 Spice farm tours with tastings of fresh cloves, nutmeg, cinnamon, and tropical fruits",
      "🍛 Swahili curry dishes with coconut rice - pilau, biryani, and samosas with Indian influences",
      "🥭 Fresh tropical fruits from local markets - passion fruit, jackfruit, and sweet mangoes",
      "🍲 Urojo soup - traditional Zanzibari soup with potatoes, bhajias, and various local spices",
      "🥥 Fresh coconut water directly from the source on beaches and markets",
      "🍻 Kilimanjaro beer and local coffee at rooftop terraces with ocean views"
    ],
    transport: {
      getting_there: "✈️ Fly to Abeid Amani Karume International Airport (ZNZ) directly, or via Julius Nyerere International Airport (DAR) in Dar es Salaam with connecting flights or Azam Marine ferry (2 hours, $35-50). International airlines include KLM, Turkish Airlines, and Emirates.",
      local: "🚗 Taxis (negotiate fare beforehand), ride-sharing apps available. Dala-dalas (shared minibuses) for budget travel ($0.50-1). Car rentals and scooters available for island exploration. Ferries and boats for island hopping to Pemba and Mnemba Atoll."
    },
    budget_tips: [
      "🚌 Use dala-dalas instead of taxis for significant savings - only $0.50 per trip vs $10-20 for taxis",
      "🏪 Eat at local restaurants and markets rather than tourist areas - save 60-70% on meals",
      "💰 Always bargain at markets, for tours, and taxi fares - start at 50% of asking price",
      "🏘️ Stay in Stone Town for budget accommodations and walking access to major attractions",
      "📅 Visit during shoulder season (April-May, November) for 30-40% lower accommodation prices",
      "💧 Bring water purification tablets or buy bottled water - avoid expensive resort water",
      "🎯 Book tours directly with operators rather than through hotels to save 20-30%",
      "🍛 Try local food markets for authentic meals at $2-5 instead of $15-25 at tourist restaurants"
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    try {
      const data: DestinationData = JSON.parse(jsonInput);
      
      // Validate required fields
      if (!data.destination || !data.country) {
        throw new Error('Destination and country are required fields');
      }

      // Simulate advanced AI processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onSubmit(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON format. Please check your structured destination data.');
    } finally {
      setIsProcessing(false);
    }
  };

  const loadSampleData = () => {
    setJsonInput(JSON.stringify(sampleData, null, 2));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
          <Globe className="w-6 h-6 mr-3 text-blue-600" />
          🗂 Structured Destination Data Input
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Input your <strong>scraped destination intelligence</strong> from open sources (Wikivoyage, OpenTripMap, Wikimedia) 
          in structured JSON format, or explore with our enhanced sample data.
        </p>
      </div>

      <div className="mb-6">
        <button
          type="button"
          onClick={loadSampleData}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <Sparkles className="w-5 h-5" />
          <span>🌟 Load Enhanced Sample (Zanzibar Intelligence)</span>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="json-input" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Destination Intelligence JSON Data
          </label>
          <div className="relative">
            <FileText className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
            <textarea
              id="json-input"
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full h-96 pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm transition-colors"
              placeholder="Paste your structured JSON destination intelligence data here..."
              required
            />
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠️</span>
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isProcessing || !jsonInput.trim()}
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>🤖 Processing Advanced Travel Intelligence...</span>
            </>
          ) : (
            <>
              <Upload className="w-5 h-5" />
              <span>🚀 Generate Complete Travel Guide</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <h3 className="font-bold text-blue-900 mb-3 flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          📋 Expected JSON Intelligence Structure:
        </h3>
        <div className="text-sm text-blue-800 space-y-2 grid md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <p><strong>🏷️ Core Data:</strong></p>
            <p>• <code>destination</code> & <code>country</code> (required)</p>
            <p>• <code>categories</code>: Activity classifications</p>
            <p>• <code>overview</code>: Intelligence summary</p>
          </div>
          <div className="space-y-1">
            <p><strong>🎯 Enhanced Features:</strong></p>
            <p>• <code>attractions</code>: With verified links</p>
            <p>• <code>accommodations</code>: Budget/Mid/Luxury tiers</p>
            <p>• <code>images</code>: Visual enrichment with sources</p>
          </div>
          <div className="space-y-1">
            <p><strong>🧠 Intelligence Layers:</strong></p>
            <p>• <code>climate</code>, <code>safety</code>, <code>culture</code></p>
            <p>• <code>best_time</code>: Optimal visiting periods</p>
          </div>
          <div className="space-y-1">
            <p><strong>💡 Pro Features:</strong></p>
            <p>• <code>food</code>: Culinary intelligence</p>
            <p>• <code>transport</code>: Logistics data</p>
            <p>• <code>budget_tips</code>: Money-saving hacks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationForm;