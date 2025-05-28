import React from 'react';
import venue from '@/features/VendorCategoryGallery/assets/venue.svg';
import cakes from '@/features/VendorCategoryGallery/assets/cakes.svg';
import dj from '@/features/VendorCategoryGallery/assets/dj.svg';
import cars from '@/features/VendorCategoryGallery/assets/cars.svg';
import makeup from '@/features/VendorCategoryGallery/assets/makeup.svg';

const VendorGallery: React.FC = () => {
    const vendors = [{
        id: 1,
        name: 'Venue',
        image: venue,
        description: 'Best Venues near you',
        rating: 4.9
    },
    {
        id: 2,
        name: 'MakeUp & Hair',
        image: makeup,
        description: 'Best Catering near you',
        rating: 4.8
    },
    {
        id: 3,
        name: 'Cakes & Desserts',
        image: cakes,
        description: 'Best Desserts near you',
        rating: 4.7
    },
    {
        id: 4,
        name: 'Interior Decoration',
        image: dj,
        description: 'Best Decoration near you',
        rating: 4.6
    },
    {
        id: 5,
        name: 'Cars',
        image: cars,
        description: 'Best destination Hotel of your choosing',
        rating: 4.5
    },
    {
        id: 6,
        name: 'Cakes & Desserts',
        image: cakes,
        description: 'Best Desserts near you',
        rating: 4.7
    },
    {
        id: 7,
        name: 'Interior Decoration',
        image: dj,
        description: 'Best Decoration near you',
        rating: 4.6
    },
    {
        id: 8,
        name: 'Cars',
        image: cars,
        description: 'Best destination Hotel of your choosing',
        rating: 4.5
    }
    ]
    return (
        <section className="container w-full mx-auto flex justify-center items-center text-center md:mt-20 py-2 md:py-20">
            <div className="flex-col w-full md:px-4 mx-auto justify-center align-middle text-center items-center" >
                <div className="w-full max-w-4xl flex flex-col justify-center items-center mx-auto py-8 md:py-16">
                    <p className="font-open-sans xs:text-2xl px-2 text-xl sm:text-4xl md:text-5xl lg:text-5xl font-black ">Fast, Affordable, and
                        Reliable Vendors</p>
                </div>
                <div className=' bg-white' >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            vendors.slice(0, 3).map((vendor) => (
                                <div key={vendor.id}
                                    className="w-full p-4 bg-white">
                                    <div className='shadow-lg shadow-[#002528]/50'>
                                        <img
                                            src={vendor.image}
                                            alt={vendor.name}
                                            className="w-full h-full object-cover shadow-lg group-hover:shadow-2xl group-hover:shadow-primary"
                                        />

                                    </div>
                                    <p className="text-center text-red-600 font-semibold group-hover:text-primary relative top-10 ">
                                        {vendor.name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        {
                            vendors.slice(3, 5).map((vendor) => (
                                <div key={vendor.id}
                                    className='w-full p-4 bg-white'
                                >
                                    <div className='shadow-lg shadow-[#002528]/50 '>
                                        <img
                                            src={vendor.image}
                                            alt={vendor.description}
                                            className='w-full h-full object-cover shadow'
                                        />
                                        <p className="mt-2 text-center font-semibold group-hover:text-primary">
                                            {vendor.name}
                                        </p>

                                    </div>
                                </div>
                            ))
                        }
                        {/* <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <img src={makeup} alt="Vendor 1" className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <img src={cakes} alt="Vendor 2" className="w-full h-auto" />
                    </div> */}

                    </div>
                </div>
            </div>

        </section >
    )
}

export default VendorGallery;