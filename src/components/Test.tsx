import React, { useRef, useEffect } from 'react';

const Test = () => {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of element is visible
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
    };
  }}, []);

  const text = "magical place ❤";
  const spaceWidth = "w-2 md:w-4";

  return (
    <div 
      ref={headingRef}
      className="w-full max-w-4xl flex flex-col justify-center items-center mx-auto"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-center">
        {/* First Line - Static */}
        <span className="block">
          All your vendors, ideas, and inspiration — in one
        </span>
        
        {/* Second Line - Scroll-triggered typing */}
        <span className="block mt-2 md:mt-4 min-h-[1.2em]">
          {isVisible && (
            <span className="inline-block">
              {text.split('').map((char, index) => (
                <span
                  key={index}
                  className={`
                    text-[#EB1948] 
                    ${char === ' ' ? spaceWidth : 'inline-block'}
                    animate-appear
                  `}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          )}
        </span>
      </h1>
    </div>
  );
};

export default Test;