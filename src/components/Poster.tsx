import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import Score from './Score';
import { Movie } from './../data/mock';

import './Poster.css';

const Poster = ({ cover, title, score }: Movie, index: number) => (
	<article className='relative transition-all duration-500 ease-in-out transform hover:scale-125' key={index}>
		<img className='h-64' src={cover} alt={title} />
        <div className='poster cursor-pointer absolute inset-0 w-full h-full grid place-content-center place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0'>
            <FontAwesomeIcon icon={faPlayCircle} size='5x' />
            <h2 className='text-xl py-4'>{title}</h2>
            <Score value={score} />
        </div>
	</article>
);

export default Poster;