import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPaperPlane } from 'react-icons/fa';

const RightFooterContent = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to send message. Please try again later.');
      })
  };

  const inputStyle = `w-full rounded-md px-4 py-2 mb-4 outline-none transition-colors duration-300 ${
    isDarkMode
      ? 'bg-[#1e293b] text-white placeholder-gray-400'
      : 'bg-gray-100 text-black placeholder-gray-500'
  }`;

  const buttonStyle = `font-semibold py-2 px-4 rounded-md flex justify-center items-center gap-2 transition-colors duration-300 ${
    isDarkMode
      ? 'bg-blue-600 hover:bg-blue-400 text-white'
      : 'bg-orange-500 hover:bg-orange-700 text-white'
  }`;

  return (
<div className="w-full max-w-full sm:max-w-lg px-4 sm:pl-4">
      <h2
        className={`text-3xl sm:text-5xl font-bold mb-2 ${
          isDarkMode ? 'text-white' : 'text-black'
        } text-left`}
      >
        Send a Message
      </h2>
      <div className='relative z-20 pointer-events-auto'>

      
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={inputStyle}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={inputStyle}
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={inputStyle}
          required
        />

        <button type="submit" className={buttonStyle}>
          Send Message <FaPaperPlane />
        </button>
      </form>
      </div>
    </div>
  );
};

export default RightFooterContent;
