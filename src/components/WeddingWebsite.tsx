import React from 'react';
const WeddingWebsite: React.FC = () => {
    return (
        <section className="container w-full mx-auto flex justify-center items-center text-center md:mt-4 py-2 md:py-20">
            <div className="flex-col w-full md:px-4 mx-auto justify-center align-middle text-center items-center" >
                <div className="font-primary w-full max-w-4xl flex flex-col justify-center items-center mx-auto py-7 md:py-0 px-11 md:px-32">
                    {/* <h1 className="font-bold text-4xl text-center leading-normal md:text-5xl lg:text-6xl xl:text-7xl "> */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-primary-dark">
                        Create a free Website for your Wedding
                    </h1>
                    <a href="https://www.weddingwire.com/wedding-website/alex-and-ashley-wedding-website" target="_blank" rel="noopener noreferrer" className="mt-4 text-xl font-bold text-center  underline"></a>
                </div>
                <div className="flex flex-col mx-auto my-12  gap-10 font-primary font-bold justify-center items-center  ">
                    <button type="button" className="px-14 py-4 justify-center items-center  text-white font-bold leading-7 border border-primary bg-primary">Check More</button>
                </div>
            </div >
        </section>

    )
}

export default WeddingWebsite;