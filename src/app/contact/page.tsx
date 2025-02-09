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

  // return (
  //   <div className="w-full h-full flex justify-center items-center">
  //   <form onSubmit={handleSubmit} className="max-w-lg max-h-96 mx-auto p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
  //     <div className="mb-4">
  //       <label htmlFor="name" className="block text-gray-700 font-bold dark:text-white mb-2">
  //         Name:
  //       </label>
  //       <input
  //         type="text"
  //         id="name"
  //         name="name"
  //         value={formData.name}
  //         onChange={handleChange}
  //         className="w-full p-2 border dark:border-gray-800 border-gray-300 rounded-md" 
  //       />
  //     </div>
  //     <div className="mb-4">
  //       <label htmlFor="email" className="block text-gray-700 font-bold mb-2 dark:text-white">
  //         Email:
  //       </label>
  //       <input
  //         type="email"
  //         id="email"
  //         name="email"
  //         value={formData.email}
  //         onChange={handleChange}
  //         className="w-full p-2 border dark:border-gray-800 border-gray-300 rounded-md"
  //       />
  //     </div>
  //     <div className="mb-4">
  //       <label htmlFor="message" className="block dark:text-white text-gray-700 font-bold mb-2">
  //         Message:
  //       </label>
  //       <textarea
  //         id="message"
  //         name="message"
  //         value={formData.message}
  //         onChange={handleChange}
  //         className="w-full p-2 border dark:border-gray-800 border-gray-300 rounded-md"
  //       ></textarea>
  //     </div>
  //     <div className="text-center">
  //       <button
  //         type="submit"
  //         className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
  //       >
  //         Send Message
  //       </button>
  //     </div>
  //   </form>
  // </div>
  // );

return (
    <>
  {/* Contact Us */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
          Contact us
        </h1>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          We would love to talk about how we can help you.
        </p>
      </div>
    </div>
    <div className="mt-12 max-w-lg mx-auto">
      {/* Card */}
      <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
        <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
          Fill in the form
        </h2>
        <form>
          <div className="grid gap-4 lg:gap-6">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-firstname-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="hs-firstname-contacts-1"
                  id="hs-firstname-contacts-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
              <div>
                <label
                  htmlFor="hs-lastname-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="hs-lastname-contacts-1"
                  id="hs-lastname-contacts-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>
            {/* End Grid */}
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-email-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="hs-email-contacts-1"
                  id="hs-email-contacts-1"
                  autoComplete="email"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
              <div>
                <label
                  htmlFor="hs-phone-number-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="hs-phone-number-1"
                  id="hs-phone-number-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>
            {/* End Grid */}
            <div>
              <label
                htmlFor="hs-about-contacts-1"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                Details
              </label>
              <textarea
                id="hs-about-contacts-1"
                name="hs-about-contacts-1"
                rows={4}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                defaultValue={""}
              />
            </div>
          </div>
          {/* End Grid */}
          <div className="mt-6 grid">
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Send inquiry
            </button>
          </div>
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              We will get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div>
      {/* End Card */}
    </div>
    {/* End Contact Us */}
  </div>
</>
  )
};

export default ContactForm;

