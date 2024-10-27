
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Successfully Sent*');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending your message');
    }
  };

  return (
    <footer name='contact' className='w-full min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4 text-white'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Send me a message</p>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input
            className='bg-[#ccd6f6] p-2 mb-4'
            type="text"
            placeholder='Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className='bg-[#ccd6f6] p-2 mb-4'
            type="email"
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className='bg-[#ccd6f6] p-2 mb-4'
            name="message"
            rows="10"
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center' type='submit'>
            Let's Collaborate
          </button>
        </form>
      </div>
      {/* <p className="text-sm mt-auto">&copy; All right reserved 2024<br />Made Using React.js</p> */}
    </footer>
  );
};

export default Contact;

