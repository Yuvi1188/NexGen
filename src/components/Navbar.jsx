import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import '../SlidingImages.css';
import IMG1 from '../assets/Image/NexGenInterior_.jpg';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth <= 1150);
    };

    window.addEventListener('resize', checkIfMobile);
    checkIfMobile();

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenuOnMobile = () => {
    if (isMobileView) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md p-4 md:p-2">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <div className="text-2xl font-bold rounded-md px-4 py-2 shadow-lg" style={{ color: '#2473ab' }}>
            <img src={IMG1} style={{ height: '4rem', width: '10rem', marginRight: '10px' }} alt="Logo" />
          </div>
        </NavLink>

        <div className={`${isMobileView ? 'hidden' : 'flex'} space-x-8 md:flex`}>
          <NavLink to="/" className="text-lg text-gray-200 hover:text-white" activeClassName="text-white" style={{ color: '#4d4d4d', fontFamily: 'Nunito Sans, sans-serif' }}>
            Home
          </NavLink>
          <NavLink to="/about" className="text-lg text-gray-200 hover:text-white" activeClassName="text-white" style={{ color: '#4d4d4d', fontFamily: 'Nunito Sans, sans-serif' }}>
            About Us
          </NavLink>
          <NavLink to="/services" className="text-lg text-gray-200 hover:text-white" activeClassName="text-white" style={{ color: '#4d4d4d', fontFamily: 'Nunito Sans, sans-serif' }}>
            Services
          </NavLink>
          <NavLink to="/contact" className="text-lg text-gray-200 hover:text-white" activeClassName="text-white" style={{ color: '#4d4d4d', fontFamily: 'Nunito Sans, sans-serif' }}>
            Contact Us
          </NavLink>
        </div>

        {isMobileView && (
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMobileMenuOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
            </button>
          </div>
        )}
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-black`} style={{ color: '#333333'}} >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
            <IoClose className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <NavLink to="/" className="text-lg text-gray-200 hover:text-white" activeClassName="text-white" onClick={closeMenuOnMobile} style={{ color: '#4d4d4d', fontFamily: 'Nunito Sans, sans-serif' }}>
            Home
          </NavLink>
          <NavLink to="/about" className="text-lg text-gray-200 hover:text-white" activeClassName="text-white" onClick={closeMenuOnMobile} style={{ color: '#4d4d4d', fontFamily: 'Nunito Sans, sans-serif' }}>
            About Us
          </NavLink>
          <NavLink to="/services" className="text-lg text-gray-200 hover:text-white" activeClassName="text-white" onClick={closeMenuOnMobile} style={{ color: '#4d4d4d', fontFamily: 'Nunito Sans, sans-serif' }}>
            Services
          </NavLink>
          <NavLink to="/contact" className="text-lg text-gray-200 hover:text-white" activeClassName="text-white" onClick={closeMenuOnMobile} style={{ color: '#4d4d4d', fontFamily: 'Nunito Sans, sans-serif' }}>
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
