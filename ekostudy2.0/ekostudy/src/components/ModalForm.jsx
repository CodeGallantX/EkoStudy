import React, { useState } from 'react';

const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={toggleModal}
        className="fixed bottom-0 group left-1/2 -translate-x-24 bg-[#92B76D] text-white py-3 px-4 rounded-t-xl translate-y-10 hover:-translate-y-0 transition duration-300"
      >
        <span className='absolute -top-2 z-20 left-1/2 -translate-x-10 rounded-t-2xl w-20 h-4 bg-[#92B76D]'></span>
        Subscribe to Newsletter
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="p-8 bg-white shadow-lg w-full max-w-md lg:max-w-lg xl:max-w-3xl">
          <button
              onClick={toggleModal}
              className=" bg-red-600 text-white py-2 px-4 hover:bg-red-700 transition float-right"
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="mt-1 block w-full p-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-[#92B76D] focus:border-[#92B76D] sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="mt-1 block w-full p-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-[#92B76D] focus:border-[#92B76D] sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="bg-[#92B76D] w-full text-white p-4 hover:bg-[#ffca0d] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
