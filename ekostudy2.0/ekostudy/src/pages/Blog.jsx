import React from 'react';
import Header from '../components/Header';
import GraphicBanner from '../components/GraphicBanner';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const App = () => {
  const page = {
    title: 'Blog',
    breadcrumb: [
      { name: 'Blog', path: '/blog' },
    ],
  };

  return (
    <div className="font-sans">
      <Helmet>
        <meta name="description" content="Welcome to my website" />
      </Helmet>
      <Header />
      <GraphicBanner page={page} />

      <main>
        <section className="relative pt-32 pb-16 mt-20 px-10 xl:px-24">
  <div
    className="absolute inset-0 bg-cover bg-center rounded-2xl mx-10 xl:mx-24 h-96 bg-fixed"
    style={{ backgroundImage: "url('maintenance/upcoming-bg.jpg')" }}
  ></div>
  <div className="relative">
    <div className="relative -top-32">
      {/* <img
        className="w-full rounded-lg"
        src="maintenance/upcoming-bg.jpg"
        alt="Blog Banner"
      /> */}
      <a 
        href="/blog/in-blog"
        className="absolute inset-0 bg-black h-96 bg-opacity-20 rounded-2xl flex items-center justify-start">
        <div className="text-left text-white p-8">
          <a href="#" className="text-[#92B76D]">
            Art & Design
          </a>
          <h3 className="text-4xl font-bold mt-4">
            The Importance of Intrinsic <br /> Motivation for Students
          </h3>
          <div className="flex items-center justify-start mt-4">
            <img
              className="w-12 h-12 rounded-full"
              src="assets/img/blog/blog-stories/blog-stories-user.jpg"
              alt="User"
            />
            <div className="ml-4">
              <h6 className="text-lg">Oliver Adetutu</h6>
              <span>July 14, 2024</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>


        <section className="relative pb-32 mt-64">
          <div className="px-10 xl:px-24">
            <div className="flex flex-wrap -mx-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={item}>
                  <div className="group bg-white rounded-xl shadow-md">
                    <a
                      href="blog/in-blog/">
                      <img
                        className="mb-4 rounded-t-xl group-hover:scale"
                        src="home/mtnight.webp"
                        alt="Blog Thumbnail"
                      />
                    </a>
                    <div className="p-4">
                      <div className="flex justify-between text-gray-500 mb-4">
                        <a href="blog/in-blog/" className="hover:text-[#92B76D]">
                          Education
                        </a>
                        <span>August 24, 2024</span>
                      </div>
                      <h4 className="text-xl font-bold mb-4">
                        <a href="blog/in-blog/" className="hover:text-[#92B76D] text-2xl">
                          Title
                        </a>
                      </h4>
                      <div className="flex items-center">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={`assets/img/blog/blog-stories/blog-stories-user-${item}.jpg`}
                          alt={`User ${item}`}
                        />
                        <span className="ml-4">Kia Smith</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
