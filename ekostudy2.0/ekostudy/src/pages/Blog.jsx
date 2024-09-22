import React from 'react';
import Header from '../components/Header';
import GraphicBanner from '../components/GraphicBanner';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const App = () => {
  const page = {
    title: 'Blog',
    description: 'Get updated on happenings on campus',
  }

  return (
    <div className="font-sans">
      <Helmet>
        <meta name="description" content="Welcome to my website" />
      </Helmet>
      <Header />
      <GraphicBanner page={page} />
      <section>
        
      </section>

      <Footer />
    </div>
  );
};

export default App;