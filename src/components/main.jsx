import React, { useState } from 'react';
import axios from 'axios';

export default function Main() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData); // Log form data before submission
      // Send form data to the backend server
      await axios.post('/api/contact', formData);
      alert('Your message has been sent successfully!');
      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  const handleCallUs = () => {
    // Use the tel URI scheme to initiate a phone call
    window.open('tel:+918898533370', '_self');
  };

  return (
    <div className="flex flex-col bg-white justify-center md:flex-row h-full p-4 md:p-10 z-20">
    
      {/* Left side section */}
      <div className="flex flex-col justify-around gap-3 mt-10  " style={{ marginTop: '100px'}}>
        <div className="flex items-center justify-center md:w-1/10 mb-6 md:mb-0">
          <div className="bg-white bg-opacity-30 text-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl mb-4 text-black" style={{ color: '' }}>Contact Us</h2>
            <p className="mb-6 text-black" style={{ color: '#545454' }}>
              We are here to assist you with any inquiries or concerns you may have.
              <br />Please feel free to reach out to us.
            </p>
            <p className="mb-6 text-black" style={{ color: '#545454' }}>
              ADDRESS: ShantiNiketan Building, NewLink Road,
              <br /> Laljipada, Kandivali West, Mumbai, 400067
            </p>
            <p className="mb-6 text-black font-bold gap-4">
              WE ARE OPEN: <span>Mn-Fr: 10 am-8 pm</span>
            </p>
            <button
              className="bg-transparent border border-white text-black py-2 px-4 rounded-lg hover:bg-white hover:text-black transition"
              onClick={handleCallUs}
              style={{ color: '#545454' }}
            >
              Call Us: +918898533370
            </button>
          </div>
        </div>
        <div>
          {/* Add map here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8318139593157!2d72.83118887498075!3d19.202546882028305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c419557159%3A0xf384cf59d8c13d4!2sShri%20Niketan%20Building!5e0!3m2!1sen!2sin!4v1715882741662!5m2!1sen!2sin"
            width="520"
            height="225"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Right side form */}
      <div className="flex items-center h-3/4 justify-center md:w-1/2" style={{ marginTop: '100px'}}>
        <form className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl mb-6" style={{ color: '#2D2D2D' }}>Get In Touch</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" style={{ color: '#545454', textTransform: 'uppercase' }} htmlFor="name">
              Name*
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className='flex gap-4'>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" style={{ color: '#545454', textTransform: 'uppercase' }} htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border rounded"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" style={{ color: '#545454', textTransform: 'uppercase' }} htmlFor="phone">
                Phone*
              </label>
              <input
                className="w-full p-2 border rounded"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" style={{ color: '#545454', textTransform: 'uppercase' }} htmlFor="subject">
              Subject*
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2" style={{ color: '#545454', textTransform: 'uppercase' }} htmlFor="message">
              Message*
            </label>
            <textarea
              className="w-full p-2 border rounded"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-full">
            Request Consultation
          </button>
        </form>
      </div>
    </div>
  );
}
