import React from 'react';
  import IMG1 from '../assets/Image/1.jpg'
  import IMG2 from '../assets/Image/2.jpeg'
  import IMG3 from '../assets/Image/3.jpeg'
  import IMG4 from '../assets/Image/4.jpg'
  import IMG5 from '../assets/Image/5.jpg'
  import IMG6 from '../assets/Image/6.jpg'
const servicesData = [
  {
    id: 1,
    title: 'Architectural Interior Designers',
    description: 'Architectural interior designers craft captivating spaces that harmonize aesthetics with functionality, merging creativity and technical precision to transform architectural structures into immersive environments that inspire and enrich the human experience.',
    image: IMG1, // Example image URL
  },
  {
    id: 2,
    title: 'Global interior design for NRIs.',
    description: 'Tailored for Non-Resident Indians, our global interior design service crafts stylish and functional spaces that resonate with their unique preferences and lifestyle, regardless of location',
    image: IMG2, // Example image URL
  },
  {
    id: 3,
    title: 'Vastu Shastra for Interior Design',
    description: 'Vastu literally means “house” or the place where one is residing. The principles of Vastu establish to create harmony between five elements – fire, earth, sky, wat',
    image: IMG3, // Example image URL
  },
  {
    id: 4,
    title: 'Designers specialize in restaurant interiors',
    description: 'In the restaurant business, decor and ambiance are the most important factors that can make it or break it for Service ',
    image: IMG4, // Example image URL
  },
  {
    id: 5,
    title: 'Office Interior Designers ',
    description: 'Achieving the desired ambiance for your home or commercial space can be challenging, but we are here to help bring your vision to life.',
    image: IMG5, // Example image URL
  },
  {
    id: 6,
    title: 'Residential Interior Designers ',
    description: 'NexGen Interiors’ residential interior design portfolio displays a wide and variable range of actual photos of the projects we have accomplished so fa',
    image: IMG6, // Example image URL
  },
];

export default function Services() {
  return (
    <div className='border rounded-sm bg-white'> 

   <div className='mt-32' >
   <p className='text-center justify-center mt-10  text-xl ' style={{ color: '#545454' }}>OUR SERVICES</p>
      <h1 className='text-center justify-center mt-auto text-5xl' style={{ color: '#2D2D2D' }}>
      We Provide More Than Just
      <br/> Quality Services
      </h1>
    <div className="flex flex-wrap justify-center gap-5 p-4 mt-4">
      
      {servicesData.map(service => (
        <div key={service.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center justify-between hover:scale-105 transition duration-300 ease-in p-4 rounded-xl outline">
          <div className='flex gap-2'> 
          <div class="w-12 h-12 bg-green-300 rounded-full flex justify-center items-center text-white font-bold"></div>
       <p className="text-gray-700 font-semibold text-lg text-center w-40 mt-1" style={{ color: '#2D2D2D' }}> {service.title}</p>
          </div>
          <div>
            <p className="w-40  font-normal text-sm text-center" style={{ color: '#545454' }}>{service.description.split(" ").slice(0,10).join(" ") + "..."}</p>
          </div>
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


    </div>
  );
}
