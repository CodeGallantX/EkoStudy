import React from 'react';
import Header from '../components/Header';
import GraphicBanner from '../components/GraphicBanner';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const App = () => {
  const page = {
    title: 'Blog',
    breadcrumb: [
      {name: 'Blog', path: '/blog'},
    ]
  }

  return (
    <div className="font-sans">
      <Helmet>
        <meta name="description" content="Welcome to my website" />
      </Helmet>
      <Header />
      <GraphicBanner page={page} />



      <main>
      {/* Blog Stories Banner Area Start */}
      <section className="relative pt-32 pb-16 bg-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('assets/img/blog/blog-stories/blog-stories-bg.png')" }}
        ></div>
        <div className="container mx-auto relative">
          <div className="flex items-center">
            <div className="w-full">
              <div className="mb-8">
                <div className="flex space-x-2">
                  <a href="index.html">
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.07207 0C8.19331 0 8.31107 0.0404348 8.40664 0.114882L16.1539 6.14233L15.4847 6.98713L14.5385 6.25079V12.8994C14.538 13.1843 14.4243 13.4574 14.2225 13.6589C14.0206 13.8604 13.747 13.9738 13.4616 13.9743H2.69231C2.40688 13.9737 2.13329 13.8603 1.93146 13.6588C1.72962 13.4573 1.61597 13.1843 1.61539 12.8994V6.2459L0.669148 6.98235L0 6.1376L7.7375 0.114882C7.83308 0.0404348 7.95083 0 8.07207 0ZM8.07694 1.22084L2.69231 5.40777V12.8994H13.4616V5.41341L8.07694 1.22084Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <span className="text-gray-500">Blog & Stories</span>
                </div>
                <h3 className="text-3xl font-bold mt-4">Blog & Stories</h3>
                <p className="text-gray-600">Discover articles and tutorials to help you build better.</p>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Art & Design
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Business
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Data Science
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Finance
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Lifestyle
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Marketing
                  </a>
                  <button className="text-gray-600 hover:text-gray-800">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.85 11.85L15 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.6 7.29999C13.6 3.8206 10.7794 1 7.29999 1C3.8206 1 1 3.8206 1 7.29999C1 10.7794 3.8206 13.6 7.29999 13.6C10.7794 13.6 13.6 10.7794 13.6 7.29999Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="relative">
              <img
                className="w-full rounded-lg"
                src="assets/img/blog/blog-stories/blog-stories-banner.jpg"
                alt="Blog Banner"
              />
              <div className="absolute bottom-8 left-8 text-white">
                <a href="#" className="text-blue-400">
                  Art & Design
                </a>
                <h3 className="text-4xl font-bold mt-4">
                  The Importance of Intrinsic <br /> Motivation for Students
                </h3>
                <div className="flex items-center mt-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="assets/img/blog/blog-stories/blog-stories-user.jpg"
                    alt="User"
                  />
                  <div className="ml-4">
                    <h6 className="text-xl">Oliver Knight</h6>
                    <span>July 14, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Stories Banner Area End */}

      {/* Blog Stories List Start */}
      <section className="relative pb-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={item}>
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <a href="blog-details.html">
                    <img
                      className="rounded-lg mb-4"
                      src={`assets/img/blog/blog-stories/blog-stories-thumb-${item}.jpg`}
                      alt="Blog Thumbnail"
                    />
                  </a>
                  <div className="flex justify-between text-gray-500 mb-4">
                    <a href="#" className="hover:text-blue-600">
                      Education
                    </a>
                    <span>August 24, 2023</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4">
                    <a href="blog-details.html" className="hover:text-blue-600">
                      Blog Post Title
                    </a>
                  </h4>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={`assets/img/blog/blog-stories/blog-stories-user-${item}.jpg`}
                      alt="User"
                    />
                    <span className="ml-4">Arlene McCoy</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Stories List End */}
    </main>


      <Footer />
    </div>
  );
};

export default App;