import React, { useState } from 'react';

const steps = [
  {
    title: "Create Account",
    summary: "Your dashboard, ready in seconds.",
    description: "Unlock your personal wedding dashboard in seconds. Everything you need, all in one place."
  },
  {
    title: "Checklist & Guests",
    summary: "Personalized tasks. Effortless tracking.",
    description: "Get a custom planning checklist and manage guests, RSVPs, and meal choices with ease."
  },
  {
    title: "Book Vendors",
    summary: "Find and book your favorites.",
    description: "Browse, compare, and book top-rated vendors that fit your style and budget."
  },
  {
    title: "Website & Registry",
    summary: "Share details and gifts.",
    description: "Share your story on your personalized website, collect RSVPs, and build a registry guests will love."
  },
  {
    title: "Share & Celebrate",
    summary: "Keep everyone in sync.",
    description: "Keep everyone in sync, from your partner, to your family, and your wedding party."
  }
];

const HowItWorksWeb2: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  // For mobile: tap toggles expansion. For desktop: hover expands.
  const handleCardClick = (index: number) => {
    if (window.innerWidth < 768) {
      setExpanded(expanded === index ? null : index);
    }
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black font-primary mb-2 text-primary flex items-center justify-center gap-2">
          <span className="text-3xl md:text-4xl">💍</span> How It Works
        </h2>
        <p className="text-base md:text-lg text-primary mb-10 font-thin">
          Plan your dream wedding, beautifully.
        </p>
        {/* Masonry/brick layout */}
        <div className="columns-1 sm:columns-2 gap-6 [column-fill:_balance]"><div className="w-full flex flex-col gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              tabIndex={0}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => window.innerWidth >= 768 && setExpanded(index)}
              onMouseLeave={() => window.innerWidth >= 768 && setExpanded(null)}
              className={`break-inside-avoid mb-6 bg-white border-l-4 border-primary rounded-xl shadow-lg p-6 flex flex-col items-start text-left transition-all duration-300 hover:shadow-xl cursor-pointer group focus:outline-none ${expanded === index ? 'z-10' : ''}`}
              style={{ minHeight: 120 }}
            >
              {/* Step number in colored circle */}
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg shadow-md mr-3">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-primary leading-tight font-primary">
                  {step.title}
                </h3>
              </div>
              <div className="w-full">
                <p className={`text-sm text-gray-700 font-light leading-relaxed transition-all duration-300 ${expanded === index ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
                  {step.summary}
                </p>
                <div
                  className={`transition-all duration-300 ease-in-out ${expanded === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-sm text-gray-700 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              <span className={`absolute top-3 right-4 text-xs text-primary font-bold transition-opacity duration-300 ${expanded === index ? 'opacity-100' : 'opacity-0'}`}>More</span>
            </div>
          ))}
        </div></div>
        <button
          className="mt-14 px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-primary-dark transition"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HowItWorksWeb2;
 