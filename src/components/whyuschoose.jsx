import React, { useState } from 'react';
import IMG5 from '../assets/Image/IMG5.jpg';

export default function WhyUsChoose() {
  const [selectedReason, setSelectedReason] = useState('');

  const handleReasonClick = (reason) => {
    if (selectedReason === reason) {
      // If the clicked reason is the same as the selected reason, clear the selected reason
      setSelectedReason('');
    } else {
      // Otherwise, set the clicked reason as the selected reason
      setSelectedReason(reason);
    }
  };

  const reasons = [
    { title: "Turnkey Projects", description: "At Home Makers, we undertake turnkey projects in our blanket. Right from designing to execution, we offer end-to-end solutions i.e. Designs, Materials + Labour And Supervision with complete transparency. A one-stop-shop for your entire interior needs." },
    { title: "Reasonable Price", description: "We provide high-quality services at a reasonable price to ensure that you get the best value for your money." },
    { title: "Free Consultation", description: "We offer free consultation services to help you understand the scope of your project and the best ways to achieve your goals." },
    { title: "'N’ Number Of Designs", description: "Choose from an extensive range of designs that cater to all tastes and preferences, ensuring you find exactly what you need." },
    { title: "24/7 Support", description: "Our support team is available 24/7 to assist you with any queries or issues you may have." },
    { title: "Warranty", description: "We offer a warranty on our services to provide you with peace of mind and assurance of quality." }
  ];

  return (
    <div className="flex flex-col bg-white justify-center md:flex-row h-full p-4 md:p-10 z-20" style={{ backgroundColor: '#f5f6f6' }}>
      {/* Left side section */}
      <div className="flex items-center justify-center md:w-1/2 mb-6 md:mb-0">
        {/* Image Placeholder */}
        <img src={IMG5} alt="Why Choose Us" className="max-w-full h-auto" />
      </div>

      {/* Right side reasons */}
      <div className="flex flex-col md:w-1/2 justify-center md:px-8">
        <h2 className="text-3xl mb-6" style={{ color: '#545454' }}>Why Choose Us</h2>
        <h1 className='text-4xl' style={{ color: '#2D2D2D' }}>Extremely high standard of
          <br /> customer satisfaction</h1>
        <ul className="mb-6 text-lg list-disc pl-4"> {/* Added list-disc for bullet points */}
          {reasons.map((reason, index) => (
            <li key={index} className="mb-3 cursor-pointer" onClick={() => handleReasonClick(reason.title)}>
              <span className="font-semibold">{reason.title}</span>
              {/* If the reason is selected, show the description */}
              {selectedReason === reason.title && (
                <p className="mt-2 text-base text-gray-700">{reason.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
