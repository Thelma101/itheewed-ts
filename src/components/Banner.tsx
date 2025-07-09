import React from 'react';
import bannerImg1 from "@/features/Banner/assets/banner-img-1.png";
import bannerImg2 from "@/features/Banner/assets/banner-img-2.png";
import bannerImg3 from "@/features/Banner/assets/banner-img-3.png";
import bannerImg4 from '@/features/Banner/assets/banner-img-4.png';
import bannerBg from '@/features/Banner/assets/banner.png';

// const bannerImages = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];

const Banner: React.FC = () => {
    // const [index, setIndex] = useState(0);

    // const next = () => setIndex((index) => (index + 1) % bannerImages.length);
    // const prev = () => setIndex((index) => (index - 1) % bannerImages.length);

    return (
        <>
            {/* Banner Section - Mobile/Tablet */}
            <section className="md:hidden w-full max-w-full mx-auto mt-[2px] px-0 flex flex-col items-center relative h-[400px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bannerBg})` }}
                ></div>
                <div className="absolute inset-0 bg-[#0E292B] opacity-80"></div>
                <div className="relative z-10 w-full flex flex-col items-center justify-center text-center mt-12 px-10 pt-6">
                    <p className="text-2xl sm:text-3xl font-primary3 leading-tight text-white">
                        Wedding planning at your fingertips.
                    </p>
                    <p className="text-lg sm:text-xl font-normal mb-6 max-w-[90%] mx-auto text-white">
                        Discover vendors. Book effortlessly. Cherish forever.
                    </p>
                    <form className="flex flex-col gap-4 w-full max-w-lg mx-auto" aria-label="Sign in form">
                        <label htmlFor="signin-identifier" className="sr-only">Phone number or email</label>
                        <input
                            id="signin-identifier"
                            name="identifier"
                            type="text"
                            autoComplete="username"
                            placeholder="Phone number or email"
                            className="w-full h-12 border border-[#E0E0E0] px-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                            aria-label="Phone number or email"
                        />
                        <label htmlFor="signin-password" className="sr-only">Password</label>
                        <input
                            id="signin-password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Password"
                            className="w-full h-12 border border-[#E0E0E0] px-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                            aria-label="Password"
                        />
                        <button
                            type="submit"
                            className="w-full h-12 bg-[#FF4081] text-white font-bold rounded shadow transition-transform duration-150 ease-in-out transform hover:scale-105 hover:bg-[#e73370] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4081] mt-2 mb-2"
                            aria-label="Sign in"
                        >
                            Sign In
                        </button>
                        <p className="text-white text-sm text-center mt-2">
                            Don&apos;t have an account?{' '}
                            <a href="#" className="text-[#FF4081] cursor-pointer hover:underline font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4081]">Register</a>
                        </p>
                    </form>
                </div>
            </section>

            {/* Banner Section - Desktop */}
            <section className="hidden md:block relative w-full h-[713px] max-w-full mx-auto mt-[2px] px-4 sm:px-6 lg:px-8">
                <div className="banner-bg"></div>
                <div className="absolute inset-0 bg-[#0E292B] opacity-80"></div>
                <div className="relative z-10 flex items-start justify-center pt-20 h-full text-white text-center px-2 lg:pb-40">
                    <p className="text-2xl xs:text:3xl sm:text-3xl md:text-5xl lg:text-7xl font-primary3 max-w-[90vw]">
                        Wedding planning at your fingertips.
                    </p>
                </div>
                <div className="absolute bottom-0 inset-x-0 flex items-start justify-center pt-48 w-full h-full text-white text-center">
                    <p className="sm:text-xl md:text-2xl lg:text-4xl font-normal leading-[1.3] md:leading-[50px] max-w-[90%] md:max-w-[80%]">
                        Discover vendors. Book effortlessly. Cherish forever.
                    </p>
                </div>
            </section>

            <section className="hidden md:flex flex-col md:flex-row w-full max-w-full absolute z-10 top-80 text-white px-4 sm:px-6 lg:px-8 py-6 sm:py-10 left-1/2 transform -translate-x-1/2">
                {/* Form Section */}
                <div className="w-full flex flex-col md:flex-row px-4 md:px-12 py-12 relative overflow-hidden">
                    {/* Left Form */}
                    <div className="w-full flex flex-col items-center justify-start text-xl z-10">
                        <form className="flex flex-col gap-4 sm:gap-6 w-full max-w-lg py-11 md:pr-14" aria-label="Sign in form">
                            <label htmlFor="signin-identifier-desktop" className="sr-only">Phone number or email</label>
                            <input
                                id="signin-identifier-desktop"
                                name="identifier"
                                type="text"
                                autoComplete="username"
                                placeholder="Phone number or email"
                                className="w-full h-12 md:h-[50px] border border-[#E0E0E0] px-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                                aria-label="Phone number or email"
                            />
                            <label htmlFor="signin-password-desktop" className="sr-only">Password</label>
                            <input
                                id="signin-password-desktop"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Password"
                                className="w-full h-12 md:h-[50px] border border-[#E0E0E0] px-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                                aria-label="Password"
                            />
                            <button
                                type="submit"
                                className="w-full h-12 md:h-[50px] bg-[#FF4081] text-white font-bold rounded shadow transition-transform duration-150 ease-in-out transform hover:scale-105 hover:bg-[#e73370] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4081] mt-2 mb-2"
                                aria-label="Sign in"
                            >
                                Sign In
                            </button>
                            <p className="text-white text-sm md:text-lg text-center md:text-left mt-2">
                                Don&apos;t have an account?{' '}
                                <a href="#" className="text-[#FF4081] cursor-pointer hover:underline font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4081]">Register</a>
                            </p>
                        </form>
                    </div>
                    {/* BANNER IMAGES - Desktop Only */}
                    <div className="hidden md:flex w-full min-h-[800px] relative items-center justify-center">
                        {/* Top */}
                        <div className="absolute top-[-28px] left-[56%] -translate-x-1/2 w-[520px] h-[414px] bg-white border border-[#00838F] shadow-md z-10">
                            <img src={bannerImg1} className="w-full h-[calc(100%-30px)] mx-auto object-cover mt-[27px] px-4" alt="Top" />
                        </div>
                        {/* Left */}
                        <div className="absolute top-[130px] left-[calc(33%-260px)] w-[327px] h-[292px] bg-white border border-[#00838F] shadow-md z-20">
                            <img src={bannerImg2} className="w-full h-[calc(100%-20px)] object-cover mx-auto pb-[40px] mt-3 px-3" alt="Left" />
                        </div>
                        {/* Right */}
                        <div className="absolute top-[180px] left-[calc(30%+200px)] w-[263px] h-[234px] bg-white border border-[#00838F] shadow-md z-20">
                            <img src={bannerImg4} className="w-full h-[calc(100%-20px)] object-cover mx-auto pb-[40px] mt-3 px-3" alt="Right" />
                        </div>
                        {/* Bottom */}
                        <div className="absolute top-[260px] left-[50%] -translate-x-1/2 w-[327px] h-[292px] bg-white border border-[#00838F] shadow-md z-30">
                            <img src={bannerImg3} className="w-full h-[calc(100%-20px)] object-cover mx-auto pb-[40px] mt-3 px-3" alt="Bottom" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
