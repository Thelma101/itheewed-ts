import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Location {
  id: number;
  name: string;
  type: 'venue' | 'hotel' | 'airport';
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  distance?: string;
}

const MapFooter = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Sample locations
  const locations: Location[] = [
    {
      id: 1,
      name: "The Grand Ballroom",
      type: "venue",
      address: "123 Wedding Lane, New York, NY 10001",
      coordinates: { lat: 40.7128, lng: -74.0060 },
      distance: "0 miles"
    },
    {
      id: 2,
      name: "Luxury Hotel & Spa",
      type: "hotel",
      address: "456 Comfort Street, New York, NY 10002",
      coordinates: { lat: 40.7148, lng: -74.0065 },
      distance: "0.5 miles"
    },
    {
      id: 3,
      name: "JFK International Airport",
      type: "airport",
      address: "JFK Airport, Queens, NY 11430",
      coordinates: { lat: 40.6413, lng: -73.7781 },
      distance: "15 miles"
    }
  ];

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.initMap = () => {
      setMapLoaded(true);
    };

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  useEffect(() => {
    if (mapLoaded && selectedLocation) {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: selectedLocation.coordinates,
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }]
          }
        ]
      });

      new google.maps.Marker({
        position: selectedLocation.coordinates,
        map,
        title: selectedLocation.name
      });
    }
  }, [mapLoaded, selectedLocation]);

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-[var(--color-primary-red)]">
          Venue & Travel Information
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <div id="map" className="w-full h-full" />
          </div>

          {/* Location Information */}
          <div className="space-y-6">
            {/* Location Selector */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {locations.map((location) => (
                <motion.button
                  key={location.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedLocation?.id === location.id
                      ? 'bg-[var(--color-primary-red)] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedLocation(location)}
                >
                  {location.type === 'venue' ? '🏰' :
                   location.type === 'hotel' ? '🏨' :
                   '✈️'} {location.name}
                </motion.button>
              ))}
            </div>

            {/* Selected Location Details */}
            {selectedLocation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{selectedLocation.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-500">📍</span>
                    <p className="text-gray-700">{selectedLocation.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-500">📏</span>
                    <p className="text-gray-700">{selectedLocation.distance} from venue</p>
                  </div>
                  
                  {/* Additional Information based on location type */}
                  {selectedLocation.type === 'hotel' && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Special Wedding Rate</h4>
                      <p className="text-gray-600">Book using code: WEDDING2024</p>
                      <p className="text-sm text-gray-500 mt-2">Valid until August 1, 2024</p>
                    </div>
                  )}
                  
                  {selectedLocation.type === 'airport' && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Transportation Options</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Taxi: ~45 minutes</li>
                        <li>Subway: ~1 hour</li>
                        <li>Airport Shuttle: ~50 minutes</li>
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Weather Widget */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Wedding Day Forecast</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">☀️</span>
                  <div>
                    <p className="text-2xl font-semibold">72°F</p>
                    <p className="text-gray-600">Sunny</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">August 20, 2024</p>
                  <p className="text-sm text-gray-500">Perfect for photos!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MapFooter; 