// const Category: React.FC = () => {
//     return (
//         <section className="container mx-auto my-24 px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex justify-center items-center text-center">
//             <div className="w-full max-w-4xl flex flex-col justify-center items-center">
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-primary leading-tight">
//                     Everything Marriage, in one App!
//                 </h1>
//             </div>
//         </section>
//     );
// };

// export default Category;




import { useState, useEffect } from 'react';
import bannerImg1 from "@/features/Banner/assets/banner-img-1.png";
import bannerImg2 from "@/features/Banner/assets/banner-img-2.png";
import bannerImg3 from "@/features/Banner/assets/banner-img-3.png";
import bannerImg4 from '@/features/Banner/assets/banner-img-4.png';

const Category = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    {
      id: 0,
      src: bannerImg1,
      style: { width: 493, height: 366, top: 31, left: 13 },
      bgStyle: { width: 520, height: 414, top: 0, left: 0, zIndex: 10 },
    },
    {
      id: 1,
      src: bannerImg2,
      style: { width: 307, height: 228, top: 11, left: 11 },
      bgStyle: { width: 327, height: 292, top: 149, left: -148, zIndex: 20 },
    },
    {
      id: 2,
      src: bannerImg4,
      style: { width: 247, height: 183, top: 9, left: 7 },
      bgStyle: { width: 263, height: 234, top: 207, left: 284, zIndex: 20 },
    },
    {
      id: 3,
      src: bannerImg3,
      style: { width: 308, height: 228, top: 11, left: 8 },
      bgStyle: { width: 327, height: 292, top: 286, left: 21, zIndex: 30 },
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center md:items-end md:flex-row justify-center py-20">
      {/* Grouped image container */}
      <div
        className={`relative ${
          isMobile ? 'w-full flex flex-col items-center' : 'w-[520px] h-[414px]'
        } md:block`}
      >
        {images.map((img, index) => {
          const isActive = activeImage === index;

          const commonStyles =
            'border border-[#00838F] bg-white shadow-[0px_5px_5px_-1px_rgba(0,37,40,0.1)] box-border transition-transform duration-300 ease-in-out';

          const mobileStyle = {
            position: 'relative' as const,
            width: img.bgStyle.width,
            height: img.bgStyle.height,
            marginTop: index === 0 ? 0 : -80,
            zIndex: isActive ? 40 : index + 10,
            transform: isActive ? 'scale(1.05)' : 'scale(1)',
          };

          const desktopStyle = {
            position: 'absolute' as const,
            top: img.bgStyle.top,
            left: img.bgStyle.left,
            width: img.bgStyle.width,
            height: img.bgStyle.height,
            zIndex: img.bgStyle.zIndex,
          };

          return (
            <div
              key={img.id}
              className={`${commonStyles} ${isMobile ? '' : 'absolute'}`}
              style={isMobile ? mobileStyle : desktopStyle}
              onClick={() => setActiveImage(index)}
            >
              <img
                src={img.src}
                alt={`Banner ${index}`}
                className="absolute object-cover"
                style={img.style}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
