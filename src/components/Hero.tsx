import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import placeholder from '../assets/images/hero.jpeg';

const Hero = ({ title = 'Avengers Endgame', score = 10 }) => {
	const getBorderColor = () => {
		if (score >= 7) {
			return 'border-green-400';
		} else if (score > 4 && score < 7) {
			return 'border-yellow-400';
		} else {
			return 'border-red-400';
		}
	};

	return (
		<header className='box-border relative min-h-screen -mb-32'>
			<img className='object-cover object-center h-auto w-full' src={placeholder} alt='Highlighted Movie' />

			<div className='absolute bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black'></div>
			<article className='absolute bottom-0 mb-64 px-8'>
				<p className='text-3xl'>Watch now</p>

				<h2 className='text-6xl font-bold my-4'>{title}</h2>

				<p>
					Rating{' '}
					<span
						className={`inline-block mx-2 border-4 bg-black bg-opacity-75 py-2 px-3 rounded-full ${getBorderColor()}`}
					>
						{score}
					</span>
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
