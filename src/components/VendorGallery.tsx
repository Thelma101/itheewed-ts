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
        image: { venue },
        description: 'Best Venues near you',
        rating: 4.9
    },
    {
        id: 2,
        name: 'MakeUp & Hair',
        image: { makeup },
        description: 'Best Catering near you',
        rating: 4.8
    },
    {
        id: 3,
        name: 'Cakes & Desserts',
        image: { cakes },
        description: 'Best Desserts near you',
        rating: 4.7
    },
    {
        id: 4,
        name: 'Interior Decoration',
        image: { dj },
        description: 'Best Decoration near you',
        rating: 4.6
    },
    {
        id: 5,
        name: 'Cars',
        image: {cars},
        description: 'Best destination Hotel of your choosing',
        rating: 4.5
    }
    ]
    return (
        <section className="container w-full mx-auto flex justify-center items-center text-center mt-4 px-4 sm:px-6 lg:px-8 py-16 md:py-16">
            <div className="" >
                <div className="w-full max-w-4xl flex flex-col justify-center items-center mx-auto">
                    <p className="text-center text-2xl font-bold mb-4">Fast, Affordable, and
                        Reliable Vendors</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        vendors.map((vendor) => {
                            <div key={vendor.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                                <img src={vendor.image} alt={vendor.name} className="w-full h-auto" />
                                <p className="">{vendor.name}</p>
                            </div>
                        })
                    }
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <img src={makeup} alt="Vendor 1" className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <img src={cakes} alt="Vendor 2" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default VendorGallery;