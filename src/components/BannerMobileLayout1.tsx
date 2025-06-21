import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bannerImg1 from "@/features/Banner/assets/banner-img-1.png";
import bannerImg2 from "@/features/Banner/assets/banner-img-2.png";
import bannerImg3 from "@/features/Banner/assets/banner-img-3.png";
import bannerImg4 from '@/features/Banner/assets/banner-img-4.png';

const bannerImages = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];

const BannerMobileLayout1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + bannerImages.length) % bannerImages.length);
    };

    return (
        <section className="relative w-full h-screen max-w-full mx-auto">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100"></div>
            
            {/* Header Section */}
            <div className="relative z-10 pt-16 px-6 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight mb-4"
                >
                    Wedding planning at your fingertips
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg text-gray-600 max-w-md mx-auto"
                >
                    Discover vendors. Book effortlessly. Cherish forever.
                </motion.p>
            </div>

            {/* Mobile Image Carousel */}
            <div className="relative flex-1 flex items-center justify-center px-4 mt-8">
                <div className="relative w-full max-w-sm h-96">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(_, info) => {
                                const swipe = swipePower(info.offset.x, info.velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full h-full"
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={bannerImages[currentIndex]}
                                    alt={`Banner ${currentIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                
                                {/* Image indicator */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                    <div className="flex space-x-2">
                                        {bannerImages.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                    index === currentIndex 
                                                        ? 'bg-white scale-125' 
                                                        : 'bg-white/50'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-3">
                    {bannerImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'bg-rose-500 scale-125' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Form Section */}
            <div className="relative z-10 px-6 pb-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                >
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Phone number or email"
                            className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                        />
                        <button className="w-full h-12 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg">
                            Sign Up
                        </button>
                        <p className="text-center text-gray-600 text-sm">
                            Already have an account?{' '}
                            <span className="text-rose-500 font-semibold cursor-pointer hover:underline">
                                Sign in
                            </span>
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default BannerMobileLayout1; 