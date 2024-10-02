import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isAcademicsOpen, setAcademicsOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);

  const showSideBar = () => setSidebarVisible(true);
  const hideSideBar = () => {
    setSidebarVisible(false);
    setAcademicsOpen(false);
    setResourcesOpen(false);
  };
  const toggleAcademics = () => setAcademicsOpen(prev => !prev);
  const toggleResources = () => setResourcesOpen(prev => !prev);

  return (
    <>
      <header className='bg-[#4c5f4e] flex flex-row items-center justify-between py-4 lg:py-0 px-10 xl:px-24 z-40'>
        <div>
          <img src="/logo.png" alt="EkoStudy logo" className="h-10" />
        </div>
        <nav className='hidden lg:flex relative'>
          <ul className='flex flex-row gap-8'>
            <li className="text-[#ffca0d] cursor-pointer font-bold py-8">
              <Link to="/">HOME</Link>
            </li>
            <li className="text-white cursor-pointer font-bold py-8">
              <Link to="/about">ABOUT</Link>
            </li>
            <li 
              className="text-white cursor-pointer font-bold relative py-8"
              onMouseEnter={toggleAcademics} 
              onMouseLeave={toggleAcademics}
            >
              ACADEMICS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                className='inline-block ml-1 mb-1'
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="sharp"
                strokeLinejoin="miter">
                  <polyline points="6 9 12 15 18 9"></polyline>
              </svg>

              <ul className={`absolute left-0 -ml-4 mt-8 w-40 bg-[#4c5f4e] text-white px-5 shadow-lg z-30 border-t-2 border-t-[#ffca0d] border-solid transition-all duration-300 ease-in-out transform ${isAcademicsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <li className="py-2 hover:text-[#ffca0d] transition duration-200">
                  <Link to="/academics/course1" onClick={hideSideBar}>Course 1</Link>
                </li>
                <li className="py-2 hover:text-[#ffca0d] transition duration-200">
                  <Link to="/academics/course2" onClick={hideSideBar}>Course 2</Link>
                </li>
                <li className="py-2 hover:text-[#ffca0d] transition duration-200">
                  <Link to="/academics/course3" onClick={hideSideBar}>Course 3</Link>
                </li>
              </ul>
            </li>
            <li 
              className="text-white cursor-pointer font-bold relative py-8 px-2"
              onMouseEnter={toggleResources} 
              onMouseLeave={toggleResources}
            >
              RESOURCES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                className='inline-block ml-1 mb-1'
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="sharp"
                strokeLinejoin="miter">
                  <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <ul className={`absolute left-0 -ml-4 mt-8 w-40 bg-[#4c5f4e] text-white px-5 shadow-lg z-30 border-t-2 border-t-[#ffca0d] border-solid transition-all duration-300 ease-in-out transform ${isResourcesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <li className="py-2 hover:text-[#ffca0d] transition duration-200">
                  <Link to="/resources/resource1" onClick={hideSideBar}>Resource 1</Link>
                </li>
                <li className="py-2 hover:text-[#ffca0d] transition duration-200">
                  <Link to="/resources/resource2" onClick={hideSideBar}>Resource 2</Link>
                </li>
                <li className="py-2 hover:text-[#ffca0d] transition duration-200">
                  <Link to="/resources/resource3" onClick={hideSideBar}>Resource 3</Link>
                </li>
              </ul>
            </li>
            <li className="text-white cursor-pointer font-bold py-8">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
        <Link to="/signin" onClick={hideSideBar}>
          <button className='hidden lg:inline-block border-2 border-white px-8 py-2 text-white font-bold'>
              SIGN IN
          </button>
        </Link>
        <button className="lg:hidden" onClick={showSideBar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width={28} height={28} viewBox="0 -960 960 960">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </header>

      {isSidebarVisible && (
        <>
          <div 
            className={`block lg:hidden fixed inset-0 bg-black opacity-50 transition-opacity duration-200 ease-in-out z-30`} 
            onClick={hideSideBar}
          />
          <ul
            className={`lg:hidden fixed top-0 left-0 h-full bg-[#4c5f4e] w-1/2 flex flex-col items-start p-4 transition-transform duration-300 ease-in-out z-40 transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}
          > 
            <li onClick={hideSideBar} className="cursor-pointer my-4 flex flex-row items-center justify-between w-full">
                <img src="/logo.png" alt="EkoStudy logo" className="w-32 md:w-40" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="26" viewBox="0 -960 960 960" width="26">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
            <li className="py-2 text-lg text-white hover:text-[#ffca0d] transition duration-200">
              <Link to="/" onClick={hideSideBar}>HOME</Link>
            </li>
            <li className="py-2 text-lg text-white hover:text-[#ffca0d] transition duration-200">
              <Link to="/about" onClick={hideSideBar}>ABOUT</Link>
            </li>
            <li className="py-2 text-lg text-white cursor-pointer transition duration-200" onClick={toggleAcademics}>
              ACADEMICS
            </li>
            {isAcademicsOpen && (
              <ul className="pl-4">
                <li className="py-1 text-white hover:text-[#ffca0d] transition duration-200">
                  <Link to="/academics/course1" onClick={hideSideBar}>Course 1</Link>
                </li>
                <li className="py-1 text-white hover:text-[#ffca0d] transition duration-200">
                  <Link to="/academics/course2" onClick={hideSideBar}>Course 2</Link>
                </li>
                <li className="py-1 text-white hover:text-[#ffca0d] transition duration-200">
                  <Link to="/academics/course3" onClick={hideSideBar}>Course 3</Link>
                </li>
              </ul>
            )}
            <li className="py-2 text-lg text-white cursor-pointer transition duration-200" onClick={toggleResources}>
              RESOURCES
            </li>
            {isResourcesOpen && (
              <ul className="pl-4">
                <li className="py-1 text-white hover:text-[#ffca0d] transition duration-200">
                  <Link to="/resources/resource1" onClick={hideSideBar}>Resource 1</Link>
                </li>
                <li className="py-1 text-white hover:text-[#ffca0d] transition duration-200">
                  <Link to="/resources/resource2" onClick={hideSideBar}>Resource 2</Link>
                </li>
                <li className="py-1 text-white hover:text-[#ffca0d] transition duration-200">
                  <Link to="/resources/resource3" onClick={hideSideBar}>Resource 3</Link>
                </li>
              </ul>
            )}
            <li className="py-2 text-lg text-white hover:text-[#ffca0d] transition duration-200">
              <Link to="/contact" onClick={hideSideBar}>CONTACT</Link>
            </li>
            <Link to="/signin" onClick={hideSideBar}>
              <button className='border-2 border-white px-6 py-2 mt-8 text-white'>
                SIGN IN
              </button>
            </Link>
          </ul>
        </>
      )}
    </>
  );
};

export default Header;
