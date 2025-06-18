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

const WeddingHashtags = () => {
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
  {/* <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"> */}
    



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

  <div className="max-w-2xl mx-auto text-center">
    <h3 className="font-bold text-2xl mb-4">Create Your Wedding Hashtag</h3>
    
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <div className="flex mb-4">
        <input 
          type="text" 
          placeholder="Your names" 
          className="flex-1 px-4 py-2 text-primary-800/70 rounded-l-md focus:outline-none focus:ring-2 focus:ring-rose-100"
        />
        <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary transition-colors font-thin">
          Generate
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="p-3 bg-primary rounded-md text-white font-thin ">
          #SmithAndJonesForever
        </div>
        <div className="p-3 bg-primary rounded-md text-white font-thin ">
          #TheSmithsTieTheKnot
        </div>
      </div>
    </div>

    <p className="text-sm text-primary-800/70">
      Share your special moments with a personalized hashtag!
    </p>
  </div>


  </div>
</div>


{/* <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-6"> */}

{/* </div> */}


</footer>

  );
};


export default WeddingHashtags;