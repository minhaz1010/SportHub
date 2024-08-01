import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Scrolling: React.FC = () => {

  useEffect(() => {
    const handleWheel = (dets: WheelEvent) => {
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          duration: 8,
          delay: 0.01,
          // x: '-200%',
          transform: "translateX(-200%)",
          ease: "none",
          repeat: -1,
        });
        gsap.to(".marque img", {
          rotate: 180,
        });
      } else {
        gsap.to(".marque", {
          duration: 8,
          delay: 0.01,
          // x: '0%',
          transform: "translateX(0%)",
          ease: "none",
          repeat: -1,
        });
        gsap.to(".marque img", {
          rotate: 0,
        });
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="w-full h-[20vh] bg-[#9af6ab] flex gap-6 mt-6 py-5 px-8 overflow-hidden mx-auto">
      <div className="flex flex-shrink-0 gap-8  marque items-center" style={{ transform: "translateX(-100%)" }} >
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold font-roboto-serif">Welcome To Feature Section</h3>
        <img src="https://i.ibb.co/c8mJdX7/icon-svg-1.png" className="h-8 sm:h-10 md:h-12" alt="icon" />
      </div>
      <div className="flex flex-shrink-0 gap-8  marque items-center" style={{ transform: "translateX(-100%)" }}>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold font-roboto-serif">Welcome To Feature Section</h3>
        <img src="https://i.ibb.co/c8mJdX7/icon-svg-1.png" className="h-8 sm:h-10 md:h-12" alt="icon" />
      </div>
      <div className="flex flex-shrink-0 gap-8  marque items-center" style={{ transform: "translateX(-100%)" }}>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold font-roboto-serif">Welcome To Feature Section</h3>
        <img src="https://i.ibb.co/c8mJdX7/icon-svg-1.png" className="h-8 sm:h-10 md:h-12" alt="icon" />
      </div>
      <div className="flex flex-shrink-0 gap-8  marque items-center" style={{ transform: "translateX(-100%)" }}>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold font-roboto-serif">Welcome To Feature Section</h3>
        <img src="https://i.ibb.co/c8mJdX7/icon-svg-1.png" className="h-8 sm:h-10 md:h-12" alt="icon" />
      </div>
      <div className="flex flex-shrink-0 gap-8  marque items-center" style={{ transform: "translateX(-100%)" }}>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold font-roboto-serif">Welcome To Feature Section</h3>
        <img src="https://i.ibb.co/c8mJdX7/icon-svg-1.png" className="h-8 sm:h-10 md:h-12" alt="icon" />
      </div>
    </div>
  );
};

export default Scrolling;
