import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Slider from './Slider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Desktop animation
      let tl = gsap.timeline();
      tl.from(".sporthub > *", {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        y: -100,
        stagger: 0.5
      })
        .from(".d-menu > *", {
          opacity: 0,
          duration: 0.5,
          y: -100,
          stagger: 0.5,
          ease: "bounce.out"
        })
        .from(".cart", {
          opacity: 0,
          duration: 0.5,
          y: -100,
          ease: "bounce.out"
        })

    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile and tablet animation
      gsap.from(".sporthub > *", {
        opacity: 0,
        duration: 1,
        delay: 0.3,
        x: -100,
        stagger: 1
      });

      gsap.from(".mobile-menu-button", {
        opacity: 0,
        duration: 0.5,
        delay: 0.8,
        x: 50
      });
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Open animation
      gsap.fromTo(mobileMenuRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.3,
          ease: "power2.out"
        }
      );
    } else if (mobileMenuRef.current) {
      // Close animation
      gsap.to(mobileMenuRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => gsap.set(mobileMenuRef.current, { display: 'none' })
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    if (!isOpen) {
      // Ensure the menu is visible before animating in
      gsap.set(mobileMenuRef.current, { display: 'block' });
    }
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-sm font-roboto-condensed">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 ">
          {/* Sporthub */}
          <div className="sporthub p-4 font-bold text-5xl flex justify-center items-center gap-5">
            <img src="https://i.ibb.co/XpsJj2h/icon.png" alt="" className="h-16" />
            <h2>Sporthub</h2>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex justify-center items-center gap-8 p-4 d-menu'>
            <NavItem to="#" text="Home" />
            <NavItem to="#" text="Products" />
            <NavItem to="#" text="Manage Products" />
            <NavItem to="#" text="About us" />
          </div>

          {/* Cart Icon */}
          <div className='hidden lg:block cart'>
            <Link to="#">
              <img
                src="https://i.ibb.co/2gGHHGw/icons8-cart-96.png"
                className='size-14 rounded-lg transition-transform duration-300 transform hover:scale-125'
                alt="Cart Icon"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden mobile-menu-button">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div ref={mobileMenuRef} className={`lg:hidden pb-4 mobile-menu ${isOpen ? 'block' : 'hidden'}`}>
          <MobileNavItem to="#" text="Home" />
          <MobileNavItem to="#" text="Products" />
          <MobileNavItem to="#" text="Manage Products" />
          <MobileNavItem to="#" text="About us" />
          <div className="flex justify-center mt-4">
            <Link to="#">
              <img
                src="https://i.ibb.co/2gGHHGw/icons8-cart-96.png"
                className='size-14 rounded-lg transition-transform duration-300 transform hover:scale-125'
                alt="Cart Icon"
              />
            </Link>
          </div>
        </div>
      </div>

    </nav>
  );
};

const NavItem = ({ to, text }) => (
  <Link to={to}>
    <h4 className='text-2xl text-gray-600 hover:text-gray-800 hover:shadow-blue-200 hover:shadow-md duration-500 p-2 rounded-xl'>
      {text}
    </h4>
  </Link>
);

const MobileNavItem = ({ to, text }) => (
  <Link to={to}>
    <h4 className='text-xl text-gray-600 hover:text-gray-800 hover:bg-gray-100 duration-300 p-3 rounded-xl'>
      {text}
    </h4>
  </Link>
);

export default Navbar;