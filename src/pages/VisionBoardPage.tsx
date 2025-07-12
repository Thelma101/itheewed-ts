import React, { useState } from 'react';

const elements = [
  { id: 'color', label: 'Color Scheme', icon: '🎨' },
  { id: 'venue', label: 'Venue', icon: '🏰' },
  { id: 'dress', label: 'Wedding Dress', icon: '👗' },
  { id: 'suit', label: 'Groom\'s Suit', icon: '👔' },
  { id: 'flowers', label: 'Flowers', icon: '💐' },
  { id: 'cake', label: 'Wedding Cake', icon: '🍰' },
  { id: 'music', label: 'Music', icon: '🎶' },
  { id: 'food', label: 'Catering', icon: '🍽️' },
  { id: 'decor', label: 'Decorations', icon: '✨' },
  { id: 'transport', label: 'Transportation', icon: '🚗' },
  { id: 'photography', label: 'Photography', icon: '📸' },
  { id: 'traditional', label: 'Traditional Elements', icon: '🏺' },
];

const VisionBoardPage: React.FC = () => {
  const [board, setBoard] = useState<any[]>([]);

  const handleDrop = (el: any) => {
    setBoard([...board, el]);
  };
  const handleReset = () => setBoard([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Vision Board Builder</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">Click elements to add them to your dream wedding vision board!</p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-8 max-w-2xl">
        {elements.map(el => (
          <button key={el.id} onClick={() => handleDrop(el)} className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:bg-purple-50 transition-all">
            <span className="text-3xl mb-2">{el.icon}</span>
            <span className="text-xs text-gray-700 text-center">{el.label}</span>
          </button>
        ))}
      </div>
      <div className="w-full max-w-2xl min-h-[300px] bg-white rounded-2xl shadow-lg flex flex-wrap gap-4 p-8 mb-6 border border-purple-100">
        {board.length === 0 ? (
          <div className="w-full text-center text-gray-400">
            <div className="text-4xl mb-2">🎨</div>
            <div>Click elements above to build your vision board!</div>
          </div>
        ) : (
          board.map((el, i) => (
            <div key={i} className="flex flex-col items-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <span className="text-2xl mb-1">{el.icon}</span>
              <span className="text-xs text-gray-700 text-center">{el.label}</span>
            </div>
          ))
        )}
      </div>
      <button onClick={handleReset} className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow hover:from-purple-600 hover:to-pink-600 transition-all">Reset Board</button>
    </div>
  );
};

export default VisionBoardPage; 