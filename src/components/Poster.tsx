import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import CONST from '../data/constants';
import Score from './Score';
import { Movie } from './../data/mock';

import './Poster.css';

const Poster = ({ cover, poster_path, title, name, vote_average }: Movie, index: number) => {
	const { IMAGEURL } = CONST;

	return (
		<article className='relative transition-all duration-500 ease-in-out transform hover:scale-125' key={index}>
			<img className='h-64' src={poster_path ? `${IMAGEURL}/w200/${poster_path}` : cover} alt={title} />

			<div className='poster cursor-pointer absolute inset-0 w-full h-full grid text-center leading-6 place-content-center place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0'>
				<h2>{title ? title : name}</h2>
				<Score value={vote_average} />
				<FontAwesomeIcon icon={faPlayCircle} size='5x' />
			</div>
		</article>
	);
};

export default Poster;
