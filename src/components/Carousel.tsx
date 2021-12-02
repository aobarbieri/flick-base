import React from 'react';
import Slick from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
	enum Direction {
		left,
		right,
	}

	const SlickArrow = ({ direction, onClick }: { direction: Direction; onClick?: () => {}; }) => (
		<button
			type='button'
			className={`absolute w-16 h-full top-0 z-10 bg-black bg-opacity-50 ${direction ? 'right-0' : 'left-0'}`} onClick={onClick}
		>
			<FontAwesomeIcon icon={direction ? faChevronRight : faChevronLeft} size='3x' />
		</button>
	);

	const options = {
		infinite: true,
		slidesToScroll: 1,
		variableWidth: true,
		prevArrow: <SlickArrow direction={Direction.left} />,
		nextArrow: <SlickArrow direction={Direction.right} />,
	};

	return (
		<section>
			<h2 className='relative z-10 font-bold text-xl mb-4 pl-8'>{title}</h2>
			<Slick className='relative mb-8' {...options}>
				{data.map((movie, index) => Poster(movie, index))}
			</Slick>
		</section>
	);
};

export default Carousel;
