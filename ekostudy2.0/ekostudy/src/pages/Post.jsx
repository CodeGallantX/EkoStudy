import React, { useEffect } from 'react';
import Header from '../components/Header';
import GraphicBanner from '../components/GraphicBanner';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const App = () => {
  // Using useEffect to dynamically load external scripts
  useEffect(() => {
    const blogHandyScript = document.createElement('script');
    blogHandyScript.src = 'https://www.bloghandy.com/api/bh_blogengine.js';
    blogHandyScript.async = true;
    blogHandyScript.onload = () => {
      window.bh_id = "609HmCqwe4Qx6DNDIxNA"; // Set the Blog ID after the script loads
    };
    document.body.appendChild(blogHandyScript);
  
    const aclibScript = document.createElement('script');
    aclibScript.type = 'text/javascript';
    aclibScript.innerHTML = `
      aclib.runAutoTag({
        zoneId: 'z7tk79idot',
      });
    `;
    document.body.appendChild(aclibScript);
  
    return () => {
      document.body.removeChild(blogHandyScript);
      document.body.removeChild(aclibScript);
    };
  }, []);
  
  const page ={
    title: "Blog",
    breadcrumb : [
      {name: 'Blog', path: '/blog'},
      {name: 'Posts', path: '/in-blog'},
    ]
  }
  return (
    <div className="font-sans">
      <Helmet>
        <meta name="description" content="Welcome to my website" />
      </Helmet>
      <Header />
      <GraphicBanner page={page} />
      <div className="p-12" id="bh-posts"></div>
      <Footer />
    </div>
  );
};

export default App;