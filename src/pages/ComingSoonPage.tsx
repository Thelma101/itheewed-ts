import React, { useState, useEffect } from 'react';
import { showToast } from '../components/SimpleToast';
import logo from '@/features/Nav/assets/Itheewed_Logo.png';

const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [progress, setProgress] = useState(0);

  // Animate progress bar on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(75);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
              onClick={() => showToast('Logged out successfully', 'info')}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Logout
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

          {/* Enhanced Progress Section */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <span className="text-lg font-semibold text-gray-700 mr-6">Development Progress</span>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {progress}% Complete
              </span>
            </div>
            
            <div className="w-full max-w-2xl mx-auto">
              <div className="bg-white/50 backdrop-blur-sm rounded-full h-4 shadow-inner border border-white/20">
                <div 
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 h-4 rounded-full transition-all duration-2000 ease-out shadow-lg"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              Estimated Launch: <span className="font-semibold text-purple-600">December 2024</span>
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

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage; 