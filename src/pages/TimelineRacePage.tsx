import React, { useState } from 'react';

const correctOrder = [
  'Set wedding date',
  'Book venue',
  'Hire vendors',
  'Traditional engagement',
  'Send invitations',
  'Buy wedding attire',
  'Plan menu & catering',
  'Final RSVP count',
  'Wedding rehearsal',
  'Wedding day!'
];

function shuffle(array: string[]) {
  return array.slice().sort(() => Math.random() - 0.5);
}

const TimelineRacePage: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>(shuffle(correctOrder));
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleDrag = (from: number, to: number) => {
    const updated = tasks.slice();
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setTasks(updated);
  };

  const handleSubmit = () => {
    if (JSON.stringify(tasks) === JSON.stringify(correctOrder)) {
      setFeedback('🎉 Perfect! You nailed the wedding timeline!');
    } else {
      setFeedback('🔄 Not quite! Try again or check the correct order.');
      setShowCorrect(true);
    }
  };

  const handleReset = () => {
    setTasks(shuffle(correctOrder));
    setFeedback(null);
    setShowCorrect(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Timeline Race</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">Arrange the wedding planning tasks in the correct chronological order!</p>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 mb-6 border border-blue-100">
        <ol className="space-y-3">
          {tasks.map((task, i) => (
            <li key={task} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex gap-1">
                <button 
                  disabled={i === 0} 
                  onClick={() => handleDrag(i, i - 1)} 
                  className="px-2 py-1 text-xs bg-blue-200 rounded disabled:opacity-30 hover:bg-blue-300 transition-colors"
                >
                  ↑
                </button>
                <button 
                  disabled={i === tasks.length - 1} 
                  onClick={() => handleDrag(i, i + 1)} 
                  className="px-2 py-1 text-xs bg-blue-200 rounded disabled:opacity-30 hover:bg-blue-300 transition-colors"
                >
                  ↓
                </button>
              </div>
              <span className="flex-1 text-gray-800 font-medium">{task}</span>
              <span className="text-sm text-gray-500">#{i + 1}</span>
            </li>
          ))}
        </ol>
        <div className="flex gap-4 mt-6">
          <button onClick={handleSubmit} className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:from-blue-600 hover:to-purple-600 transition-all font-semibold">
            Submit Order
          </button>
          <button onClick={handleReset} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all font-semibold">
            Reset
          </button>
        </div>
        {feedback && (
          <div className="mt-4 p-4 rounded-lg text-center font-semibold text-lg">
            {feedback}
          </div>
        )}
        {showCorrect && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="font-semibold text-blue-800 mb-2">Correct Order:</div>
            <ol className="text-sm text-blue-700 space-y-1">
              {correctOrder.map((task, i) => (
                <li key={i}>{i + 1}. {task}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
      <div className="text-sm text-gray-500 text-center">Use the arrows to reorder tasks in the correct wedding planning sequence!</div>
    </div>
  );
};

export default TimelineRacePage; 