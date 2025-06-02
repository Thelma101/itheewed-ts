
import React, { useEffect } from 'react';
import { useState } from 'react';
import wedWebImg1 from "@/features/WeddingWebsite/assets/websiteSlide1.svg";
import wedWebImg2 from "@/features/WeddingWebsite/assets/websiteSlide2.svg";
import wedWebImg3 from "@/features/WeddingWebsite/assets/websiteSlide3.svg";

import { motion, AnimatePresence } from "framer-motion";


const images = [wedWebImg1, wedWebImg2, wedWebImg3];



// const images = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];

export function Test() {

    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval((index) => {
    //         setIndex((index + 1) % images.length)
    //     }, 5000)
    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        const interval = setInterval((index) => {
            setIndex((index + 1) % images.length)
        }, 4000)
        return () => clearInterval(interval);
    }, []);

    const prevIndex = (index - 1 + images.length) % images.length;
    const nextIndex = (index + 1 + images.length);

    return (
        <>
            <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
                <motion.img
                    key={`left-${images[prevIndex]}`}
                    src={images[prevIndex]}
                    initial={{ scale: 0.9, x: "-120%", opacity: 0.4 }}
                    animate={{ scale: 0.9, x: "-70%", opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute w-48 h-64 object-cover rounded-xl shadow-lg z-10"
                />
                <AnimatePresence initial={false}>
                    <motion.img
                        key={`center-${images[index]}`}
                        src={images[index]}
                        initial={{ scale: 0.8, opacity: 0, x: 300 }}
                        animate={{ scale: 1, opacity: 1, x: 0 }}
                        exit={{ scale: 0.8, opacity: 0, x: -300 }}
                        transition={{ duration: 0.8 }}
                        className="absolute w-64 h-80 object-cover rounded-xl shadow-2xl z-20"
                    />
                </AnimatePresence>
                <motion.img
                    key={`right-${images[nextIndex]}`}
                    src={images[nextIndex]}
                    initial={{ scale: 0.9, x: "120%", opacity: 0.4 }}
                    animate={{ scale: 0.9, x: "70%", opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute w-48 h-64 object-cover rounded-xl shadow-lg z-10"
                />
            </div>
            {/* <div className="absolute bottom-4 flex gap-4">
                <button onClick={prevIndex} className="bg-pink-600 text-white px-4 py-1 rounded">Prev</button>
                <button onClick={nextIndex} className="bg-pink-600 text-white px-4 py-1 rounded">Next</button>
            </div> */}
        </>
    )

    //   const next = () => setIndex((index + 1) % images.length);
    //   const prev = () => setIndex((index - 1 + images.length) % images.length);

    //   return (
    //     <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
    //       <AnimatePresence initial={false}>
    //         <motion.img
    //           key={index}
    //           src={images[index]}
    //           initial={{ x: 300, opacity: 0 }}
    //           animate={{ x: 0, opacity: 1 }}
    //           exit={{ x: -300, opacity: 0 }}
    //           transition={{ duration: 0.6 }}
    //           className="absolute w-64 h-64 object-cover rounded shadow-xl"
    //         />
    //       </AnimatePresence>
    //       <div className="absolute bottom-4 flex gap-4">
    //         <button onClick={prev} className="bg-pink-600 text-white px-4 py-1 rounded">Prev</button>
    //         <button onClick={next} className="bg-pink-600 text-white px-4 py-1 rounded">Next</button>
    //       </div>
    //     </div>
    //   );
}


export default Test;


// BANNER
//                     <div className=" hidden md:flex w-full md:w-1/2 flex flex-col md:block items-center justify-center relative min-h-[500px] md:min-h-[800px]">
//                         {/* Top Image - Stacked on mobile */}
//                         <div className="md:absolute relative mb-6 md:mb-0 md:top-[-28px] md:left-[56%] md:-translate-x-1/2 w-full md:w-[520px] max-w-[90vw] h-[300px] md:h-[414px] bg-white border border-[#00838F] shadow-md z-10">
//                             <img
//                                 src={bannerImg1}
//                                 className="w-full h-[calc(100%-30px)] object-cover mx-auto mt-[15px] md:mt-[24px] px-2 md:px-0"
//                                 alt="Top"
//                             />
//                         </div>

//                         {/* Left Image - Stacked on mobile */}
//                         <div className="md:absolute relative mb-6 md:mb-0 md:top-[200px] md:left-[calc(35%-260px)] w-full md:w-[327px] max-w-[90vw] h-[250px] md:h-[292px] bg-white border border-[#00838F] shadow-md z-20">
//                             <img
//                                 src={bannerImg2}
//                                 className="w-full h-[calc(100%-20px)] object-cover mx-auto mt-[10px] px-2 md:px-0"
//                                 alt="Left"
//                             />
//                         </div>

//                         {/* Right Image - Stacked on mobile */}
//                         <div className="md:absolute relative mb-6 md:mb-0 md:top-[220px] md:left-[calc(50%+200px)] w-full md:w-[263px] max-w-[90vw] h-[220px] md:h-[234px] bg-white border border-[#00838F] shadow-md z-20">
//                             <img
//                                 src={bannerImg4}
//                                 className="w-full h-[calc(100%-20px)] object-cover mx-auto mt-[10px] px-2 md:px-0"
//                                 alt="Right"
//                             />
//                         </div>

//                         {/* Bottom Image - Stacked on mobile */}
//                         <div className="md:absolute relative md:top-[280px] md:left-[50%] md:-translate-x-1/2 w-full md:w-[327px] max-w-[90vw] h-[250px] md:h-[292px] bg-white border border-[#00838F] shadow-md z-30">
//                             <img
//                                 src={bannerImg3}
//                                 className="w-full h-[calc(100%-20px)] object-cover mx-auto mt-[10px] px-2 md:px-0"
//                                 alt="Bottom"
//                             />
//                         </div>
//                     </div>


//                     <div className="md:hidden relative w-full max-w-md mx-auto">
//                         <div className="overflow-hidden relative h-64 rounded-lg">
//                             <img
//                                 src={bannerImages[index]}
//                                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
//                                 alt="carousel-img"
//                             />
//                         </div>
//                         <div className=" flex justify-between mt-4">
//                             <button onClick={prev} className="px-4 py-2 bg-primary text-white rounded">Prev</button>
//                             <button onClick={next} className="px-4 py-2 bg-primary text-white rounded">Next</button>
//                         </div>
//                     </div>


// // export default Test;


// {/* </h1>

//                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 tracking-tight"> */}
//                         {/* First Row */}
//                         {/* <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite]">i</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.1s]">n</span>
//                         <span className="text-[#EB1948] inline-block"> </span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.2s]">o</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.3s]">n</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.4s]">e</span>
//                         <span className="text-[#EB1948] inline-block"> </span> */}

//                         <br className="md:hidden" />

//                         {/* Second Row */}
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.1s]">m</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.2s]">a</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.3s]">g</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.4s]">i</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.5s]">c</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.6s]">a</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.7s]">l</span>
//                         <span className="text-[#EB1948] inline-block"></span>
//                         <span className="text-[#EB1948] inline-block"></span>

//                         <br className="md:hidden" />

//                         {/* Third Row */}
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.8s]">p</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_0.9s]">l</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_1s]">a</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_1.1s]">c</span>
//                         <span className="text-[#EB1948] inline-block animate-[bounce_1s_infinite_1.2s]">e</span>
//                         {/* <span className="relative inline-block animate-[pulse_1.5s_infinite] ml-2"> */}
//                             <span className="absolute text-[#EB1948] animate-beat">❤</span>
//                             {/* <span className="absolute text-red-700 animate-beat-delay">❤</span> */}
//                         {/* </span> */}
//                     </h1>