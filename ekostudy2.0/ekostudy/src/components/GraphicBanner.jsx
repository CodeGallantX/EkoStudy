import React from 'react';
import { Link } from 'react-router-dom';

const GraphicBanner = ({ page }) => {
  return (
    <div className="relative bg-[#e8ede6] w-full h-[250px] flex flex-col justify-center items-start px-10 xl:px-24">
      <div className="absolute bg-[#e6e1d1] w-[250px] h-[100px] bottom-0 left-1/2 transform -translate-x-1/2"></div>
      <div className="text-left z-10 mt-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-4">{page.title}</h2>

        <nav aria-label="breadcrumb" className="text-sm text-gray-600">
          <ol className="list-reset flex space-x-2">
            <li>
              <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            </li>
            <li>/</li>
            {page.breadcrumb.map((crumb, index) => (
              <React.Fragment key={index}>
                {/* Breadcrumb link */}
                <li>
                  {crumb.path ? (
                    <Link to={crumb.path} className="text-blue-600 hover:underline">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-gray-500">{crumb.name}</span>
                  )}
                </li>
                {index < page.breadcrumb.length - 1 && <li>/</li>}
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default GraphicBanner;
