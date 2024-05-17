import React from 'react';
import { NavLink } from 'react-router-dom';
import ft from '../assets/Image/Footer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
import { faArrowRight, faCopyright } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <div className="relative mt-10 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${ft})` }}>

      <div className='bg-white h-1/3'>
        <h1 className='text-8xl text-center font-bold pt-2'>
          Get in Touch
        </h1>
        <div className="w-full border-t border-gray-300 my-4"></div>
        <p className='text-2xl text-center m-6'>Building Relationships, One Conversation at a Time</p>
        <div className="flex flex-col md:flex-row justify-around items-center p-4 space-y-6 md:space-y-0 md:space-x-6">  
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-1/3 gap-4">
        <h1 className="text-center text-6xl font-bold text-white">Have a project in mind?</h1>
        <p className="text-center text-2xl font-bold text-white">Do not hesitate to say Hello</p>
        
        <button className="relative overflow-hidden border-4 border-white rounded-md p-2 transition duration-300 ease-in-out hover:bg-white hover:border-2 hover:border-white" style={{ height: '4rem' }}>
      <NavLink to="/contact" className="text-white flex items-center" activeClassName="text-black">
        <span className="mr-2 text-lg">Let's Talk</span>
        <FontAwesomeIcon icon={faArrowRight} className="text-white" />
      </NavLink>
      <style jsx>{`
        button:hover .text-lg {
          color: black;
        }
        button:hover .fa-arrow-right {
          color: black;
        }
      `}</style>
    </button>
      </div>

      <div className="bg-black text-white h-1/2">
        <div className="flex justify-around h-full mt-10">
          {/* Column 1 */}
          <div className="">
            <ul className='flex flex-col justify-around items-center gap-1 text-lg'>
              <li>Mumbai Office</li>
              <li>+918898533370</li>
              <li>nexgensupport@gmail.com</li>
              <li>ShantiNiketan Building, NewLink Road,<br/>
Laljipada, Kandivali West, Mumbai, 400067</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full text-center border-t border-dotted border-white bg-white">
        <div className="text-black py-4">
        <FontAwesomeIcon icon={faCopyright} className="mr-2" />
          Copyright 2024 
          <NavLink to ='/'><span className='text-lg' style={{color:'#DAA14C'}}>
          
          NexGen Interiors Private Limited.

          </span></NavLink>
           All rights reserved.
        </div>
      </div>

      {/* Media Query for Mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .text-8xl {
            font-size: 4rem; /* Adjust font size for smaller screens */
          }
          .text-2xl {
            font-size: 1.5rem; /* Adjust font size for smaller screens */
          }
          .text-6xl {
            font-size: 3rem; /* Adjust font size for smaller screens */
          }
        }
      `}</style>
    </div>
  );
}
