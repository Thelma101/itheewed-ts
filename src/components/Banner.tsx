
// const Banner: React.FC = () => {
//     return (
//         <>
//             <section className="relative w-full h-[713px] max-w-[1441px] mx-auto mt-[2px]">
//                 <div className="banner-bg"></div>
//                 <div className="absolute inset-0 bg-[#0E292B] opacity-80"></div>
//                 <div className="font-family-two relative z-10 flex items-top justify-center pt-12 h-full text-white">
//                     <h1 className=" text-7xl leading-[130px]">Wedding planning at your fingertips.</h1>
//                 </div>
//                 <div className="absolute bottom-0 inset-x-0 flex items-top top-48 justify-center w-full h-full text-white">
//                     <h3 className="text-4xl font-normal leading-[50px]">itheewed is the number 1 market place for couples and vendors. </h3>
//                 </div>
//             </section>


//             {/* FORM */}
//             <section className="flex md:flex-row w-full absolute z-10 top-96 text-white px-8 py-10">
//                 {/* Left form container */}
//                 <div className="w-1/2 flex flex-col items-start justify-start">
//                     <form className="flex flex-col gap-6 w-full max-w-lg">
//                         <input
//                             type="text"
//                             placeholder="Phone number or email"
//                             className="w-full h-[60px] border border-[#E0E0E0] px-4 text-black"
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             className="w-full h-[60px] border border-[#E0E0E0] px-4 text-black"
//                         />
//                         <button className="w-full h-[60px] bg-primary text-white font-bold">Sign Up</button>
//                         <p className="text-white">
//                             Already have an account?{' '}
//                             <span className="text-primary cursor-pointer underline">Sign in</span>
//                         </p>
//                     </form>
//                 </div>

//                 <div className="w-1/2 flex flex-col items-center justify-center gap-4 text-red-500">
//                     <div>1</div>
//                     <div>2</div>
//                     <div>3</div>
//                     <div>4</div>
//                 </div>
//             </section>

//         </>
//     );
// };

// export default Banner;

import React, { useEffect, useState } from 'react';
import bannerImg1 from "@/features/Banner/assets/banner-img-1.png";
import bannerImg2 from "@/features/Banner/assets/banner-img-2.png";
import bannerImg3 from "@/features/Banner/assets/banner-img-3.png";
import bannerImg4 from '@/features/Banner/assets/banner-img-4.png';

const bannerImages = [bannerImg1, bannerImg2, bannerImg3, bannerImg4]

const Banner: React.FC = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index) => (index + 1) % bannerImages.length)
    const prev = () => setIndex((index) => (index - 1) % bannerImages.length)
    return (
        <>
            {/* Banner Section */}
            <section className="relative w-full h-[500px] md:h-[713px] max-w-full mx-auto mt-[2px] px-4 sm:px-6 lg:px-8">
                <div className="banner-bg"></div>
                <div className="absolute inset-0 bg-[#0E292B] opacity-80"></div>

                <div className="relative z-10 flex items-start justify-center pt-24 md:pt-20 h-full text-white text-center px-2 pb-40">
                    <h1 className="sm:text-2xl text-3xl sm md:text-4xl lg:text-7xl leading-[1.2] md:leading-[130px] font-primary3">
                        Wedding planning at your fingertips.
                    </h1>
                </div>

                <div className="absolute bottom-0 inset-x-0 flex items-start justify-center pt-52 md:pt-48 w-full h-full text-white text-center">
                    <h3 className=" sm:text-xl md:text-2xl lg:text-4xl font-normal leading-[1.3] md:leading-[50px] max-w-[90%] md:max-w-[80%]">
                        {/* i thee wed is the number 1 market place for couples and vendors.  */}
                        Discover vendors. Book effortlessly. Cherish forever.
                    </h3>
                </div>
            </section>

            {/* Form Section */}
            <section className="flex flex-col md:flex-row w-full max-w-full absolute z-10 top-60 md:top-80 text-white px-4 sm:px-6 lg:px-8 py-6 sm:py-10 left-1/2 transform -translate-x-1/2">

                <div className="w-full flex flex-col md:flex-row px-4 md:px-12 py-12 relative overflow-hidden">
                    {/* Left Form */}
                    <div className=" w-full md:w-1/2 flex flex-col items-center justify-start text-xl z-10">
                        <form className="flex flex-col gap-4 sm:gap-6 w-full max-w-lg py-11 md:pr-20">
                            <input
                                type="text"
                                placeholder="Phone number or email"
                                className="w-full h-10 md:h-[50px] border border-[#E0E0E0] px-4 text-black"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full h-10 md:h-[50px] border border-[#E0E0E0] px-4 text-black"
                            />
                            <button className="w-full h-10 md:h-[50px] bg-primary text-white font-bold">
                                Sign Up
                            </button>
                            <p className="text-white text-sm md:text-lg text-center md:text-left">
                                Already have an account?{' '}
                                <span className="text-primary cursor-pointer hover:underline font-bold">Sign in</span>
                            </p>
                        </form>
                    </div>



                    {/* BANNER IMAGES */}

                    {/* Right Image Group */}
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
                    <div className="md:hidden max-w-md mx-auto relative w-full">
                        <div className="max-w-full overflow-hidden">
                            <img
                                src={bannerImages[index]}
                                alt="Mobile Banner"
                                className="w-full h-full object-cover transition-transform duration-700"
                            />
                        </div>
                        <div className="flex justify-between mt-[-60px] px-4">
                            <button onClick={prev} className="px-4 py-2 bg-[#00838F] text-white rounded">Prev</button>
                            <button onClick={next} className="px-4 py-2 bg-[#00838F] text-white rounded">Next</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Banner;
