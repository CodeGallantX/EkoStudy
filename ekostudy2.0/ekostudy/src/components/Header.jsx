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
      <header className='bg-[#4c5f4e] flex flex-row items-center justify-between px-10 xl:px-24 py-6 z-40'>
        <div>
          <img src="/logo.png" alt="EkoStudy logo" className="h-10" />
        </div>
        <nav className='hidden lg:flex'>
          <ul className='flex flex-row gap-8'>
            <li className="text-[#ffca0d] cursor-pointer font-bold">
              <Link to="/">HOME</Link>
            </li>
            <li className="text-white cursor-pointer font-bold">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="text-white cursor-pointer font-bold">
              <Link to="/academics">ACADEMICS</Link>
            </li>
            <li className="text-white cursor-pointer font-bold">
              <Link to="/resources">RESOURCES</Link>
            </li>
            <li className="text-white cursor-pointer font-bold">
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
            className="block lg:hidden fixed inset-0 bg-black opacity-50 transition-opacity duration-200 ease-in-out z-30" 
            onClick={hideSideBar}
          />
          <nav className={`lg:hidden fixed top-0 left-0 h-full bg-[#4c5f4e] w-1/2 flex flex-col items-start p-4 transition-transform duration-300 ease-in-out z-40 transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
            <div onClick={hideSideBar} className="cursor-pointer my-4 flex flex-row items-center justify-between w-full">
              <img src="/logo.png" alt="EkoStudy logo" className="w-32 md:w-40" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="26" viewBox="0 -960 960 960" width="26">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </div>
            <ul>
              <li className="py-2 text-lg text-white hover:text-[#ffca0d] transition duration-200">
                <Link to="/" onClick={hideSideBar}>HOME</Link>
              </li>
              <li className="py-2 text-lg text-white hover:text-[#ffca0d] transition duration-200">
                <Link to="/about" onClick={hideSideBar}>ABOUT</Link>
              </li>
              <li className="py-2 text-lg text-white cursor-pointer transition duration-200" onMouseEnter={toggleAcademics} aria-expanded={isAcademicsOpen} aria-controls="academics-list">
                <Link to="/academics">ACADEMICS</Link>
              </li>
              {isAcademicsOpen && (
                <ul id="academics-list" className="pl-4">
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
              <li className="py-2 text-lg text-white cursor-pointer transition duration-200" onMouseEnter={toggleResources} aria-expanded={isResourcesOpen} aria-controls="resources-list">
                <Link to="/resources">RESOURCES</Link>
              </li>
              {isResourcesOpen && (
                <ul id="resources-list" className="pl-4">
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
                <button className='border-2 border-white px-8 py-2 my-4 text-white font-bold'>
                  SIGN IN
                </button>
              </Link>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;