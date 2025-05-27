const Category: React.FC = () => {
    return (
        <section className="container mx-auto flex justify-center items-center text-center my-24 px-4 sm:px-6 lg:px-8 py-16 md:py-36 ">
            <div classname="flex justify-center items-center text-center">
                <div className="w-full max-w-4xl flex flex-col justify-center items-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-primary leading-tight">
                        Everything Marriage, in one App!
                    </h1>
                </div>

                <div className="w-full max-w-4xl mx-auto flex md:mt-14 sm:flex-row justify-center items-center gap-8 md:gap-7 text-black">
                    <div className="flex flex-col justify-center items-center border border-primary px-8 py-3">
                        <p className="text-wrap font-mono">
                            Venue
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center border border-primary px-8 py-3">
                        <p className="text-wrap font-mono">
                            Venue
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center border border-primary px-8 py-3">
                        <p className="text-wrap font-mono">
                            Venue
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center border border-primary px-8 py-3">
                        <p className="text-wrap font-mono">
                            Venue
                        </p>
                    </div>

                </div>
            </div>
        </section>
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
