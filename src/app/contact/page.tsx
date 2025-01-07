"use client"

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
    <form onSubmit={handleSubmit} className="max-w-lg max-h-96 mx-auto p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold dark:text-white mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border dark:border-gray-800 border-gray-300 rounded-md" 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2 dark:text-white">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border dark:border-gray-800 border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block dark:text-white text-gray-700 font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border dark:border-gray-800 border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
  );
};

export default ContactForm;

