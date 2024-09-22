import React from 'react'; 
import { Link } from 'react-router-dom';
import GetStartedBtn from './GetStartedBtn';

const FooterBanner = () => {
  return (
    <div className="relative px-10 xl:px-24 translate-y-24 lg:translate-y-16 xl:translate-y-32">
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-5 sm:px-6 py-4 lg:px-8 lg:py-8 xl:px-20 xl:py-20 bg-[url('https://ik.imagekit.io/mshcgnjju/EkoStudy/FooterBannerBG.bmp')] bg-cover bg-fixed object-cover no-repeat">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center lg:text-left lg:flex-row lg:justify-between w-full">
          <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] xl:text-[64px] text-white font-bold leading-none">Discover, Learn, Achieve</h2>
          <Link to="/">
            <GetStartedBtn />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
