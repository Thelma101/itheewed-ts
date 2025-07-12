import React, { useState } from 'react';
import VisionBoardBuilder from '../components/games/VisionBoardBuilder';
import BudgetBattleRoyale from '../components/games/BudgetBattleRoyale';
import TimelineRace from '../components/games/TimelineRace';
import GuestListDetective from '../components/games/GuestListDetective';
import VendorMatchmaker from '../components/games/VendorMatchmaker';
import WeddingDaySimulator from '../components/games/WeddingDaySimulator';

const games = [
  { 
    id: 'vision-board', 
    name: 'Vision Board Builder', 
    icon: '🎨', 
    description: 'Design your dream wedding mood board.',
    component: VisionBoardBuilder 
  },
  { 
    id: 'budget-battle', 
    name: 'Budget Battle Royale', 
    icon: '💸', 
    description: 'Test your skills in wedding budget allocation.',
    component: BudgetBattleRoyale 
  },
  { 
    id: 'timeline-race', 
    name: 'Timeline Race', 
    icon: '⏱️', 
    description: 'Arrange wedding tasks in the right order.',
    component: TimelineRace 
  },
  { 
    id: 'guest-detective', 
    name: 'Guest List Detective', 
    icon: '🕵️‍♂️', 
    description: 'Solve seating and RSVP puzzles.',
    component: GuestListDetective 
  },
  { 
    id: 'vendor-matchmaker', 
    name: 'Vendor Matchmaker', 
    icon: '🤝', 
    description: 'Find your perfect wedding vendors.',
    component: VendorMatchmaker 
  },
  { 
    id: 'wedding-simulator', 
    name: 'Wedding Day Simulator', 
    icon: '🎬', 
    description: 'Experience a virtual wedding day.',
    component: WeddingDaySimulator 
  },
];

const GamesPage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
  };

  const handleBackToGames = () => {
    setSelectedGame(null);
  };

  if (selectedGame) {
    const game = games.find(g => g.id === selectedGame);
    if (game) {
      const GameComponent = game.component;
      return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
          <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={handleBackToGames}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    ←
                  </button>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {game.name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <GameComponent />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Wedding Games & Interactives
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore fun and helpful wedding planning games. Each game helps you learn about different aspects of wedding planning while having fun!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map(game => (
            <button
              key={game.id}
              onClick={() => handleGameSelect(game.id)}
              className="group block bg-white rounded-2xl shadow-lg p-8 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all border border-white/30 text-left"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{game.icon}</div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{game.name}</h2>
              <p className="text-gray-600">{game.description}</p>
              <div className="mt-4 text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                Play Now →
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage; 