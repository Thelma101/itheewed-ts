import { motion } from 'framer-motion';
import { useState } from 'react';

const HowItWorksWeb1 = () => {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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

    return (
        <section className="hidden md:block pt-20 pb-32 px-8 bg-gradient-to-br from-gray-50 to-white font-primary">
            {/* <div className="max-w-7xl mx-auto"> */}
            <div className="flex flex-col ax-w-4xl ">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {/* <h2 className="text-5xl  text-gray-800 mb-6"> */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">

                        How It Works
                    </h1>
                    <p className=" text-primary-red font-thin max-w-2xl mx-auto p-3">
                        Your journey to the perfect wedding in 4 simple steps
                    </p>
                </motion.div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-rose-100 via-purple-100 via-blue-100 to-green-100 transform -translate-y-1/2 z-0"></div>

                    {/* Steps */}
                    <div className="relative z-10 grid grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                onHoverStart={() => setHoveredStep(step.step)}
                                onHoverEnd={() => setHoveredStep(null)}
                                className="relative group"
                            >
                                {/* Card */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        y: -10
                                    }}
                                    className={`${step.bgColor} rounded-3xl p-8 shadow-lg border border-white/50 backdrop-blur-sm relative overflow-hidden`}
                                >
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                                    </div>

                                    {/* Step Number */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg mb-6 relative z-10`}
                                    >
                                        {step.step}
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                        animate={{
                                            scale: hoveredStep === step.step ? 1.2 : 1,
                                            rotate: hoveredStep === step.step ? 10 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="text-6xl mb-6 text-center"
                                    >
                                        {step.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Hover Effect */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredStep === step.step ? 1 : 0 }}
                                        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"
                                    />
                                </motion.div>

                                {/* Connection Arrow */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        animate={{
                                            x: hoveredStep === step.step ? 10 : 0,
                                            opacity: hoveredStep === step.step ? 1 : 0.5
                                        }}
                                        className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                                    >
                                        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}

                    <div className="flex flex-col mx-auto my-20 gap-10 font-primary font-bold justify-center items-center">
                        <button
                            type="button"
                            className="px-14 py-4 justify-center items-center text-white font-bold leading-7 border border-primary bg-primary hover:bg-opacity-90 transition-colors"
                        >
                           Start Your Wedding Journey
                        </button>
                    </div>
            </div>
        </section>
    );
};

export default HowItWorksWeb1; 