import React from 'react';
import CONST from '../data/constants';
import Score from './Score';
import emitter from '../utils/eventEmitter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const Modal = ({
	poster_path,
	title,
	name,
	original_name,
	original_title,
	overview,
	vote_average,
	runtime,
	number_of_seasons,
	video,
}: any) => {
	const { IMAGEURL } = CONST;

    const handleClick = () => {
        emitter.emit(CONST.EVENTS.ModalClose);
    };

	return (
		<section className='fixed top-0 left-0 z-10 p-12 w-full h-screen grid place-items-center'>
			<article className='w-3/4 h-full grid grid-flow-col p-8 bg-black shadow-lg'>

				<img className='w-full h-full' src={`${IMAGEURL}/w500/${poster_path}`} alt={title ? title : name} />

                <div className='ml-8 relative'>
                    <FontAwesomeIcon className='cursor-pointer absolute top-0 right-0 text-red-600'icon={faTimesCircle} size='2x' onClick={handleClick}/>
                    <h2 className='mr-10 text-3xl font-bold '>{title ? title : name}</h2>
                    <h6 className='font-bold italic'>{original_title ? original_title : original_name}</h6>
                    <p className='my-8'>{overview}</p>
                    <Score value={vote_average} />
                    <span className='bg-red-600 rounded py-2 px-4 ml-2'>{runtime ? `${runtime} min` : `${number_of_seasons} seasons`}</span>
                </div>
			</article>
		</section>
	);
};

export default Modal;
