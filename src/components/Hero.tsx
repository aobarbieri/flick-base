import React from 'react';
import placeholder from '../assets/images/hero.jpeg';

const Hero = () => (
	<header className='min-h-screen'>
		<img className='object-cover object-center h-full w-full' src={placeholder} alt='Highlighted Movie' />
	</header>
);

export default Hero;
