import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import ModalForm from '../components/ModalForm';
import Footer from '../components/Footer';
import WhatsappBot from '../components/WhatsappBot';
import GetStartedBtn from '../components/GetStartedBtn';



const App = () => {
  return (
    <body className="font-sans">
      <Helmet>
      <title>Home - EkoStudy</title>
      <meta name="robots" content="max-image-preview:large" />
      {/* <!-- Primary Meta Tags --> */}
    <title>EkoStudy: Your Gateway to Academic Excellence at LASUSTECH</title>
    <meta name="title" content="EkoStudy: Your Gateway to Academic Excellence at LASUSTECH" />
    <meta name="description" content="EkoStudy is the premier online platform tailored for LASUSTECH pre-degree students. Offering a comprehensive collection of lecture notes, study materials, and interactive courses across various departments, EkoStudy is designed to enhance your learning experience. Stay updated with the latest lectures, master critical concepts, and prepare effectively for your Computer-Based Tests (CBTs). Join your peers on EkoStudy to elevate your academic journey and achieve your educational goals with ease and confidence." />

    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ekostudy.vercel.app/" />
    <meta property="og:title" content="EkoStudy: Your Gateway to Academic Excellence at LASUSTECH" />
    <meta property="og:description" content="EkoStudy is the premier online platform tailored for LASUSTECH pre-degree students. Offering a comprehensive collection of lecture notes, study materials, and interactive courses across various departments, EkoStudy is designed to enhance your learning experience. Stay updated with the latest lectures, master critical concepts, and prepare effectively for your Computer-Based Tests (CBTs). Join your peers on EkoStudy to elevate your academic journey and achieve your educational goals with ease and confidence." />
    <meta property="og:image" content="https://ik.imagekit.io/mshcgnjju/EkoStudy/ScreenShot%20Tool%20-20240805011237.png" />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://ekostudy.vercel.app/" />
    <meta property="twitter:title" content="EkoStudy: Your Gateway to Academic Excellence at LASUSTECH" />
    <meta property="twitter:description" content="EkoStudy is the premier online platform tailored for LASUSTECH pre-degree students. Offering a comprehensive collection of lecture notes, study materials, and interactive courses across various departments, EkoStudy is designed to enhance your learning experience. Stay updated with the latest lectures, master critical concepts, and prepare effectively for your Computer-Based Tests (CBTs). Join your peers on EkoStudy to elevate your academic journey and achieve your educational goals with ease and confidence." />
    <meta property="twitter:image" content="https://ik.imagekit.io/mshcgnjju/EkoStudy/ScreenShot%20Tool%20-20240805011237.png" />

    {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </Helmet>
      <Header />
      <WhatsappBot />
      <section className="flex flex-row items-center justify-between bg-[#E8EDE6] px-10 xl:px-24">
        <div className='w-1/2 flex flex-col gap-4'>
          <h1 className="text-7xl font-bold">Master Your Subjects, Fuel Your Passion</h1>
          <p className="text-3xl">Excel with EkoStudy, the go-to hub for <span>LASUSTECH students</span>!</p>
          <div className="flex flex-row justify-center">
            <GetStartedBtn />
            <a href="/courses" className='text-lg xl:text-xl font-bold'>BROWSE COURSES </a>
            </div>
        </div>
        <div className="relative h-[105vh]">
          <div className="absolute bg-[#e6e1d1] w-[450px] h-[800px] bottom-0 right-1/3 -z-10"></div>
        </div>
      </section>
      <ModalForm />
      <Footer />
    </body>
  )
}
export default App;