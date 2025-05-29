import React from 'react';
const WeddingWebsite: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 py-20 mx-auto px-2 md:px-24 ">

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-open-sans font-bold text-4xl text-center leading-normal text-gray-900 md:text-5xl lg:text-6xl xl:text-7xl ">
          Create a free Website for your Wedding
        </h1>
                            <p className="font-semibold text-7xl sm:text-lg md:text-2xl lg:text-3xl leading-tight">
                        Chat with a Vendor
                    </p>
        <a href="https://www.weddingwire.com/wedding-website/alex-and-ashley-wedding-website" target="_blank" rel="noopener noreferrer" className="mt-4 text-xl font-bold text-center  underline"></a>
      </div>
    </div>

  )
}

export default WeddingWebsite;