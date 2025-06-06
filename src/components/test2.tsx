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

const test2 = () => {
  // const [email, setEmail] = useState('');
  // const [isSubscribed, setIsSubscribed] = useState(false);

  // // Sample social media posts
  // const socialPosts: SocialPost[] = [
  //   {
  //     id: 1,
  //     platform: 'instagram',
  //     content: 'Just picked up our wedding rings! 💍✨',
  //     image: 'https://images.unsplash.com/photo-1606216794074-735e5aa47686?w=500',
  //     likes: 234,
  //     date: '2h ago'
  //   },
  //   {
  //     id: 2,
  //     platform: 'twitter',
  //     content: 'Finalizing the guest list today! Who else is excited? 🎉',
  //     likes: 89,
  //     date: '4h ago'
  //   },
  //   {
  //     id: 3,
  //     platform: 'pinterest',
  //     content: 'Found the perfect centerpiece inspiration!',
  //     image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500',
  //     likes: 156,
  //     date: '1d ago'
  //   }
  // ];

  // const handleSubscribe = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (email) {
  //     setIsSubscribed(true);
  //     setEmail('');
  //     // Here you would typically make an API call to subscribe the user
  //   }
  // };

  return (
<footer className="bg-gradient-to-r from-rose-100 to-pink-100 py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* Animated Heart Logo */}
    <div className="col-span-2 md:col-span-1 flex items-center">
      <div className="text-4xl animate-heartbeat">❤️</div>
      <span className="text-2xl font-bold ml-2">iTheeWed</span>
    </div>
    
    {/* Quick Links with Hover Effects */}
    <div className="space-y-3">
      <h3 className="font-bold text-lg">Navigate</h3>
      <ul className="space-y-2">
        {['Vendors', 'Inspiration', 'Checklist', 'Messages'].map(item => (
          <li key={item} className="hover:translate-x-1 transition-transform">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
    
    {/* Social Proof */}
    <div className="space-y-3">
      <h3 className="font-bold text-lg">#JustMarried</h3>
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_,i) => (
          <div key={i} className="aspect-square bg-white/50 rounded-md"></div>
        ))}
      </div>
    </div>
    
    {/* CTA with Floating Ring */}
    <div className="relative">
      <h3 className="font-bold text-lg">Get Started</h3>
      <button className="mt-4 bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-all relative overflow-hidden">
        Plan Your Wedding
        <span className="absolute -top-2 -right-2 text-xl animate-spin-slow">💍</span>
      </button>
    </div>
  </div>
  
  {/* Microcopy with Heart Animation */}
  <div className="text-center mt-12 text-sm flex justify-center items-center">
    <span className="animate-pulse">❤️</span>
    <span className="mx-2">Made with love for couples</span>
    <span className="animate-pulse delay-100">❤️</span>
  </div>


<div className="bg-[#fff9f9] py-16 px-6 border-t border-rose-100">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-center font-serif text-2xl mb-12">Your Love Story Continues...</h3>
    
    {/* Interactive Timeline */}
    <div className="relative h-32">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-rose-200 transform -translate-y-1/2"></div>
      
      {[
        { icon: '💑', label: 'Met' },
        { icon: '💍', label: 'Engaged' },
        { icon: '🏛️', label: 'Venue' },
        { icon: '👰', label: 'Wedding' },
        { icon: '🌴', label: 'Honeymoon' }
      ].map((item, index) => (
        <div 
          key={index} 
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{ left: `${20 + (index * 15)}%` }}
        >
          <div className="relative group">
            <button className="w-12 h-12 bg-white border-2 border-rose-300 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all">
              {item.icon}
            </button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-rose-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-20 text-sm text-rose-800/70">
      The adventure is just beginning...
    </div>
  </div>
</div>

<div className="bg-white py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-center font-bold text-xl mb-8">Leave Your Mark</h3>
    
    {/* Digital Guestbook */}
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-12">
      {[...Array(18)].map((_, i) => (
        <div 
          key={i} 
          className="aspect-square bg-rose-50 border border-rose-100 rounded flex items-center justify-center cursor-pointer hover:bg-rose-100 transition-colors"
        >
          {i % 5 === 0 && (
            <span className="text-xs text-rose-800/50">
              {['❤️','💐','🍰','🎉','💍'][Math.floor(i/5)]}
            </span>
          )}
        </div>
      ))}
    </div>

    <div className="text-center">
      <button className="px-6 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors flex items-center mx-auto">
        Sign Our Digital Guestbook
        <span className="ml-2">✍️</span>
      </button>
    </div>
  </div>
</div>
<div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-6">
  <div className="max-w-2xl mx-auto text-center">
    <h3 className="font-bold text-2xl mb-4">Create Your Wedding Hashtag</h3>
    
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <div className="flex mb-4">
        <input 
          type="text" 
          placeholder="Your names" 
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors">
          Generate
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="p-3 bg-purple-100 rounded-md text-purple-800 font-medium">
          #SmithAndJonesForever
        </div>
        <div className="p-3 bg-purple-100 rounded-md text-purple-800 font-medium">
          #TheSmithsTieTheKnot
        </div>
      </div>
    </div>

    <p className="text-sm text-purple-800/70">
      Share your special moments with a personalized hashtag!
    </p>
  </div>
</div>
<div className="bg-[#0a1128] text-white py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
    
    {/* Interactive Blue Element */}
    <div className="md:col-span-1 flex justify-center">
      <div className="relative group">
        <div className="w-40 h-40 rounded-full bg-blue-500 flex items-center justify-center text-4xl shadow-xl hover:shadow-blue-400/30 transition-shadow">
          👰
        </div>
        <div className="absolute -inset-4 border-2 border-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping-slow pointer-events-none"></div>
      </div>
    </div>
    
    {/* Wedding Superstition Info */}
    <div className="md:col-span-2">
      <h3 className="text-2xl font-serif mb-4">"Something Blue" Tradition</h3>
      <p className="mb-6 opacity-90">
        The old English rhyme details what a bride should wear: 
        "Something old, something new, something borrowed, something blue."
        Tap the circle above to add your "something blue" to our digital collection.
      </p>
      <button className="px-4 py-2 border border-blue-400 rounded-full text-blue-400 hover:bg-blue-400/10 transition-colors">
        Learn More About Traditions
      </button>
    </div>
  </div>
</div>
<div className="bg-[#fff5f7] py-16 px-6 overflow-hidden">
  <div className="max-w-4xl mx-auto text-center">
    
    {/* Animated Dance Floor */}
    <div className="relative h-48 mb-12">
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-rose-100 to-pink-100 rounded-t-xl"></div>
      
      {/* Dancing Couple */}
      <div className="absolute left-1/2 bottom-12 transform -translate-x-1/2 flex space-x-8">
        <div className="text-4xl animate-bounce-slow">👰</div>
        <div className="text-4xl animate-bounce-slow delay-100">🤵</div>
      </div>
      
      {/* Floating Hearts */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute text-xl text-rose-300 animate-float"
          style={{
            left: `${10 + (i * 15)}%`,
            animationDelay: `${i * 0.5}s`,
            bottom: `${20 + (i % 2) * 20}px`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
    
    <h3 className="text-2xl font-serif mb-4">Keep the Celebration Going!</h3>
    <p className="mb-6 max-w-lg mx-auto">
      Your wedding day is just the beginning. Continue celebrating with our 
      anniversary reminders and memory features.
    </p>
    
    <button className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full hover:shadow-lg transition-all">
      Enable Anniversary Mode
    </button>
  </div>
</div>
</footer>

  );
};


export default test2;