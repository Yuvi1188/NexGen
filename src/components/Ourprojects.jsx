import React from 'react';
import IMG1 from '../assets/Image/Project1.jpg'
import IMG2 from '../assets/Image/Project2.jpg'
import IMG3 from '../assets/Image/Project3.jpg'
import IMG4 from '../assets/Image/Project4.jpg'
import IMG5 from '../assets/Image/Project5.jpg'
import IMG6 from '../assets/Image/Project6.jpg'
const servicesData = [
  {
    id: 1,
    title: 'Radisson Blu',
    
    image: IMG1 , // Example image URL
  },
  {
    id: 2,
    title: 'Taj Hotel',
 
    image: IMG2, // Example image URL
  },
  {
    id: 3,
    title: 'Service 3',
     
    image: IMG3, // Example image URL
  },
  {
    id: 4,
    title: 'Service 4',
 
    image: IMG4, // Example image URL
  },
  {
    id: 5,
    title: 'Service 5',
 
    image:  IMG5, // Example image URL
  },
  {
    id: 6,
    title: 'Service 6',
    
    image: IMG6, // Example image URL
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center" style={{ backgroundColor: '#f5f6f6' }}>
      <p className="text-xl mt-10">OUR PROJECTS</p>
      <h1 className="text-3xl mt-2 mb-10">Explore our project designs</h1>
 
      <div className="flex flex-wrap justify-center gap-5 p-4 mt-4">
      
      {servicesData.map(service => (
        <div key={service.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center justify-between hover:scale-105 transition duration-300 ease-in p-4 rounded-xl outline">
          
           
       <p className="text-gray-700 font-semibold text-lg text-center w-40 mt-1" style={{ color: '#2D2D2D' }}> {service.title}</p>
           
           
          <div className="h-42">
            <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
          </div>
          {/* Additional content or actions */}
          <div className="flex justify-between w-full mt-5">
            {/* Add additional content or actions here */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
