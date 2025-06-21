import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HowItWorksWeb2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const steps = [
        {
            step: 1,
            title: "Create Your Account",
            description: "Sign up in seconds and start your wedding planning journey with our simple registration process.",
            icon: "👰‍♀️",
            color: "from-rose-500 to-pink-500",
            delay: 0
        },
        {
            step: 2,
            title: "Discover Vendors",
            description: "Browse thousands of trusted vendors in your area, from photographers to florists and everything in between.",
            icon: "🔍",
            color: "from-purple-500 to-indigo-500",
            delay: 0.2
        },
        {
            step: 3,
            title: "Book & Plan",
            description: "Secure your dream vendors and plan your perfect day with our intuitive booking and planning tools.",
            icon: "📅",
            color: "from-blue-500 to-cyan-500",
            delay: 0.4
        },
        {
            step: 4,
            title: "Celebrate Together",
            description: "Share your special moments with family and friends, creating memories that last a lifetime.",
            icon: "💒",
            color: "from-green-500 to-emerald-500",
            delay: 0.6
        }
    ];

    return (
        <section ref={containerRef} className="hidden md:block py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-rose-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        duration: 20, 
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full opacity-30 blur-3xl"
                />
                <motion.div
                    animate={{ 
                        rotate: -360,
                        scale: [1, 0.9, 1]
                    }}
                    transition={{ 
                        duration: 25, 
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-30 blur-3xl"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
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

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-200 via-purple-200 via-blue-200 to-green-200 transform -translate-x-1/2"></div>
                    
                    {/* Steps */}
                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: step.delay }}
                                viewport={{ once: true }}
                                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Card */}
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.05,
                                        rotateY: index % 2 === 0 ? 5 : -5
                                    }}
                                    className={`w-96 bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden group`}
                                >
                                    {/* Floating Elements */}
                                    <motion.div
                                        animate={{ 
                                            y: [0, -10, 0],
                                            rotate: [0, 5, 0]
                                        }}
                                        transition={{ 
                                            duration: 4, 
                                            repeat: Infinity,
                                            delay: step.delay
                                        }}
                                        className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                                    />
                                    
                                    {/* Step Number */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-6 relative z-10`}
                                    >
                                        {step.step}
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                        animate={{ 
                                            y: [0, -5, 0],
                                            scale: [1, 1.05, 1]
                                        }}
                                        transition={{ 
                                            duration: 3, 
                                            repeat: Infinity,
                                            delay: step.delay
                                        }}
                                        className="text-7xl mb-6 text-center"
                                    >
                                        {step.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Glow Effect */}
                                    <motion.div
                                        animate={{ 
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{ 
                                            duration: 2, 
                                            repeat: Infinity,
                                            delay: step.delay
                                        }}
                                        className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20 rounded-3xl blur-xl`}
                                    />
                                </motion.div>

                                {/* Timeline Dot */}
                                <motion.div
                                    whileHover={{ scale: 1.5 }}
                                    className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-4 border-rose-300 z-20"
                                >
                                    <motion.div
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{ 
                                            duration: 2, 
                                            repeat: Infinity,
                                            delay: step.delay
                                        }}
                                        className={`w-full h-full bg-gradient-to-r ${step.color} rounded-full`}
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
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

export default HowItWorksWeb2; 