import React from 'react'
 import IMG1 from '../assets/Image/RajGupta.jpg'
 import IMG2 from '../assets/Image/Yuvraj.jpg'
 import '@fortawesome/fontawesome-free/css/all.min.css';
 import { useEffect } from 'react';
export default function Master() {
  const phoneNumber1 = '+918898533370'; // Replace with your phone number
  const whatsappURL1 = `https://wa.me/${phoneNumber1}`;

  const handleWhatsAppClick1 = () => {
      window.location.href = whatsappURL1;
  };
  const phoneNumber2 = '+918757404504'; // Replace with your phone number
  const whatsappURL2 = `https://wa.me/${phoneNumber2}`;

  const handleWhatsAppClick2 = () => {
      window.location.href = whatsappURL2;
  };

  useEffect(() => {
      // Check if the user is on a mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      // If not on a mobile device, prevent default behavior (opening link in new tab)
      if (!isMobile) {
          document.querySelectorAll('a.whatsapp-button').forEach(link => {
              link.addEventListener('click', (e) => {
                  e.preventDefault();
              });
          });
      }
  }, []);
  const handleCallUs1 = () => {
    // Use the tel URI scheme to initiate a phone call
    window.open('tel:+918898533370', '_self');
  };
  const handleCallUs2 = () => {
    // Use the tel URI scheme to initiate a phone call
    window.open('tel:+918757404504', '_self');
  };
  return (
    <div className='mt-8'> 
    <h1 className='text-8xl text-center font-bold '>
    Meet the Masters of 
    <br/>Interior Design
    </h1>
    <div className="w-full border-t border-gray-300 my-4"></div>
    <p className='text-2xl text-center '>One Team, Infinite Possibilities</p>
    <div class="flex flex-col md:flex-row justify-around items-center p-4 space-y-6 md:space-y-0 md:space-x-6">  
</div>
<div className="flex flex-col md:flex-row justify-around items-center p-4 space-y-6 md:space-y-0 md:space-x-6">
      {/* CEO Section */}
      <div className="text-center flex flex-col gap-1 justify-around items-center">
    <p className="font-bold mb-2">CEO</p>
    <img src={IMG1} alt="CEO" className="w-48 h-60 object-cover rounded-md mb-2" />

    <button className="icon-button inline-flex items-center border border-gray-300 rounded-full p-3 bg-green-500 text-white" onClick={handleCallUs1}>
        <i className="fas fa-phone-alt text-xl mr-2"></i>
        <span>Contact: +918898533370</span>
    </button>

    <a href={whatsappURL1} className="whatsapp-button inline-flex items-center border border-green-500 rounded-full p-3 bg-green-500 text-white" onClick={handleWhatsAppClick1}>
        <i className="fab fa-whatsapp text-xl mr-2"></i>
        <span>Message me on WhatsApp</span>
    </a>
</div>


      {/* CTO Section */}
      <div className="text-center flex flex-col gap-1 justify-around items-center">
        <p className="font-bold mb-2">CTO</p>
        <img src= {IMG2} alt="CTO" className="w-48 h-60 object-cover rounded-md mb-2" />
      
        <button className="icon-button inline-flex items-center border border-gray-300 rounded-full p-3 bg-green-500 text-white" onClick={handleCallUs2}>
    <i className="fas fa-phone-alt text-xl mr-2"></i>
    <span>Contact: +918757404504</span>
</button>
 <a href={whatsappURL2} className="whatsapp-button inline-flex items-center border border-green-500 rounded-full p-3 bg-green-500 text-white" onClick={handleWhatsAppClick2}>
            <i className="fab fa-whatsapp text-xl mr-2"></i>
            <span>Message me on WhatsApp</span>
        </a>

 
 
      </div>
    </div>

    
    </div>
  )
}
