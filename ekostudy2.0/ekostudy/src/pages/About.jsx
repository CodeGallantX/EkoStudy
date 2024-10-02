import React from 'react';
import Header from '../components/Header';
import GraphicBanner from '../components/GraphicBanner';
import Footer from '../components/Footer';

const App = () => {
  const page = {
    title: 'About',
    breadcrumb: [
      {name:'Home', path: '/'}
      {name: 'About', path: '#'}
    ]
  }
  return (
    <body className="font-sans">
      <Header />
      <GraphicBanner page={page} />
      <Footer />
    </body>
  )
}
export default App;