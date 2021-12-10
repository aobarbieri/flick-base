import React, { useEffect } from 'react';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.themoviedb.org/3/discover/movies?api_key=df947587485f71b5bbefddcb305247ac')
    }
  });

	return (
  <div className='m-auto antialised font-sans bg-black text-white'>
    <Hero />
    <NavBar />
    <Carousel />
    <Carousel />
    <Carousel />
  </div>
  );
};

export default App;
