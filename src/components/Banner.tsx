
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



// import card1 from '../features/assets/banner-img-2.png';


import bannerImg1 from '../features/assets/banner-img-1.png';

const Banner: React.FC = () => {
    return (
        <>
            {/* Banner Section */}
            <section className="relative w-full h-[500px] md:h-[713px] max-w-full mx-auto mt-[2px] px-4 sm:px-6 lg:px-8">
                <div className="banner-bg"></div>
                <div className="absolute inset-0 bg-[#0E292B] opacity-80"></div>

                <div className="font-family-two relative z-10 flex items-start justify-center pt-8 md:pt-20 h-full text-white text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] md:leading-[130px]">
                        Wedding planning at your fingertips.
                    </h1>
                </div>

                <div className="absolute bottom-0 inset-x-0 flex items-start justify-center pt-8 md:pt-48 w-full h-full text-white text-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3] md:leading-[50px] max-w-[90%] md:max-w-[80%]">
                        itheewed is the number 1 market place for couples and vendors.
                    </h3>
                </div>
            </section>

            {/* Form Section */}
            <section className="flex flex-col md:flex-row w-full absolute z-10 top-[320px] md:top-80 text-white px-4 sm:px-6 lg:px-8 py-6 sm:py-10 max-w-full left-1/2 transform -translate-x-1/2">
                {/* Left form */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start">
                    <form className="flex flex-col gap-4 sm:gap-6 w-full max-w-lg py-11">
                        <input
                            type="text"
                            placeholder="Phone number or email"
                            className="w-full h-[50px] border border-[#E0E0E0] px-4 text-black"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-[50px] border border-[#E0E0E0] px-4 text-black"
                        />
                        <button className="w-full h-[50px] bg-primary text-white font-bold">
                            Sign Up
                        </button>
                        <p className="text-white text-center md:text-left">
                            Already have an account?{' '}
                            <span className="text-primary cursor-pointer underline">Sign in</span>
                        </p>
                    </form>
                </div>

                {/* Right content */}

                {/* <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 mt-6 md:mt-0 text-red-600">
                    <div className="w-full md:w-[520px] h-[414px] bg-white p-2">
                        <img className="w-full md:w-[493px] h-[366px] py-4 px-2" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <div className="absolute md:top-48 right-0 md:right-64 transform -translate-x-1/2 w-[327px] h-[292px] bg-white shadow-[0px_5px_5px_-1px_rgba(0,37,40,0.1)] box-border">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Card visual"
                            className="w-[307px] h-[228px] mx-auto mt-[10px] object-cover"
                        />
                    </div>

                    <div className="absolute md:top-80 md:right-10 transform -translate-x-1/2 w-[327px] h-[292px] bg-white shadow-[0px_5px_5px_-1px_rgba(0,37,40,0.1)] box-border">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Card visual"
                            className="w-[307px] h-[228px] mx-auto mt-[10px] object-cover"
                        />
                    </div>
                    <div className="absolute md:top-72 md:right-72 transform -translate-x-1/2 w-[263px] h-[234px] bg-white shadow-[0px_5px_5px_-1px_rgba(0,37,40,0.1)] box-border">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Card visual"
                            className="w-[307px] h-[228px] mx-auto mt-[10px] object-cover"
                        />
                    </div>
                </div> */}

                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 mt-6 md:mt-0">
                    {/* Top Image (bg-2 + img-2) */}
                    <div className="w-full max-w-[520px] h-[414px] border border[#00838F] bg-white shadow-[0px_5px_5px_-1px_rgba(0,37,40,0.1)] box-border px-3 pt-8">
                        <img
                            className="w-full h-[366px] object-cover"
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                    </div>

                    {/* Bottom Left (bg-1 + img-1) */}
                    <div className="absolute hidden md:block top-[190px] left-[670px] w-[327px] h-[292px] border border[#00838F] bg-white shadow-[0px_5px_5px_-1px_rgba(0,37,40,0.1)] box-border">
                        <img
                            // src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1170&q=80"
                            src={bannerImg1}
                            alt="Card visual"
                            className="w-[307px] h-[228px] mx-auto md:mt-[10px] object-cover"
                        />
                    </div>

                    {/* Right Image (bg-4 + img-4) */}
                    <div className="absolute hidden md:block top-[260px] left-[1102px] w-[263px] h-[234px] border border[#00838F] bg-white shadow-[0px_5px_5px_-1px_rgba(0,37,40,0.1)] box-border">
                        <img
                            // src={card1}
                            alt="Card visual"
                            className="w-[247px] h-[183px] mx-auto mt-[10px] object-cover"
                        />
                    </div>

                    {/* Bottom Center (bg-3 + img-3) */}
                    <div className="absolute hidden md:block top-[330px] left-[839px] w-[327px] h-[292px] border border[#00838F] bg-white shadow-[0px_5px_5px_-1px_rgba(0,37,40,0.1)] box-border">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1170&q=80"
                            alt="Card visual"
                            className="w-[308px] h-[228px] mx-auto mt-[10px] object-cover"
                        />
                    </div>

                    {/* Responsive Fallback Stack (visible on small screens) */}
                    <div className="flex flex-col gap-4 mt-8 md:hidden">
                        {[1, 2, 3, 4].map((_, index) => (
                            <div
                                key={index}
                                className="w-full max-w-[327px] mx-auto h-[292px] bg-white border border-[#00838F] shadow-[0px_5px_5px_-1px_rgba(0,37,40,0.1)] box-border"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1170&q=80"
                                    alt={`Card visual ${index + 1}`}
                                    className="w-full h-[228px] mx-auto mt-[10px] object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
};

export default Banner;
