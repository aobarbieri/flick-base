import React from 'react';
import Slick from 'react-slick';

import mockData, { Movie } from '../data/mock';

const Poster = ({ cover, title, score }: Movie, index: number) => (
	<article key={index}>
		<img className='w-48 h-72' src={cover} alt={title} />
	</article>
);

interface CarouselData {
	title?: string;
	data?: Movie[];
}

const Carousel = ({ title = 'Highlighted Movies', data = mockData }: CarouselData) => {
	const options = {
		infinite: true,
		slidesToScroll: 1,
		variableWidth: true
	};

	return (
		<section>
			<h2>{title}</h2>
			<Slick {...options}>{data.map((movie, index) => Poster(movie, index))}</Slick>
		</section>
	);
};

export default Carousel;
