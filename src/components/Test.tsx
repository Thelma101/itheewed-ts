// ZStackImages.tsx
import { useState } from 'react';
import bannerImg1 from "@/features/Banner/assets/banner-img-1.png";
import bannerImg2 from "@/features/Banner/assets/banner-img-2.png";
import bannerImg3 from "@/features/Banner/assets/banner-img-3.png";
import bannerImg4 from '@/features/Banner/assets/banner-img-4.png';

// const images = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];


export default function Test() {

    const images = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];

    // export default function ResponsiveBanner() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % images.length);
    const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <>
            {/* Desktop Layout */}
            <div className="hidden md:flex w-full min-h-[800px] relative items-center justify-center">
                {/* Top */}
                <div className="absolute top-[-28px] left-[56%] -translate-x-1/2 w-[520px] h-[414px] bg-white border border-[#00838F] shadow-md z-10">
                    <img src={bannerImg1} className="w-full h-[calc(100%-30px)] object-cover mt-[24px]" alt="Top" />
                </div>
                {/* Left */}
                <div className="absolute top-[200px] left-[calc(35%-260px)] w-[327px] h-[292px] bg-white border border-[#00838F] shadow-md z-20">
                    <img src={bannerImg2} className="w-full h-[calc(100%-20px)] object-cover mt-[10px]" alt="Left" />
                </div>
                {/* Right */}
                <div className="absolute top-[220px] left-[calc(50%+200px)] w-[263px] h-[234px] bg-white border border-[#00838F] shadow-md z-20">
                    <img src={bannerImg4} className="w-full h-[calc(100%-20px)] object-cover mt-[10px]" alt="Right" />
                </div>
                {/* Bottom */}
                <div className="absolute top-[280px] left-[50%] -translate-x-1/2 w-[327px] h-[292px] bg-white border border-[#00838F] shadow-md z-30">
                    <img src={bannerImg3} className="w-full h-[calc(100%-20px)] object-cover mt-[10px]" alt="Bottom" />
                </div>
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden w-full max-w-md mx-auto relative">
                <div className="h-[300px] overflow-hidden rounded-lg">
                    <img
                        src={images[index]}
                        alt="Mobile Banner"
                        className="w-full h-full object-cover transition-transform duration-700"
                    />
                </div>
                <div className="flex justify-between mt-4 px-4">
                    <button onClick={prev} className="px-4 py-2 bg-[#00838F] text-white rounded">Prev</button>
                    <button onClick={next} className="px-4 py-2 bg-[#00838F] text-white rounded">Next</button>
                </div>
            </div>
        </>
    );
}

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