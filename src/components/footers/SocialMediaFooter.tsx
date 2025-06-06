import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SocialPost {
  id: number;
  platform: 'instagram' | 'twitter' | 'pinterest';
  content: string;
  image?: string;
  likes: number;
  date: string;
}

const SocialMediaFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Sample social media posts
  const socialPosts: SocialPost[] = [
    {
      id: 1,
      platform: 'instagram',
      content: 'Just picked up our wedding rings! 💍✨',
      image: 'https://images.unsplash.com/photo-1606216794074-735e5aa47686?w=500',
      likes: 234,
      date: '2h ago'
    },
    {
      id: 2,
      platform: 'twitter',
      content: 'Finalizing the guest list today! Who else is excited? 🎉',
      likes: 89,
      date: '4h ago'
    },
    {
      id: 3,
      platform: 'pinterest',
      content: 'Found the perfect centerpiece inspiration!',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500',
      likes: 156,
      date: '1d ago'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically make an API call to subscribe the user
    }
  };

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Social Media Feeds */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary-red)]">
              Follow Our Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {post.image && (
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.content}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xl ${
                        post.platform === 'instagram' ? 'text-pink-600' :
                        post.platform === 'twitter' ? 'text-blue-400' :
                        'text-red-600'
                      }`}>
                        {post.platform === 'instagram' ? '📸' :
                         post.platform === 'twitter' ? '🐦' :
                         '📌'}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{post.content}</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span>❤️ {post.likes}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter and Social Links */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary-red)]">
                Stay Updated
              </h2>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--color-primary-red)] text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-sm"
                  >
                    Thanks for subscribing! 🎉
                  </motion.p>
                )}
              </form>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
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

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[var(--color-primary-red)] transition-colors">
                    RSVP
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[var(--color-primary-red)] transition-colors">
                    Registry
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[var(--color-primary-red)] transition-colors">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SocialMediaFooter; 