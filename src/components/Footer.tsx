import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const today = new Date();

	return (
		<footer className='mt-24 pl-32 pb-4 text-gray-600 text-sm'>
			<FontAwesomeIcon className='mr-4 hover:text-white' icon={faFacebookSquare} size='2x' />
			<FontAwesomeIcon className='mr-4 hover:text-white' icon={faInstagram} size='2x' />
			<FontAwesomeIcon className='mr-4 hover:text-white' icon={faTwitter} size='2x' />
			<FontAwesomeIcon className='hover:text-white' icon={faYoutube} size='2x' />
			<div className='grid grid-cols-4 my-8'>
				<a className='hover:text-white' href='#'>Audio and subtitles</a>
				<a className='hover:text-white' href='#'>Audio description</a>
				<a className='hover:text-white' href='#'>Help Center</a>
				<a className='hover:text-white' href='#'>Pre-paid card</a>
				<a className='hover:text-white' href='#'>Press</a>
				<a className='hover:text-white' href='#'>Investor relations</a>
				<a className='hover:text-white' href='#'>Careers</a>
				<a className='hover:text-white' href='#'>Terms of use</a>
				<a className='hover:text-white' href='#'>Privacy</a>
				<a className='hover:text-white' href='#'>Legal notices</a>
				<a className='hover:text-white' href='#'>Cookies preferences</a>
				<a className='hover:text-white' href='#'>Corporate information</a>
				<a className='hover:text-white' href='#'>Contact</a>
			</div>
			<p>© 2020 - {today.getFullYear()} flickbase, Inc.</p>
		</footer>
	);
};

export default Footer;
