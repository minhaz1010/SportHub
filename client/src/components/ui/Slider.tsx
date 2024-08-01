import { useGSAP } from '@gsap/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { gsap } from "gsap"

const Slider = () => {

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.from(".slider > *", {
        duration: 1,
        delay: 3.7,
        opacity: 0,
        y: -200,
        ease: "back.out"
      })

    });

    mm.add("(max-width: 1023px)", () => {
      gsap.from(".slider > *", {
        duration: 1,
        delay: 3,
        opacity: 0,
        y: -200,
        ease: "back.out"
      })

      // return () => mm.revert();
    }, []);
  })



  return (
    <div className='container mx-auto overflow-hidden rounded-xl slider'>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        // stopOnHover={false}
        showThumbs={true}
      >
        <div>
          <img
            src="https://i.ibb.co/Ny4cFMf/nicole-green-Qgi-Aey-GUUVQ-unsplash.jpg"
            className="w-full object-cover max-h-[400px] md:max-h-[600px] lg:max-h-[700px]"
            alt="Slide 1"
          />
          <p className="legend ">Slide 1</p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/yn82LTy/folco-masi-er-Uc-ICg2-LYE-unsplash.jpg"
            className="w-full object-cover max-h-[400px] md:max-h-[600px] lg:max-h-[700px]"
            alt="Slide 2"
          />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/s16w97R/ibrahim-asad-u-TI1aex-MBls-unsplash.jpg"
            className="w-full object-cover max-h-[400px] md:max-h-[600px] lg:max-h-[700px]"
            alt="Slide 3"
          />
          <p className="legend">Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
