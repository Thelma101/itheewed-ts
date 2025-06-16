import React, { useState, useEffect } from 'react';
import logo from '@/features/Footer/assets/logo.svg';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Sample QR code images - replace with your actual QR codes
const iosQRCode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=your-ios-app-link';
const androidQRCode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=your-android-app-link';

// Simplified poll data structure
const polls = {
  initial: {
    question: "Do you want a destination wedding?",
    options: [
      { id: 1, text: "Yes, I dream of an exotic location!", votes: 45 },
      { id: 2, text: "No, I prefer local celebrations", votes: 55 }
    ]
  },
  destination: {
    question: "Where's your dream wedding destination?",
    options: [
      { id: 1, text: "Tropical Paradise (Bali, Maldives)", votes: 35 },
      { id: 2, text: "European Romance (Italy, France)", votes: 30 },
      { id: 3, text: "Mountain Magic (Swiss Alps, Banff)", votes: 20 },
      { id: 4, text: "Desert Oasis (Dubai, Morocco)", votes: 15 }
    ]
  },
  guestList: {
    question: "How big will your guest list be?",
    options: [
      { id: 1, text: "Small & Intimate (<50)", votes: 30 },
      { id: 2, text: "Medium (50-150)", votes: 45 },
      { id: 3, text: "Large Celebration (150+)", votes: 25 }
    ]
  },
  style: {
    question: "What's your dream wedding style?",
    options: [
      { id: 1, text: "Rustic Barn & Wildflowers", votes: 35 },
      { id: 2, text: "Modern Minimalist", votes: 25 },
      { id: 3, text: "Vintage Romance", votes: 20 },
      { id: 4, text: "Bohemian Garden", votes: 20 }
    ]
  },
  song: {
    question: "What's your ideal first dance song?",
    options: [
      { id: 1, text: "Can't Help Falling in Love", votes: 30 },
      { id: 2, text: "Perfect by Ed Sheeran", votes: 25 },
      { id: 3, text: "All of Me by John Legend", votes: 25 },
      { id: 4, text: "A Thousand Years", votes: 20 }
    ]
  },
  tradition: {
    question: "Which wedding tradition is most meaningful to you?",
    options: [
      { id: 1, text: "First Look", votes: 30 },
      { id: 2, text: "Father-Daughter Dance", votes: 25 },
      { id: 3, text: "Mother-Son Dance", votes: 25 },
      { id: 4, text: "Unity Ceremony", votes: 20 },
      { id: 5, text: "Ring Exchange", votes: 15 }
    ]
  }
};

// Simplified wedding facts
const weddingFacts = [
  "The tradition of wearing a white wedding dress started with Queen Victoria in 1840.",
  "The average engagement ring costs about 2 months' salary.",
  "The word 'honeymoon' comes from the ancient tradition of drinking mead for a month after marriage.",
  "The first diamond engagement ring was given in 1477.",
  "The tradition of carrying the bride over the threshold comes from ancient Rome."
];

const Footer: React.FC = () => {
  // State management
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [currentPoll, setCurrentPoll] = useState(polls.initial);
  const [userVotes, setUserVotes] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  // Handle subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  // Handle poll voting
  const handleVote = (optionId: number) => {
    if (userVotes[currentPoll.question]) return;

    // Record vote and update results
    setUserVotes(prev => ({ ...prev, [currentPoll.question]: optionId }));
    setCurrentPoll(prev => ({
      ...prev,
      options: prev.options.map(opt =>
        opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
      )
    }));
    setShowResults(true);

    // Move to next poll after 2 seconds
    setTimeout(() => {
      if (currentPoll === polls.initial) {
        setCurrentPoll(optionId === 1 ? polls.destination : polls.guestList);
      } else if (currentPoll === polls.destination) {
        setCurrentPoll(polls.guestList);
      } else if (currentPoll === polls.guestList) {
        setCurrentPoll(polls.style);
      } else if (currentPoll === polls.style) {
        setCurrentPoll(polls.song);
      } else if (currentPoll === polls.song) {
        setCurrentPoll(polls.tradition);
      }
      setShowResults(false);
    }, 2000);
  };

  // Rotate wedding facts
  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % weddingFacts.length);
    }, 5000);
    return () => clearInterval(factInterval);
  }, []);

  // Calculate total votes for current poll
  const totalVotes = currentPoll.options.reduce((sum, opt) => sum + opt.votes, 0);

  return (
    <section className="bg-primary w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-20 py-10 md:py-20 text-white">
        {/* Col 1: Logo & About Us */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="logo" className="w-16 h-16 md:w-20 md:h-20 mb-4" />
          <h2 className="text-lg font-bold mb-2">About Us</h2>
          <p className="text-sm text-gray-200 max-w-xs text-center md:text-left">
            I Thee Wed is your modern wedding companion, helping couples plan, celebrate, and cherish every moment. Join our community and make your special day unforgettable!
          </p>
        </div>

        {/* Col 2: Did You Know & Navigation */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 md:mb-40">
          {/* Did You Know Section - Fixed Height */}
          <div className="w-full bg-white/10 rounded-lg p-4 backdrop-blur-sm h-[200px] flex flex-col">
            <h2 className="text-lg font-bold mb-4">Did You Know?</h2>
            <div className="flex-grow flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFactIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-base italic">{weddingFacts[currentFactIndex]}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start mt-8 md:mt-7">
            <Link to="/" className="text-white text-base hover:text-gray-300 transition-colors mb-2">Home</Link>
            <Link to="/about" className="text-white text-base hover:text-gray-300 transition-colors mb-2">About</Link>
            <Link to="/contact" className="text-white text-base hover:text-gray-300 transition-colors mb-2">Contact</Link>
            <Link to="/faq" className="text-white text-base hover:text-gray-300 transition-colors">FAQ</Link>
          </div>
        </div>

        {/* Col 3: Poll Section */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
          <div className="w-full bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <h2 className="text-lg font-bold mb-4">Wedding Poll</h2>
            <p className="mb-4 text-base font-semibold text-center md:text-left">{currentPoll.question}</p>
            {!showResults ? (
              <form className="space-y-3">
                {currentPoll.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleVote(option.id)}
                    disabled={!!userVotes[currentPoll.question]}
                    className={`w-full text-left px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/20 transition-colors ${
                      userVotes[currentPoll.question] === option.id ? 'bg-[var(--color-primary-red)] text-white' : ''
                    }`}
                  >
                    {option.text}
                  </button>
                ))}
              </form>
            ) : (
              <div className="space-y-3">
                {currentPoll.options.map((option) => {
                  const percent = totalVotes ? Math.round((option.votes / totalVotes) * 100) : 0;
                  return (
                    <div key={option.id} className="w-full">
                      <div className="flex justify-between text-sm">
                        <span>{option.text}</span>
                        <span>{percent}%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percent}%` }}
                          transition={{ duration: 0.7 }}
                          className="h-full bg-white rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
                <p className="text-center text-xs text-gray-300 mt-2">Based on {totalVotes} responses</p>
              </div>
            )}
          </div>
        </div>

        {/* Col 4: QR Code & Newsletter */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 space-y-6">
          {/* QR Code */}
          <div className="w-full bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <h2 className="text-lg font-bold mb-4">Get Our App</h2>
            <div className="flex justify-center">
              <div className="text-center">
                <img src={iosQRCode} alt="iOS App QR Code" className="w-24 h-24 mb-2" />
                <p className="text-sm">Android + iOS</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full">
            <h2 className="text-lg font-bold mb-4">Stay Updated</h2>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent ${
                  email && !isValidEmail ? 'border-red-500' : ''
                }`}
                required
              />
              {email && !isValidEmail && (
                <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
              )}
              <button
                type="submit"
                disabled={!isValidEmail}
                className={`w-full py-2 rounded-lg transition-colors ${
                  isValidEmail ? 'bg-[var(--color-primary-red)] text-white hover:bg-opacity-90' : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
              >
                Subscribe
              </button>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-green-600 text-sm text-center md:text-left"
                >
                  Thanks for subscribing! 🎉
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;