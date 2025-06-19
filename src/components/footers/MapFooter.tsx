import { useState, useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const MapFooter = () => {
  const [selectedLocation, setSelectedLocation] = useState('venue');

  const locations = {
    venue: {
      name: 'Wedding Venue',
      address: '123 Wedding Lane, Lagos, Nigeria',
      coordinates: { lat: 6.5244, lng: 3.3792 }
    },
    hotel: {
      name: 'Hotel Accommodation',
      address: '456 Hotel Street, Lagos, Nigeria',
      coordinates: { lat: 6.5244, lng: 3.3792 }
    },
    airport: {
      name: 'Nearest Airport',
      address: 'Murtala Muhammed International Airport, Lagos, Nigeria',
      coordinates: { lat: 6.5774, lng: 3.3211 }
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: locations[selectedLocation].coordinates,
        zoom: 15
      });

      new window.google.maps.Marker({
        position: locations[selectedLocation].coordinates,
        map,
        title: locations[selectedLocation].name
      });
    };

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, [selectedLocation]);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-light tracking-widest text-[var(--color-primary-red)] mb-8 text-center">
          Location Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {Object.entries(locations).map(([key, location]) => (
              <button
                key={key}
                onClick={() => setSelectedLocation(key)}
                className={`w-full p-4 text-left rounded-lg transition-colors ${
                  selectedLocation === key
                    ? 'bg-[var(--color-primary-red)] text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <h3 className="font-semibold mb-1">{location.name}</h3>
                <p className="text-sm">{location.address}</p>
              </button>
            ))}
          </div>
          <div id="map" className="h-[400px] rounded-lg shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default MapFooter; 