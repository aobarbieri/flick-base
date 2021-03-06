import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import placeholder from '../assets/images/hero.jpeg';
import Score from './Score';
import CONST from '../data/constants';

const Hero = ({ backdrop_path = null, title = 'Avengers Endgame', vote_average = 10 }) => {
	const { IMAGEURL } = CONST;

	return (
		<header className='box-border relative h-screen -mb-32'>
			<img
				className='object-cover h-full w-full object-center'
				src={backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder}
				alt='Highlighted Movie'
			/>
			<div className='absolute bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black'></div>

			<article className='absolute bottom-0 mb-48 md:mb-64 md:ml-12 px-8'>
				<p className='md:text-3xl'>Watch now</p>
				<h2 className='text-xl md:text-6xl font-bold my-4'>{title}</h2>
				<p>
					Rating <Score value={vote_average} />
				</p>
				<button className='px-8 py-2 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
					<FontAwesomeIcon className='mr-2' icon={faPlay} /> Play
				</button>
				<button className='px-8 py-2 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
					<FontAwesomeIcon className='mr-2' icon={faPlus} /> My List
				</button>
			</article>
		</header>
	);
};

export default Hero;
