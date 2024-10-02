import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GraphicBanner from '../components/GraphicBanner';

const App = () => {
  const page = {
    title: 'Academics',
    breadcrumb: [
      {name: 'Academics', path: '/academics'},
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