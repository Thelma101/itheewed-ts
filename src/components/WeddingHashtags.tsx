import React, { useState } from 'react';


const WeddingHashtags: React.FC = () => {

  const [names, setNames] = useState('');
  const [generatedHashtags, setGeneratedHashtags] = useState<string[]>([]);

  
  const generateHashtags = () => {
    if (!names.trim()) return;
    
    const nameArray = names.trim().split(/\s+/);
    const firstName = nameArray[0] || '';
    const lastName = nameArray[nameArray.length - 1] || '';
    
    // Create truly creative and warm hashtags for 2025
    const creativeHashtags = [
      `#${firstName}${lastName}Forever`,
      `#The${lastName}sSayIDo`,
      `#${firstName}${lastName}WeddingDay`,
      `#${firstName}${lastName}LoveStory`,
      `#${firstName}${lastName}BigDay`
    ];
    
    // If we have both first and last names, create more creative variations
    if (firstName && lastName && firstName !== lastName) {
      // const shortFirstName = firstName.slice(0, 3);
      // const shortLastName = lastName.slice(0, 3);
      
      creativeHashtags[0] = `#${firstName}${lastName}Forever`;
      creativeHashtags[1] = `#The${lastName}sSayIDo`;
      creativeHashtags[2] = `#${firstName}${lastName}WeddingDay`;
      creativeHashtags[3] = `#${firstName}${lastName}LoveStory`;
      creativeHashtags[4] = `#${firstName}${lastName}BigDay`;
    }
    
    setGeneratedHashtags(creativeHashtags);
  };

  return (
<footer className="bg-gradient-to-r from-rose-100 to-pink-100 py-12 px-6">

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
          value={names}
          onChange={(e) => setNames(e.target.value)}
          className="flex-1 px-4 py-2 text-primary-800/70 rounded-l-md focus:outline-none focus:ring-2 focus:ring-rose-100"
        />
        <button 
          onClick={generateHashtags}
          disabled={!names.trim()}
          className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary transition-colors font-thin disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate
        </button>
      </div>
      
      <div className="space-y-2">
        {generatedHashtags.length > 0 ? (
          generatedHashtags.map((hashtag, index) => (
            <div key={index} className="p-3 bg-primary rounded-md text-white font-thin">
              {hashtag}
            </div>
          ))
        ) : (
          <>
            <div className="p-3 bg-primary rounded-md text-white font-thin ">
              #SmithAndJonesForever
            </div>
            <div className="p-3 bg-primary rounded-md text-white font-thin ">
              #TheSmithsTieTheKnot
            </div>
          </>
        )}
      </div>
    </div>

    <p className="text-sm text-primary-800/70">
      Share your special moments with a personalized hashtag!
    </p>
  </div>
  </div>
</div>
</footer>

  );
};


export default WeddingHashtags;