import React from 'react';

const VendorGallery: React.FC = () => {
    return (
        // <section className="container mx-auto flex">
        <section className="container w-full mx-auto flex justify-center items-center text-center mt-24 px-4 sm:px-6 lg:px-8 py-16 md:py-36">
            <div className="flex flex-wrap justify-center">
                <p className="text-center text-2xl font-bold mb-4">Fast, Affordable, and
                    Reliable Vendors</p>
            <div className="w-full max-w-4xl flex flex-col justify-center items-center mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                            Everything Marriage, in one App!
                        </h1>
                    </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <img src="https://via.placeholder.com/300x300" alt="Vendor 1" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <img src="https://via.placeholder.com/300x300" alt="Vendor 2" className="w-full h-auto" />
                </div>
            </div>
        </section>
    )
}

export default VendorGallery;