import React, { useState, useEffect } from 'react';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CONST from './data/constants';

const App = () => {
	const { URL, APISTRING } = CONST;

	const [movies, setMovies] = useState<any>();
	const [series, setSeries] = useState<any>();
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const movies = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
			const moviesData = await movies.json();
			setMovies(moviesData);

			const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`);
			const seriesData = await series.json();
			setSeries(seriesData);

      setLoading(false);
		};

		fetchData();
	}, []);

	const getFeaturedMovie = () => movies && movies?.results[0];

	const getMovieList = () => {
		if (movies) {
			const [featured, ...movieList] = movies?.results;
			return movieList;
		}
		return [];
	};

	return (
		<div className='m-auto antialised font-sans bg-black text-white'>
      {loading && <h1>Loading</h1>}
      {!loading && (
			<>
      <Hero {...getFeaturedMovie()} />
			<NavBar />
			<Carousel title='Most Popular Movies' data={getMovieList()} />
			<Carousel title='Most Popular TV Shows' data={series?.results}/>
			<Carousel title='Placeholder' />
      <Footer />
      </>
      )}
		</div>
	);
};

export default App;

//
