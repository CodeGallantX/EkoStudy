import React, { useState } from 'react';
import Whatsapp from './Icons/Whatsapp';
import AIBotChat from './AIBotChat';

const App = () => {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div>
            <a 
                href='#' 
                onClick={toggleChat} 
                className='group right-2 bottom-4 fixed z-20 flex flex-row items-center px-4 py-2 gap-2 bg-transparent lg:bg-white shadow-none lg:shadow-lg rounded-full'
            >
                <Whatsapp />
                <span className='hidden lg:inline-block text-[#92B76D] group-hover:text-[#FFCA0D] transition-all duration-300 ease'>
                    Book a Study Session
                </span>
            </a>

            {showChat && <AIBotChat toggleChat={toggleChat} />}
        </div>
    );
};

export default App;
