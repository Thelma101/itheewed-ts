import React, { useState, useEffect } from 'react';
import logo from '@/features/Footer/assets/logo.svg';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SubscribeForm from './SubscribeForm';


const iosQRCode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=your-ios-app-link';

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
      { id: 2, text: "Medium (50-300)", votes: 45 },
      { id: 3, text: "Large Celebration (301+)", votes: 25 }
    ]
  },
  style: {
    question: "What's your dream wedding style?",
    options: [
      { id: 1, text: "Fusion (Traditional & Modern)", votes: 35 },
      { id: 2, text: "Modern Minimalist", votes: 25 },
      { id: 3, text: "Vintage Romance", votes: 20 },
      { id: 4, text: "Traditional Aso-Ebi", votes: 20 },
      { id: 5, text: "Contemporary African", votes: 20 }
    ]
  },
  song: {
    question: "What's your ideal first dance song?",
    options: [
      { id: 1, text: "Can't Help Falling in Love - Elvis Presley", votes: 20 },
      { id: 2, text: "I Will Always Love You — Whitney Houston", votes: 15 },
      { id: 2, text: "Perfect - Ed Sheeran", votes: 25 },
      { id: 3, text: "All of Me - John Legend", votes: 25 },
      { id: 5, text: "Endless Love — Diana Ross & Lionel Richie", votes: 15 }
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


const weddingFacts = [
  "The tradition of wearing a white wedding dress started with Queen Victoria in 1840.",
  "The average engagement ring costs about 2 months' salary.",
  "The word 'honeymoon' comes from the ancient tradition of drinking mead for a month after the wedding.",
  "The tradition of carrying the bride over the threshold originated in medieval Europe.",
  "The first diamond engagement ring was given by Archduke Maximilian of Austria in 1477.",
  "The tradition of throwing rice at weddings symbolizes fertility and prosperity.",
  "The longest wedding veil was longer than 63 football fields!",
  "The tradition of the best man originated from the need for a strong warrior to help kidnap the bride.",
  "The first wedding cake was actually made of wheat and barley.",
  "The tradition of wearing rings on the fourth finger comes from the ancient belief that a vein runs directly to the heart.",
  "Did you know in Nigeria, guests often 'spray' money on the bride and groom during the celebration to wish them prosperity?",
  "In the Igbo culture of Nigeria, the bride offers palm wine to the groom in a ceremony called 'Igba Nkwu,' symbolizing acceptance.",
  "Many Nigerian weddings feature 'Aso-Ebi,' where family and friends wear coordinated outfits to show solidarity and support.",
  "In some African cultures, brides wear vibrant, colorful traditional attire instead of white to represent fertility and happiness.",
  "The Yoruba wedding tradition includes the groom prostrating before the bride's family as a sign of respect and commitment.",
  "Did you know in some parts of Nigeria, the bride price negotiation is a detailed tradition that reflects respect between families?",
  "In South Africa, the Zulu wedding dance is a vibrant ceremony featuring traditional attire and rhythmic dancing celebrating the union.",
  "Some African weddings include the breaking or sharing of kola nuts as a symbol of hospitality and unity within communities.",
  "In Nigeria, it's common for the bride's friends to playfully 'kidnap' her before the wedding, and the groom must find and 'rescue' her.",
  "Did you know some Nigerian weddings last for several days, combining both traditional rites and modern celebrations?"
];



const Footer: React.FC = () => {
  // State management

  const [currentPoll, setCurrentPoll] = useState(polls.initial);
  const [userVotes, setUserVotes] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);


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
      } else if (currentPoll === polls.tradition) {
        // Cycle back to the beginning
        setCurrentPoll(polls.initial);
        // Reset user votes for the new cycle
        setUserVotes({});
      }
      setShowResults(false);
    }, 2000);
  };

  // Rotate wedding facts
  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % weddingFacts.length);
    }, 6000);
    return () => clearInterval(factInterval);
  }, []);

  // Calculate total votes for current poll
  const totalVotes = currentPoll.options.reduce((sum, opt) => sum + opt.votes, 0);

  return (
    <section className="bg-primary w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-8 lg:px-20 py-10 md:pt-24 md:pb-40 text-white">
        {/* Col 1: Logo & About Us */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="logo" className="w-16 h-16 md:w-32 md:h-24 lg:w-40 lg:h-30 mb-4" />
          <div className="w-full rounded-lg p-3 backdrop-blur-sm h-auto flex flex-col">
            <h2 className="text-lg font-bold mb-2 text-center md:text-left">About Us</h2>
            <p className="text-sm text-gray-200 max-w-md text-center md:text-left">
              I Thee Wed is your modern wedding companion —  we blend smart planning tools, heartfelt inspiration, and a supportive community so your journey from "Yes" to "I do" is as magical as your wedding day itself.
            </p>
            <p className="text-sm text-gray-200 max-w-md mt-2 text-center md:text-left">

            </p>
            <p className="text-sm text-gray-200 max-w-md mt-2 text-center md:text-left">
              As a multivendor hub for all things weddings, we connect you with trusted vendors, curated ideas, and a community that celebrates every moment with you.
            </p>
          </div>
        </div>

        {/* Col 2: Did You Know & Navigation */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
          {/* Did You Know Section - Fixed Height */}
          <div className="w-full bg-white/10 rounded-lg p-4 backdrop-blur-sm min-h-[200px] flex flex-col">
            <h2 className="text-lg font-bold mb-4 text-center md:text-left">Did You Know?</h2>
            <div className="flex-grow flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFactIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  <p className="text-base italic">{weddingFacts[currentFactIndex]}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 w-full">
            <div className="flex flex-col items-center md:items-start">
              <Link to="/" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors mb-2">Home</Link>
              <Link to="/about" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors mb-2">About</Link>
              <Link to="/contact" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors mb-2">Contact</Link>
              <Link to="/faq" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors">FAQ</Link>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Link to="/vendors" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors mb-2">Vendors</Link>
              <Link to="/blog" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors mb-2">Blog</Link>
              <Link to="/gallery" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors mb-2">Gallery</Link>
              <Link to="/testimonials" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors">Reviews</Link>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Link to="/privacy" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors mb-2">Privacy</Link>
              <Link to="/terms" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors mb-2">Terms</Link>
              <Link to="/support" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors mb-2">Support</Link>
              <Link to="/careers" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors">Careers</Link>
            </div>
          </div>
        </div>

        {/* Col 3: Poll Section */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
          <div className="w-full bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <h2 className="text-lg font-bold mb-4 text-center md:text-left">Wedding Poll</h2>
            <p className="mb-4 text-base font-semibold text-center md:text-left">{currentPoll.question}</p>
            {!showResults ? (
              <form className="space-y-3">
                {currentPoll.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleVote(option.id)}
                    disabled={!!userVotes[currentPoll.question]}
                    className={`w-full text-left px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/20 transition-colors text-sm md:text-base ${userVotes[currentPoll.question] === option.id ? 'bg-[var(--color-primary-red)] text-white' : ''
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
                      <div className="flex justify-between text-xs md:text-sm">
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

                      {/* Social Media Links */}
            <div className='mx-auto pt-4 md:pt-10'>
              <h3 className=" font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-opacity-90 transition-colors"
                >
                  📸
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-opacity-90 transition-colors"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-opacity-90 transition-colors"
                >
                  📌
                </a>
        </div>
      </div>
        </div>

        {/* Col 4: QR Code & Newsletter */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 space-y-6">
          {/* QR Code */}
          <div className="w-full bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <h2 className="text-lg font-bold mb-4 text-center md:text-left">Get Our Mobile App</h2>
            <div className="flex justify-center">
              <div className="text-center">
                <img src={iosQRCode} alt="iOS App QR Code" className="w-20 h-20 md:w-24 md:h-24 mb-2" />
                <p className="text-sm">Android + iOS</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}

           <SubscribeForm />
        </div>

      </div>
      <div className='flex flex-col text-center justify-center item-center md:pb-10 '>
        <p className='text-white  text-xs font-thin'>
          <a href="https://www.anchorit.com.ng" target='_blank' > Made with ❤️ by{' '} i thee wed</a>
        </p>
        <p className='text-white  text-xs font-thin mt-1'>
          {' '} (c) All rights reserved 2025 
        </p>
      </div>
    </section>
  );
};

export default Footer;
