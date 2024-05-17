import React, { useState, useEffect } from 'react';
import '../SlidingImages.css'; // Import the CSS file for animations
import IMG1 from '../assets/Image/IMG1.jpg'
import IMG2 from '../assets/Image/IMG2.jpg'
import IMG3 from '../assets/Image/IMG3.jpg'
import IMG4 from '../assets/Image/IMG4.jpg'

function SlidingImages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define an array of image URLs and corresponding quotes
  const images = [
    { url: IMG1 , quote: 'Design is not just what it looks like and feels like. Design is how it works. ' },
    { url:  IMG2, quote: 'The details are not the details. They make the design.  ' },
    { url:  IMG3, quote: 'Simplicity is the ultimate sophistication. ' },
    { url: IMG4 , quote: 'Your home should tell the story of who you are, and be a collection of what you love. ' },
  ];

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ height: '85vh' }}>
      <div className="absolute inset-0 animate-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={`relative h-full bg-cover bg-center ${currentIndex === index ? 'zoom-image' : ''}`} style={{ backgroundImage: `url(${image.url})` }}>
            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <p className="font-bold text-3xl md:text-lg lg:text-3xl xl:text-3xl">{image.quote}</p>

            </div>
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 px-4 py-2 rounded-full" onClick={prevImage}>
        &lt;
      </button>
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 px-4 py-2 rounded-full" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
}

export default SlidingImages;
