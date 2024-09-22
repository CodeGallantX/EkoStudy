import React from 'react';

const GraphicBanner = ({ page }) => {
  return (
    <div className="relative bg-[#e8ede6] w-full h-[420px] flex flex-col justify-center items-center">
      <div className="absolute bg-[#e6e1d1] w-[450px] h-[300px] bottom-0 left-1/2 transform -translate-x-1/2"></div>
      <div className="text-center z-10 mt-10">
        <h2 className="text-7xl font-bold mb-8">{page.title}</h2>
        <p className="text-2xl mx-auto w-4/5">{page.description}</p>
      </div>
    </div>
  );
}

export default GraphicBanner;
