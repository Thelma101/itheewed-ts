import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../components/SimpleToast';
import axios from 'axios';
import logo from '@/features/Nav/assets/Itheewed_Logo.png';

const ComingSoonPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const weddingQuestions = [
    {
      question: "What's the most important aspect of wedding planning?",
      options: ["Budget", "Venue", "Guest List", "All of the above"],
      correct: 3,
      explanation: "All aspects are important, but they work together!"
    },
    {
      question: "When should you start planning your wedding?",
      options: ["1 month before", "6 months before", "12-18 months before", "On the day"],
      correct: 2,
      explanation: "12-18 months gives you time to secure vendors and venues!"
    },
    {
      question: "What percentage of your budget should go to venue and catering?",
      options: ["30-40%", "50-60%", "70-80%", "90%"],
      correct: 1,
      explanation: "Venue and catering typically take up 50-60% of your budget."
    },
    {
      question: "How many guests should you invite if your venue holds 100?",
      options: ["80", "100", "120", "150"],
      correct: 0,
      explanation: "Always invite fewer than capacity to account for RSVPs!"
    }
  ];

  const startGame = () => {
    setShowGame(true);
    setGameScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const answerQuestion = (selectedAnswer: number) => {
    if (selectedAnswer === weddingQuestions[currentQuestion].correct) {
      setGameScore(gameScore + 1);
      showToast('Correct! 🎉', 'success');
    } else {
      showToast('Good try! 💡', 'info');
    }

    if (currentQuestion < weddingQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetGame = () => {
    setShowGame(false);
    setGameScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  // Animate progress bar on mount
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setProgress(75);
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      // Call logout API endpoint
      await axios.post('https://i-thee-wed-api.onrender.com/api/v1/auth/logout');
      showToast('Logged out successfully!', 'success');
      
      // Redirect to homepage after a short delay
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error('Logout error:', error);
      showToast('Logged out successfully!', 'success');
      // Still redirect even if API call fails
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      showToast('Thanks! We\'ll notify you when it\'s ready!', 'success');
      setEmail('');
    }
  };

  const features = [
    { icon: '💒', title: 'Wedding Dashboard', desc: 'Complete wedding management' },
    { icon: '👥', title: 'Vendor Hub', desc: 'Connect with top vendors' },
    { icon: '📅', title: 'Smart Timeline', desc: 'Never miss a milestone' },
    { icon: '💰', title: 'Budget Tracker', desc: 'Keep costs organized' },
    { icon: '📱', title: 'Guest Manager', desc: 'Handle RSVPs easily' },
    { icon: '🎨', title: 'Website Builder', desc: 'Create your wedding site' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-200 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              {/* <img src={logo} alt="I Thee Wed" className="h-10 w-auto" /> */}
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                I Thee Wed
              </h1>
            </div>
            <button 
              onClick={handleLogout}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              disabled={isLoggingOut}
            >
              {isLoggingOut ? 'Logging Out...' : 'Logout'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-12">
            {/* Animated Celebration Icons */}
            <div className="flex justify-center space-x-4 mb-8">
              <div className="text-4xl animate-bounce">🎉</div>
              <div className="text-4xl animate-bounce animation-delay-200">💒</div>
              <div className="text-4xl animate-bounce animation-delay-400">💕</div>
              <div className="text-4xl animate-bounce animation-delay-600">✨</div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                Something Magical
              </span>
              <br />
              <span className="text-gray-800">is Coming!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're crafting the most beautiful wedding planning experience ever created. 
              Your perfect dashboard is being prepared with love, care, and attention to every detail.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-sm font-medium text-gray-700 mr-4">Progress</span>
              <span className="text-sm text-gray-500">75% Complete</span>
            </div>
            <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>

          {/* Interactive Game Section */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                🎮 Wedding Planning Quiz
              </h3>
              
              {!showGame && !showResult && (
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Test your wedding planning knowledge while you wait!
                  </p>
                  <button
                    onClick={startGame}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Start Quiz
                  </button>
                </div>
              )}

              {showGame && !showResult && (
                <div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Question {currentQuestion + 1} of {weddingQuestions.length}
                      </span>
                      <span className="text-sm font-semibold text-purple-600">
                        Score: {gameScore}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / weddingQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-6">
                    {weddingQuestions[currentQuestion].question}
                  </h4>

                  <div className="space-y-3">
                    {weddingQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => answerQuestion(index)}
                        className="w-full p-4 text-left bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-300 rounded-lg transition-all duration-200 hover:shadow-md"
                      >
                        <span className="font-medium text-gray-900">{option}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {showResult && (
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {gameScore === weddingQuestions.length ? '🏆' : gameScore >= 2 ? '🎉' : '💪'}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Quiz Complete!
                  </h4>
                  <p className="text-lg text-gray-600 mb-4">
                    You got {gameScore} out of {weddingQuestions.length} correct!
                  </p>
                  {gameScore === weddingQuestions.length && (
                    <p className="text-purple-600 font-semibold mb-4">
                      Perfect! You're a wedding planning expert! 🌟
                    </p>
                  )}
                  <button
                    onClick={resetGame}
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Play Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What's Coming Your Way
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 border border-white/20"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Email Signup */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-12 text-center text-white mb-16 shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Be the First to Experience Magic! ✨
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get exclusive early access, special features, and be among the first to create 
              your perfect wedding journey with us.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleEmailSignup} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white text-purple-600 px-8 py-4 rounded-full inline-block font-semibold shadow-lg">
                ✨ You're on the VIP list! We'll notify you soon.
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Stay Connected With Us
          </h3>
          <div className="flex justify-center space-x-8">
            {[
              { icon: '📸', name: 'Instagram', color: 'from-pink-500 to-purple-500' },
              { icon: '📘', name: 'Facebook', color: 'from-blue-500 to-blue-600' },
              { icon: '🐦', name: 'Twitter', color: 'from-cyan-400 to-blue-500' },
              { icon: '📧', name: 'Email', color: 'from-purple-500 to-pink-500' }
            ].map((social, index) => (
              <button
                key={index}
                onClick={() => showToast(`${social.name} coming soon!`, 'info')}
                className="group flex flex-col items-center space-y-2 p-4 rounded-2xl hover:bg-white/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
              >
                <div className={`text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {social.icon}
                </div>
                <div className="text-sm font-semibold text-gray-700">{social.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="relative z-10 bg-white/80 backdrop-blur-md border-t border-white/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <img src={logo} alt="I Thee Wed" className="h-8 w-auto mr-3" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                I Thee Wed
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              © 2024 I Thee Wed. Crafted with ❤️ for your special day.
            </p>
            <p className="text-sm text-gray-500">
              Need help? <a href="#" className="text-purple-600 hover:text-purple-700 underline font-medium">Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage; 