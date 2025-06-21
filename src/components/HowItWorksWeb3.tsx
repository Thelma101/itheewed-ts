import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const HowItWorksWeb3 = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const steps = [
        {
            step: 1,
            title: "Create Your Account",
            description: "Sign up in seconds and start your wedding planning journey with our simple registration process.",
            icon: "👰‍♀️",
            color: "from-rose-500 to-pink-500",
            bgColor: "bg-gradient-to-br from-rose-50 to-pink-50"
        },
        {
            step: 2,
            title: "Discover Vendors",
            description: "Browse thousands of trusted vendors in your area, from photographers to florists and everything in between.",
            icon: "🔍",
            color: "from-purple-500 to-indigo-500",
            bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50"
        },
        {
            step: 3,
            title: "Book & Plan",
            description: "Secure your dream vendors and plan your perfect day with our intuitive booking and planning tools.",
            icon: "📅",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
        },
        {
            step: 4,
            title: "Celebrate Together",
            description: "Share your special moments with family and friends, creating memories that last a lifetime.",
            icon: "💒",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, steps.length]);

    const radius = 300; // Radius of the circle
    const centerX = 400;
    const centerY = 300;

    return (
        <section className="hidden md:block py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-rose-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
                <motion.div
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                        duration: 30, 
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-rose-100/20 to-pink-100/20 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-6xl font-serif text-gray-800 mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your journey to the perfect wedding in 4 simple steps
                    </p>
                </motion.div>

                {/* Circular Layout Container */}
                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Central Hub */}
                    <motion.div
                        animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute w-32 h-32 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center z-20"
                    >
                        <div className="text-white text-4xl">💍</div>
                    </motion.div>

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ width: '800px', height: '600px' }}>
                        {steps.map((_, index) => {
                            const angle = (index * 90) * (Math.PI / 180);
                            const x1 = centerX;
                            const y1 = centerY;
                            const x2 = centerX + radius * Math.cos(angle);
                            const y2 = centerY + radius * Math.sin(angle);
                            
                            return (
                                <motion.line
                                    key={index}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="url(#gradient)"
                                    strokeWidth="3"
                                    strokeDasharray="10,5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                />
                            );
                        })}
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ec4899" />
                                <stop offset="50%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Step Cards */}
                    {steps.map((step, index) => {
                        const angle = (index * 90) * (Math.PI / 180);
                        const x = centerX + radius * Math.cos(angle);
                        const y = centerY + radius * Math.sin(angle);
                        const isActive = activeStep === index;

                        return (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    x: x - 150, // Center the card
                                    y: y - 100
                                }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ 
                                    scale: 1.1,
                                    z: 50
                                }}
                                onClick={() => {
                                    setActiveStep(index);
                                    setIsAutoPlaying(false);
                                }}
                                className="absolute w-80 cursor-pointer"
                            >
                                <motion.div
                                    animate={{ 
                                        scale: isActive ? 1.05 : 1,
                                        y: isActive ? -10 : 0,
                                        boxShadow: isActive 
                                            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                                            : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className={`${step.bgColor} rounded-3xl p-6 shadow-lg border border-white/50 backdrop-blur-sm relative overflow-hidden`}
                                >
                                    {/* Step Number */}
                                    <motion.div
                                        animate={{ 
                                            scale: isActive ? 1.2 : 1,
                                            rotate: isActive ? 5 : 0
                                        }}
                                        className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4 relative z-10`}
                                    >
                                        {step.step}
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                        animate={{ 
                                            scale: isActive ? 1.3 : 1,
                                            rotate: isActive ? 10 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="text-5xl mb-4 text-center"
                                    >
                                        {step.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Active Indicator */}
                                    {isActive && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center"
                                        >
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </motion.div>
                                    )}

                                    {/* Glow Effect */}
                                    <motion.div
                                        animate={{ 
                                            opacity: isActive ? 0.3 : 0
                                        }}
                                        className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20 rounded-3xl blur-xl`}
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center space-x-4 mt-12">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 text-gray-700 font-medium"
                    >
                        {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
                    </motion.button>
                    
                    <div className="flex space-x-2">
                        {steps.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    setActiveStep(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === activeStep 
                                        ? 'bg-rose-500 scale-125' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-5 rounded-3xl text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
                    >
                        Start Your Wedding Journey
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksWeb3; 