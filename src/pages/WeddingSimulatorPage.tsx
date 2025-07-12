import React, { useState } from 'react';

const scenarios = [
  {
    prompt: 'It starts raining during your outdoor traditional ceremony. What do you do?',
    options: [
      { text: 'Move ceremony indoors', outcome: 'Guests stay dry and the ceremony continues beautifully!' },
      { text: 'Hand out umbrellas and continue', outcome: 'Fun photos with colorful umbrellas, but some guests get wet.' },
      { text: 'Panic and delay everything', outcome: 'Stress levels rise and guests get impatient.' },
    ],
  },
  {
    prompt: 'Your DJ is running late and the reception is about to start. What now?',
    options: [
      { text: 'Start with a playlist and traditional music', outcome: 'Guests enjoy the music and cultural experience!' },
      { text: 'Wait for the DJ to arrive', outcome: 'Guests get bored and the energy drops.' },
      { text: 'Ask guests to sing traditional songs', outcome: 'Beautiful cultural moment, everyone joins in!' },
    ],
  },
  {
    prompt: 'The caterer brings jollof rice instead of fried rice. What\'s your reaction?',
    options: [
      { text: 'Embrace it - jollof is better anyway!', outcome: 'Guests love your flexibility and the delicious jollof!' },
      { text: 'Send it back immediately', outcome: 'No food for a while, guests get hungry.' },
      { text: 'Mix it with other dishes', outcome: 'Creative solution, everyone gets to try different foods.' },
    ],
  },
  {
    prompt: 'Your traditional wedding attire doesn\'t fit properly. What do you do?',
    options: [
      { text: 'Have a quick alteration done', outcome: 'Perfect fit and you look stunning!' },
      { text: 'Wear it as is', outcome: 'You make it work and still look beautiful.' },
      { text: 'Change to a backup outfit', outcome: 'Backup plan saves the day!' },
    ],
  },
  {
    prompt: 'The power goes out during the reception. How do you handle it?',
    options: [
      { text: 'Light candles and continue with acoustic music', outcome: 'Romantic atmosphere, guests love the intimate setting!' },
      { text: 'Wait for power to return', outcome: 'Guests get restless waiting.' },
      { text: 'Move the party outside', outcome: 'Beautiful outdoor celebration under the stars!' },
    ],
  },
];

const WeddingSimulatorPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState<number[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleChoice = (i: number) => {
    setChoices([...choices, i]);
    if (step < scenarios.length - 1) {
      setStep(step + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleReset = () => {
    setStep(0);
    setChoices([]);
    setShowSummary(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-pink-50 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">Wedding Day Simulator</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">Make choices and see how your wedding day unfolds with Nigerian flair!</p>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 mb-6 border border-cyan-100">
        {!showSummary ? (
          <>
            <div className="mb-6">
              <div className="text-lg font-semibold text-gray-900 mb-4">{scenarios[step].prompt}</div>
              <div className="text-sm text-gray-500 mb-4">Scenario {step + 1} of {scenarios.length}</div>
            </div>
            <div className="flex flex-col gap-4">
              {scenarios[step].options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleChoice(i)} 
                  className="px-6 py-4 bg-cyan-100 rounded-full text-cyan-800 font-bold hover:bg-cyan-200 transition-all text-left"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center w-full">
            <div className="text-4xl mb-4">🎊</div>
            <div className="text-lg font-bold mb-4">Your Wedding Day Journey:</div>
            <div className="space-y-3 mb-6">
              {scenarios.map((sc, i) => (
                <div key={i} className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                  <div className="font-semibold text-cyan-800 mb-1">Scenario {i + 1}:</div>
                  <div className="text-sm text-gray-700 mb-2">{sc.prompt}</div>
                  <div className="text-sm text-cyan-700 font-medium">Your choice: {sc.options[choices[i]].text}</div>
                  <div className="text-sm text-gray-600 mt-1">Outcome: {sc.options[choices[i]].outcome}</div>
                </div>
              ))}
            </div>
            <button 
              onClick={handleReset} 
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full hover:from-cyan-600 hover:to-pink-600 transition-all"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
      <div className="text-sm text-gray-500 text-center">Every choice shapes your perfect wedding day story!</div>
    </div>
  );
};

export default WeddingSimulatorPage; 