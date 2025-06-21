import messagePic from '@/features/ChatwithVendor/assets/MessagesPic.png'
import React from 'react';
import HowItWorksWeb1 from './HowItWorksWeb1';
import HowItWorksWeb2 from './HowItWorksWeb2';



const Category: React.FC = () => {
    return (
        <>
            <section className="container w-full mx-auto flex justify-center items-center text-center mt-[350px] md:mt-56 px-4 md:py-20">
                <div className="w-full flex flex-col justify-center items-center mx-auto">
                    <div className="flex ax-w-4xl ">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                            {/* Everything Marriage, in one App! */}
                            All your vendors, ideas, and inspiration — in one <span className='text-red-600'>magical place ❤</span>
                        </h1>

                    </div>
                    <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4 mt-14">
                        {[
                            { name: 'Venue', icon: <i className="fa-solid fa-location-dot text-2xl"></i> },
                            { name: 'Florist', icon: <i className="fa-solid fa-flower text-2xl"></i> },
                            { name: 'Cake & Dessert', icon: <i className="fa-solid fa-cake-candles text-2xl"></i> },
                            { name: 'Photography', icon: <i className="fa-solid fa-camera text-2xl"></i> },
                            { name: 'Wedding Planners', icon: <i className="fa-solid fa-hand-holding-heart text-2xl"></i> },
                            { name: 'Dress & Apparel', icon: <i className="fa-solid fa-shirt text-2xl"></i> },
                            { name: 'Catering', icon: <i className="fa-solid fa-utensils text-2xl"></i> },
                            { name: 'Decor', icon: <i className="fa-solid fa-tree text-2xl"></i> },
                            { name: 'MC/DJ/Live Band', icon: <i className="fa-solid fa-guitar text-2xl"></i> },
                            { name: 'Officiants', icon: <i className="fa-solid fa-scroll text-2xl"></i> },
                            { name: 'Wedding Gifts', icon: <i className="fa-solid fa-gift text-2xl"></i> },
                            { name: 'Jewelry', icon: <i className="fa-solid fa-ring text-2xl"></i> },
                            { name: 'Makeup & Hair', icon: <i className="fa-solid fa-face-smile text-2xl"></i> },
                            { name: 'Hotels', icon: <i className="fa-solid fa-hotel text-2xl"></i> },
                            { name: 'Bar Services', icon: <i className="fa-solid fa-beer-mug-empty text-2xl"></i> },
                            { name: 'Car Rentals', icon: <i className="fa-solid fa-car text-2xl"></i> },
                            { name: 'Videography', icon: <i className="fa-solid fa-video text-2xl"></i> },
                            { name: 'Interior Decor', icon: <i className="fa-solid fa-tree text-2xl"></i> },

                        ].map((category, index) => (
                            <div key={index} className="flex flex-col justify-center items-center border-[0.5px] border-primary px-3 py-3 md:px-8 md:py:3">
                                {category.icon}
                                <p className="text-wrap font-primary font-medium">
                                    {category.name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col mx-auto my-12  gap-10 font-primary font-bold justify-center items-center  ">
                        <button type="button" className="px-14 py-4 justify-center items-center  text-white font-bold leading-7 border border-primary bg-primary">Check More</button>
                    </div>
                </div>
            </section>
            
            <HowItWorksWeb1 />
            <HowItWorksWeb2 />

            {/* chat with vendor - sign in */}
            <section className="container w-full mx-auto flex flex-col md:flex-row justify-center items-center gap-10 text-center px-4 sm:px-6 lg:px-8 py-6 md:py-1 font-primary">
                {/* Image section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-primary px-4 pt-4 pb-8">
                    <img src={messagePic} alt="Chat with Vendor" className="w-full max-w-sm md:max-w-full" />
                </div>

                {/* Text section */}
                <div className="w-full md:w-1/2 flex flex-col gap-4 md:justify-start md:items-start text-center md:text-left mt-6 md:mt-0 md:ml-8">
                    <p className='font-extralight leading-tight'>Plan Your Wedding <span className="text-red-700 ">Like a Pro.</span></p>
                    <p className="font-semibold text-2xl sm:text-lg md:text-2xl lg:text-3xl leading-tight">
                        Chat with a Vendor
                    </p>
                    {/* <p className="font-medium leading-tight mt-1">You can chat with vendors for all your wedding plans.</p>
                    <p className="font-medium leading-tight mt-1">It takes just a few clicks with the I Thee Wed App.</p> */}

                    <p className="font-normal leading-8 mt-4">
                        It’s fast, it's easy — start a conversation with trusted vendors, all in one place.
                    </p>

                    <div className='flex flex-col pt-10'>
                        <button type="button" className=" px-12 md:px-24 py-2  text-primary font-bold border border-primary">Sign In</button>
                    </div>
                </div>

            </section >

            

        </>
    );
};

export default Category;




// // import React, { useState } from 'react';
// import bannerImg1 from "@/features/Banner/assets/banner-img-1.png";
// import bannerImg2 from "@/features/Banner/assets/banner-img-2.png";
// import bannerImg3 from "@/features/Banner/assets/banner-img-3.png";
// import bannerImg4 from '@/features/Banner/assets/banner-img-4.png';




// const Category: React.FC = () => {
//     return (
//         <>
//             {/* Banner Section */}
//             <section className="relative w-full h-[713px] max-w-[1441px] mx-auto mt-[2px] px-4 md:px-12">
//                 {/* Background Image and Overlay */}
//                 <div className="banner-bg absolute inset-0 bg-cover bg-center"></div>
//                 <div className="absolute inset-0 bg-[#0E292B] opacity-80"></div>

//                 {/* Banner Headline */}
//                 <div className="relative z-10 flex justify-center md:justify-start items-start pt-20 h-full text-white">
//                     <h1 className="font-family-two text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[100px] lg:leading-[130px] max-w-4xl">
//                         Wedding planning at your fingertips.
//                     </h1>
//                 </div>

//                 {/* Subtext */}
//                 <div className="absolute inset-x-0 bottom-0 md:top-48 z-10 flex justify-center md:justify-start px-4 md:px-12 text-white">
//                     <h3 className="text-xl md:text-3xl lg:text-4xl font-normal leading-tight md:leading-[50px] max-w-4xl">
//                         itheewed is the number 1 marketplace for couples and vendors.
//                     </h3>
//                 </div>
//             </section>

//             {/* Form Section */}
//             <section className="relative z-20 w-full max-w-[1441px] mx-auto px-4 md:px-12 py-8 md:py-16 flex flex-col md:flex-row gap-8 md:gap-20">
//                 {/* Left: Form */}
//                 <div className="w-full md:w-1/2 flex flex-col items-start justify-start">
//                     <form className="flex flex-col gap-6 w-full max-w-lg">
//                         <input
//                             type="text"
//                             placeholder="Phone number or email"
//                             className="w-full h-[60px] border border-[#E0E0E0] px-4 text-black rounded"
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             className="w-full h-[60px] border border-[#E0E0E0] px-4 text-black rounded"
//                         />
//                         <button className="w-full h-[60px] bg-primary text-white font-bold rounded">
//                             Sign Up
//                         </button>
//                         <p>
//                             Already have an account?{' '}
//                             <span className="text-primary cursor-pointer underline">Sign in</span>
//                         </p>
//                     </form>
//                 </div>

//                 {/* Right: Extra Content */}
//   <div className="w-full md:w-1/2 flex items-center justify-center relative min-h-[800px] md:min-h-[unset]">
//     <div className="relative w-full flex flex-col items-center justify-start md:block md:justify-start md:items-start">
//       {/* Top Image */}
//       <div className="relative w-[280px] md:w-[520px] h-[220px] md:h-[414px] bg-white border border-[#00838F] shadow-md z-10 md:absolute md:top-[0px] md:left-[50%] md:-translate-x-1/2">
//         <img
//           src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1170&q=80"
//           className="w-full h-full object-cover"
//           alt="Top"
//         />
//       </div>

//       {/* Left Image */}
//       <div className="relative w-[260px] md:w-[327px] h-[180px] md:h-[292px] bg-white border border-[#00838F] shadow-md z-20 mt-[-40px] md:mt-0 md:absolute md:top-[200px] md:left-[calc(50%-260px)]">
//         <img
//           src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1170&q=80"
//           className="w-full h-full object-cover"
//           alt="Left"
//         />
//       </div>

//       {/* Right Image */}
//       <div className="relative w-[240px] md:w-[263px] h-[160px] md:h-[234px] bg-white border border-[#00838F] shadow-md z-20 mt-[-40px] md:mt-0 md:absolute md:top-[220px] md:left-[calc(50%+200px)]">
//         <img
//           src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1170&q=80"
//           className="w-full h-full object-cover"
//           alt="Right"
//         />
//       </div>

//       {/* Bottom Image */}
//       <div className="relative w-[280px] md:w-[327px] h-[190px] md:h-[292px] bg-white border border-[#00838F] shadow-md z-30 mt-[-40px] md:mt-0 md:absolute md:top-[350px] md:left-[50%] md:-translate-x-1/2">
//         <img
//           src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1170&q=80"
//           className="w-full h-full object-cover"
//           alt="Bottom"
//         />
//       </div>
//     </div>
//   </div>




//                 {/* </div> */}

//             </section>
//         </>
//     );
// };



// export default Category;
