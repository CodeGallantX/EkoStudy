import React from 'react'

const App = () => {
  return (
    <button onClick={window.location.href = '/signup'} className="mt-4 lg:mt-0 text-lg xl:text-xl font-bold px-8 py-4 bg-[#FFCA0D] leading-none hover:bg-[#92B76D] transition-all duration-300 ease-in-out">
        GET STARTED
    </button>
  )
}

export default App;