import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface NavItemProps {
  to: string;
  text: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
        stagger: 0.3
      })
        .from(".d-menu > *", {
          opacity: 0,
          duration: 0.5,
          y: -100,
          stagger: 0.3,
          // ease: "bounce.out"
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
    if (isOpen && mobileMenuRef.current) {
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

  const toggleMenu = (): void => {
    if (!isOpen && mobileMenuRef.current) {
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
            <NavItem to="/" text="Home" />
            <NavItem to="/products" text="Products" />
            <NavItem to="/manage-products" text="Manage Products" />
            <NavItem to="/about" text="About us" />
          </div>

          {/* Cart Icon */}
          <div className='hidden lg:block cart'>
            <NavLink to="#">
              <img
                src="https://i.ibb.co/2gGHHGw/icons8-cart-96.png"
                className='size-14 rounded-lg transition-transform duration-300 transform hover:scale-125'
                alt="Cart Icon"
              />
            </NavLink>
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
          <MobileNavItem to="/" text="Home" />
          <MobileNavItem to="/products" text="Products" />
          <MobileNavItem to="/manage-products" text="Manage Products" />
          <MobileNavItem to="/about" text="About us" />
          <div className="flex justify-center mt-4">
            <NavLink to="#">
              <img
                src="https://i.ibb.co/2gGHHGw/icons8-cart-96.png"
                className='size-14 rounded-lg transition-transform duration-300 transform hover:scale-125'
                alt="Cart Icon"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? 'text-2xl text-gray-800 font-bold' : 'text-2xl text-gray-600'
    }
  >
    <h4 className='hover:text-gray-800 hover:shadow-blue-200 hover:shadow-md duration-500 p-2 rounded-xl'>
      {text}
    </h4>
  </NavLink>
);

const MobileNavItem: React.FC<NavItemProps> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? 'text-xl text-gray-800 font-bold' : 'text-xl text-gray-600'
    }
  >
    <h4 className='hover:text-gray-800 hover:bg-gray-100 duration-300 p-3 rounded-xl'>
      {text}
    </h4>
  </NavLink>
);

export default Navbar;
