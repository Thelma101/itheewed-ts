import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import bannerImg1 from "@/features/Banner/assets/banner-img-1.png";
import bannerImg2 from "@/features/Banner/assets/banner-img-2.png";
import bannerImg3 from "@/features/Banner/assets/banner-img-3.png";
import bannerImg4 from '@/features/Banner/assets/banner-img-4.png';

const bannerImages = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];

const BannerMobileLayout2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { scrollY } = useScroll();
    
    const y1 = useTransform(scrollY, [0, 300], [0, -50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const y3 = useTransform(scrollY, [0, 300], [0, -150]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full min-h-screen max-w-full mx-auto overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200">
                <motion.div 
                    animate={{ 
                        backgroundPosition: ['0% 0%', '100% 100%'],
                        backgroundSize: ['100% 100%', '120% 120%']
                    }}
                    transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                    }}
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(244, 114, 182, 0.3) 0%, transparent 50%)'
                    }}
                />
            </div>

            {/* Floating Elements */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"
            />
            <motion.div 
                style={{ y: y2 }}
                className="absolute top-40 right-8 w-16 h-16 bg-pink-200/30 rounded-full blur-xl"
            />
            <motion.div 
                style={{ y: y3 }}
                className="absolute bottom-40 left-8 w-24 h-24 bg-rose-200/40 rounded-full blur-xl"
            />

            {/* Header Section */}
            <div className="relative z-10 pt-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-6xl font-serif text-gray-800 leading-tight mb-6">
                        Wedding planning at your fingertips
                    </h1>
                    <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
                        Discover vendors. Book effortlessly. Cherish forever.
                    </p>
                </motion.div>
            </div>

            {/* Stacked Card Carousel */}
            <div className="relative flex items-center justify-center px-4 mt-12 mb-8">
                <div className="relative w-full max-w-sm h-[500px]">
                    {bannerImages.map((image, index) => {
                        const isActive = index === currentIndex;
                        const isNext = index === (currentIndex + 1) % bannerImages.length;
                        const isPrev = index === (currentIndex - 1 + bannerImages.length) % bannerImages.length;
                        
                        let zIndex = 0;
                        let scale = 0.8;
                        let opacity = 0.3;
                        let y = 40;
                        let rotation = 0;

                        if (isActive) {
                            zIndex = 30;
                            scale = 1;
                            opacity = 1;
                            y = 0;
                        } else if (isNext) {
                            zIndex = 20;
                            scale = 0.9;
                            opacity = 0.7;
                            y = 20;
                            rotation = 5;
                        } else if (isPrev) {
                            zIndex = 20;
                            scale = 0.9;
                            opacity = 0.7;
                            y = 20;
                            rotation = -5;
                        }

                        return (
                            <motion.div
                                key={index}
                                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                                animate={{ 
                                    scale, 
                                    opacity, 
                                    y, 
                                    rotateY: rotation,
                                    zIndex 
                                }}
                                transition={{ 
                                    duration: 0.6, 
                                    type: "spring",
                                    stiffness: 300 
                                }}
                                className="absolute inset-0 cursor-pointer"
                                onClick={() => setCurrentIndex(index)}
                            >
                                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
                                    <img
                                        src={image}
                                        alt={`Banner ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    
                                    {/* Card Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold mb-2">
                                                Wedding Inspiration {index + 1}
                                            </h3>
                                            <p className="text-sm opacity-90">
                                                Beautiful moments captured forever
                                            </p>
                                        </div>
                                    </div>

                                    {/* Active indicator */}
                                    {isActive && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full shadow-lg"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="relative z-10 px-6 mb-8">
                <div className="w-full bg-white/30 rounded-full h-1 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentIndex + 1) / bannerImages.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
                    />
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>{currentIndex + 1} of {bannerImages.length}</span>
                    <span>Wedding Gallery</span>
                </div>
            </div>

            {/* Form Section */}
            <div className="relative z-10 px-6 pb-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20"
                >
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                            Start Your Journey
                        </h3>
                        <p className="text-gray-600">
                            Join thousands of happy couples
                        </p>
                    </div>
                    
                    <form className="space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Phone number or email"
                                className="w-full h-14 px-6 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent bg-white/80 backdrop-blur-sm"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full h-14 px-6 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent bg-white/80 backdrop-blur-sm"
                            />
                        </div>
                        <button className="w-full h-14 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-semibold rounded-xl hover:from-rose-600 hover:via-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg transform hover:scale-105">
                            Get Started Today
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

export default BannerMobileLayout2; 