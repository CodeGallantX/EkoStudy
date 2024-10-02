import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GraphicBanner from '../components/GraphicBanner';

const App = () => {
  const page = {
    title: 'Resources',
    breadcrumb: [
      {name: 'Resources', path: '/resources'},
    ]
  }

  return (
    <div>
      <Header/>
      <GraphicBanner page={page} />
      <Footer/>
    </div>
  )
}

export default App;