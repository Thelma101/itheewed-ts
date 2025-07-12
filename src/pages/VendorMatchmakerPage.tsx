import React, { useState } from 'react';

const vendors = [
  { name: 'Elegant Events by Aisha', type: 'Wedding Planner', style: 'Luxury & Traditional', location: 'Lagos' },
  { name: 'DJ Groove Master Tunde', type: 'Music & Entertainment', style: 'Afrobeats & International', location: 'Abuja' },
  { name: 'Floral Magic by Chioma', type: 'Florist', style: 'Tropical & Romantic', location: 'Port Harcourt' },
  { name: 'SnapShots by Femi', type: 'Photography', style: 'Candid & Documentary', location: 'Lagos' },
  { name: 'Catering Delights by Mama Joy', type: 'Catering', style: 'Nigerian & International', location: 'Ibadan' },
  { name: 'Transport Luxury by Emeka', type: 'Transportation', style: 'Premium & Classic', location: 'Enugu' },
  { name: 'Beauty Glow by Kemi', type: 'Makeup & Hair', style: 'Natural & Glamorous', location: 'Calabar' },
  { name: 'Decor Dreams by Folake', type: 'Decorations', style: 'Modern & Cultural', location: 'Kano' },
];

const VendorMatchmakerPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [matches, setMatches] = useState<any[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleSwipe = (liked: boolean) => {
    if (liked) setMatches([...matches, vendors[index]]);
    if (index < vendors.length - 1) {
      setIndex(index + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleReset = () => {
    setIndex(0);
    setMatches([]);
    setShowSummary(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Vendor Matchmaker</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">Swipe right (💖) to match with vendors you like, left (❌) to pass!</p>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mb-6 border border-pink-100 flex flex-col items-center">
        {!showSummary ? (
          <>
            <div className="mb-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">{vendors[index].name}</div>
              <div className="text-gray-600 mb-1">{vendors[index].type}</div>
              <div className="text-purple-600 font-semibold mb-1">{vendors[index].style}</div>
              <div className="text-sm text-gray-500">📍 {vendors[index].location}</div>
            </div>
            <div className="flex gap-8">
              <button 
                onClick={() => handleSwipe(false)} 
                className="px-8 py-3 bg-gray-200 rounded-full text-gray-700 font-bold text-xl hover:bg-gray-300 transition-all"
              >
                ❌
              </button>
              <button 
                onClick={() => handleSwipe(true)} 
                className="px-8 py-3 bg-pink-500 rounded-full text-white font-bold text-xl hover:bg-pink-600 transition-all animate-pulse"
              >
                💖
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              {index + 1} of {vendors.length} vendors
            </div>
          </>
        ) : (
          <div className="text-center w-full">
            <div className="text-4xl mb-4">🎉</div>
            <div className="text-lg font-bold mb-4">Your Perfect Matches:</div>
            {matches.length === 0 ? (
              <div className="text-gray-500 mb-4">No matches yet. Try again!</div>
            ) : (
              <div className="space-y-3 mb-6">
                {matches.map((v, i) => (
                  <div key={i} className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <div className="font-semibold text-pink-800">{v.name}</div>
                    <div className="text-sm text-gray-600">{v.type} • {v.style}</div>
                    <div className="text-xs text-gray-500">📍 {v.location}</div>
                  </div>
                ))}
              </div>
            )}
            <button 
              onClick={handleReset} 
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
      <div className="text-sm text-gray-500 text-center">Find your perfect wedding vendors from across Nigeria!</div>
    </div>
  );
};

export default VendorMatchmakerPage; 