import React from 'react';
import Header from '../components/Header';
import GraphicBanner from '../components/GraphicBanner';
import Footer from '../components/Footer';
import EmailBig from '../components/Icons/EmailBig';
import PhoneBig from '../components/Icons/PhoneBig';
import FacebookBig from '../components/Icons/FacebookBig';
import YoutubeBig from '../components/Icons/YoutubeBig';
import TwitterXBig from '../components/Icons/TwitterXBig';


const App = () => {
  const page = {
    title: 'Contact',
    description: "Elevate your skills and enjoy the journey of learning, where learning meets passion."
  }

  return (
    <body className="font-sans">
      <Header />
      <GraphicBanner page={page} />
      <section className='px-10 xl:px-24 mt-24 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-10 xl:gap-0'>
        <div className="flex flex-col gap-6 w-full lg:w-1/2 xl:w-2/3">
          <h3 className="text-[18px] font-semibold">HELLO</h3>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold">Get in Touch</h1>
          <p className='text-[18px] w-full lg:w-10/12'>We&rsquo;re here to help! Whether you have a question about our courses, need assistance, or just want to give feedback, feel free to reach out to us.</p>
          <div className='flex flex-col text-[18px] lg:text-2xl xl:text-[28px] gap-3'>
            <a href="mailto:johnayobami77@proton.me" className="flex flex-row items-center group">
              <EmailBig />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">johnayobami77@proton.me</span>
            </a>
            <a href="tel:+2348096044860" className="flex flex-row items-center group">
              <PhoneBig />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">+234 809 604 4860</span>
            </a>
            <a href="tel:+2348067954912" className="flex flex-row items-center group">
              <PhoneBig />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">+234 806 795 4912</span>
            </a>
            <a href="https://facebook.com" target='_blank' className="flex flex-row items-center group">
              <FacebookBig />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">EkoStudy</span>
            </a>
            <a href="https://x.com" target='_blank' className="flex flex-row items-center group">
              <TwitterXBig />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">EkoStudy</span>
            </a>
            <a href="https://youtube.com" target='_blank' className="flex flex-row items-center group">
              <YoutubeBig />
              <span className="ml-4 group-hover:text-[#92B76D] transition-all duration-300 ease-in-out">EkoStudy_Vlog</span>
            </a>
          </div>
        </div>
        <iframe 
			    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.5733943089649!2d3.522427630760244!3d6.638443382808631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bef17a98def6b%3A0x563f17caaa84a67a!2sLagos%20State%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sng!4v1722723696425!5m2!1sen!2sng" 
  			  className='w-full h-[400px] lg:w-[500px] lg:h-[600px]'
			    allowfullscreen="" 
			    // loading="lazy" 
			    referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
      <Footer />
    </body>
  )
}
export default App;