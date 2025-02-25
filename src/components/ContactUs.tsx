"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ContactUs: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = { name, email, message };
  
    try {
      const response = await fetch('http://localhost:3001/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        console.log('Message sent successfully');
        // Optionally, clear the form or show a success message
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen text-white p-8 laptop:p-16 relative">
      <div className="absolute inset-0 z-0 h-full w-full bg-[#0E0F0C] bg-[linear-gradient(to_right,#B0E681_1px,transparent_1px),linear-gradient(to_bottom,#B0E681_1px,transparent_1px)] bg-[size:34px_34px] opacity-5"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <button onClick={() => router.back()} className="mb-4 cursor-pointer text-[#b0e681]">
          ← Back
        </button>
        <h1 className="text-4xl laptop:text-6xl font-nohemi400 mb-8 text-[#b0e681]">Contact Us</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-lg">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 bg-[#1F1F1F] border border-[#31373F66] text-white rounded-md" 
              placeholder="Your Name" 
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-lg">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 bg-[#1F1F1F] border border-[#31373F66] text-white rounded-md" 
              placeholder="Your Email" 
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-lg">Message</label>
            <textarea 
              id="message" 
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 bg-[#1F1F1F] border border-[#31373F66] text-white rounded-md" 
              placeholder="Your Message" 
              rows={5}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="self-end bg-[#b0e681] text-black px-6 py-3 mt-4 rounded-md flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs; 