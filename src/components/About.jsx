import React from "react";
import about from "../assets/Image/about.jpg";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 mt-10">
        {/* Left side image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src={about} alt="Company Logo" className="w-3/4 md:w-1/2 h-auto" />
        </div>
        {/* Right side "About Us" box */}
        <div className="w-full  mt-10 md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left">About NexGen Interior</h1>
          <p className="text-lg mb-6 text-center md:text-left">
            NexGen Interior is a leading interior design firm dedicated to
            transforming spaces into exceptional environments. With a team of
            highly skilled designers and decorators, we specialize in creating
            beautiful and functional spaces for both residential and commercial
            clients.
          </p>
          <p className="text-lg mb-6 text-center md:text-left">
            At NexGen Interior, we believe that good design has the power to
            enhance the quality of life. Our mission is to bring our clients'
            vision to life by incorporating innovative design concepts,
            meticulous attention to detail, and superior craftsmanship into
            every project we undertake.
          </p>
          <p className="text-lg mb-6 text-center md:text-left">
            Whether you're looking to redesign your home, office, or retail
            space, we are committed to delivering exceptional results that
            exceed your expectations. From concept to completion, we work
            closely with our clients to understand their unique needs and
            preferences, ensuring that every project reflects their personality
            and style.
          </p>
          <p className="text-lg text-center md:text-left">
            Experience the difference with NexGen Interior and let us transform
            your space into a masterpiece that inspires and delights.
          </p>
        </div>
      </div>
    </div>
  );
}