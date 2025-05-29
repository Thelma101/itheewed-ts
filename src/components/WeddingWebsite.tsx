import React from 'react';
const WeddingWebsite: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-bold">
          Our Wedding Website
        </h1>
        <p className="text-xl text-center">
          We have created a special website for our wedding, where you can find
          all the details about the event, including the date, time, location,
          and more. You can also RSVP to the wedding and share your thoughts and
          photos with us.
        </p>
        <a href="https://www.weddingwire.com/wedding-website/alex-and-ashley-wedding-website" target="_blank" rel="noopener noreferrer" className="mt-4 text-xl font-bold text-center  underline"></a>
      </div>
    </div>

  )
}

export default WeddingWebsite;