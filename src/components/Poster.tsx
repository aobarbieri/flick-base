import React from 'react';
import emitter from '../utils/eventEmitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import CONST from '../data/constants';
import Score from './Score';
import { Movie } from './../data/mock';
import { Title, TitleType } from '../App';

import './Poster.css';

const Poster = ({ cover, poster_path, title, name, vote_average, id }: Movie, index: number) => {
	const { IMAGEURL } = CONST;

	const handleClick = () => {
		const type = title ? TitleType.Movie : TitleType.Serie;

		emitter.emit(CONST.EVENTS.PosterClick, { type, id });
	}

	return (
		<article className='relative transition-all duration-500 ease-in-out transform hover:scale-125' key={index} onClick={handleClick}>
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
