import React from 'react';
// import doodle from 'https://img.freepik.com/premium-vector/education-pattern-background-vector-doodle-style_1058435-25.jpg?semt=ais_hybrid'; // Update with your doodle image path

const AIBotChat = ({ toggleChat }) => {
  return (
    <div className="fixed bottom-16 right-4 z-50 shadow-lg transition-transform transform hover:scale-105">
      <div className="bg-white rounded-lg shadow-lg w-80 md:w-96 lg:w-1/3 relative overflow-hidden border border-[#25D366]">
        {/* Header Section */}
        <div className="bg-[#25D366] text-white flex items-center p-4 rounded-t-lg transition duration-300 ease-in-out">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <img
              src="https://img.freepik.com/premium-photo/small-robot_1272475-10178.jpg?uid=R101644944&ga=GA1.1.749853384.1712498620&semt=ais_hybrid"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="font-bold text-lg">Jayden</p>
            <p className="text-xs">How can I assist you today?</p>
          </div>
          <button
            className="text-xl font-bold text-white hover:text-red-400"
            onClick={toggleChat}
          >
            ×
          </button>
        </div>

        {/* Chat Body Section */}
        <div className="p-4 overflow-y-auto max-h-60 bg-white rounded-b-lg">
          {/* <img src={doodle} alt="Doodle" className="absolute top-2 left-2 w-12 opacity-50" /> */}
          <div className="bg-gray-100 p-3 rounded-lg text-sm mb-2 shadow-sm transition-transform duration-200 ease-in-out">
            <p>Hey there! 👋 Ready to take your studies to the next level?</p>
            <p className="mt-1">Book an in-person tutorial today and let’s tackle those tricky topics together.</p>
            <p className="mt-1">I’m here to help, and don’t worry, we respond fast! 😊</p>
          </div>
          <div className="text-xs text-right text-gray-400">1:40 PM</div>
        </div>

        {/* Input Section */}
        <div className="p-3 border-t border-gray-300 bg-white">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring focus:ring-[#25D366] transition duration-200 ease-in-out"
            placeholder="Type a message..."
            maxLength="120"
            rows="2"
          ></textarea>
          <button className="mt-2 bg-[#25D366] text-white p-2 rounded-lg w-full flex justify-center items-center transition-transform hover:bg-[#128C7E]">
            Send
            <svg
              className="ml-2 w-4 h-4"
              viewBox="0 0 448 448"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIBotChat;