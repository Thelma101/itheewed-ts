import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicFooter = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const weddingFacts = [
    "The tradition of wearing a white wedding dress started with Queen Victoria in 1840.",
    "The average engagement ring costs about 2 months' salary.",
    "June is the most popular month for weddings, followed by August and September.",
    "The tradition of the wedding cake comes from ancient Rome.",
    "The first diamond engagement ring was given in 1477.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % weddingFacts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidEmail) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-primary w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-8 lg:px-20 py-10 md:pt-24 md:pb-40 text-white">
        {/* Col 1: Logo & About Us */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-full rounded-lg p-3 backdrop-blur-sm h-auto flex flex-col">
            <h2 className="text-lg font-bold mb-2 text-center md:text-left">About Us</h2>
            <p className="text-sm text-gray-200 max-w-md text-center md:text-left">
              I Thee Wed is your modern wedding companion —  we blend smart planning tools, heartfelt inspiration, and a supportive community so your journey from "Yes" to "I do" is as magical as your wedding day itself.
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

        {/* Col 3: Newsletter */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
          <div className="w-full">
            <h2 className="text-lg font-bold mb-4 text-center md:text-left">Stay Updated</h2>
            <form onSubmit={handleSubscribe} className="space-y-4 text-primary-gray">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 border focus:border-1 focus:border-transparent text-sm md:text-base ${email && !isValidEmail ? 'border-red-500' : ''}`}
                required
              />
              {email && !isValidEmail && (
                <p className="text-red-500 text-xs md:text-sm mt-1">Please enter a valid email address</p>
              )}
              <button
                type="submit"
                disabled={!isValidEmail}
                className={`w-full py-3 transition-colors text-sm md:text-base ${isValidEmail ? 'bg-[var(--color-primary-red)] text-white hover:bg-opacity-90' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
              >
                Subscribe
              </button>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-green-600 text-xs md:text-sm text-center md:text-left"
                >
                  Thanks for subscribing! 🎉
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Col 4: QR Code */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
          <div className="w-full bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <h2 className="text-lg font-bold mb-4 text-center md:text-left">Get Our Mobile App</h2>
            <div className="flex justify-center">
              <div className="text-center">
                <p className="text-sm">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex text-center justify-center item-center md:pb-10'>
        <p className='text-white text-xs font-mono'>
          <a href="https://www.anchorit.com.ng" target='_blank'>Made with ❤️ by i thee wed</a>
        </p>
      </div>
    </section>
  );
};

export default DynamicFooter; 