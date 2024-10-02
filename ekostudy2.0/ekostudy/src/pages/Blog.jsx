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
      <Footer />
    </div>
  );
};

export default App;