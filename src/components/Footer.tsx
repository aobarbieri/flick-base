import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const today = new Date();

	return (
		<footer>
			<FontAwesomeIcon icon={faFacebook} />
			<FontAwesomeIcon icon={faInstagram} />
			<FontAwesomeIcon icon={faTwitter} />
			<FontAwesomeIcon icon={faYoutube} />
			<div>
				<a href='#'>Audio and subtitles</a>
				<a href='#'>Audio description</a>
				<a href='#'>Help Center</a>
				<a href='#'>Pre-paid card</a>
				<a href='#'>Press</a>
				<a href='#'>Investor relations</a>
				<a href='#'>Careers</a>
				<a href='#'>Terms of use</a>
				<a href='#'>Privacy</a>
				<a href='#'>Legal notices</a>
				<a href='#'>Cookies preferences</a>
				<a href='#'>Corporate information</a>
				<a href='#'>Contact</a>
			</div>
			<p>© 2020 - {today.getFullYear()} flickbase, Inc.</p>
		</footer>
	);
};

export default Footer;
