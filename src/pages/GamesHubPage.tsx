import React from 'react';
import { Link } from 'react-router-dom';

const games = [
  { path: '/vision-board', icon: '🎨', title: 'Vision Board Builder', desc: 'Design your dream wedding mood board.' },
  { path: '/budget-battle', icon: '💸', title: 'Budget Battle Royale', desc: 'Test your skills in wedding budget allocation.' },
  { path: '/timeline-race', icon: '⏱️', title: 'Timeline Race', desc: 'Arrange wedding tasks in the right order.' },
  { path: '/guest-detective', icon: '🕵️‍♂️', title: 'Guest List Detective', desc: 'Solve seating and RSVP puzzles.' },
  { path: '/vendor-matchmaker', icon: '🤝', title: 'Vendor Matchmaker', desc: 'Find your perfect wedding vendors.' },
  { path: '/wedding-simulator', icon: '🎬', title: 'Wedding Day Simulator', desc: 'Experience a virtual wedding day.' },
];

const GamesHubPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Wedding Games & Interactives</h1>
      <p className="text-lg text-gray-600">Explore fun and helpful wedding planning games. Pick your favorite!</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {games.map(game => (
        <Link key={game.path} to={game.path} className="group block bg-white rounded-2xl shadow-lg p-8 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all border border-white/30">
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{game.icon}</div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">{game.title}</h2>
          <p className="text-gray-600">{game.desc}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default GamesHubPage; 