import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/images/flickbase-logo.svg';
import placeholderUser from '../assets/images/avatar.jpeg';

import './NavBar.css';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className='navbar absolute top-0 left-0 grid grid-cols-2 w-full p-8'>
			<div className='justify-self-start flex flex-row gap-4 items-center'>
				<h1 className='hidden'>Flick Base</h1>
				<img className='w-48' src={logo} alt='Flick Base Logo' />

				<ul className=' grid grid-flow-col gap-8'>
					<li className='ml-6 font-bold'>Home</li>
					<li>
						<a href='#series'>Series</a>
					</li>
					<li>
						<a href='#moveis'>Movies</a>
					</li>
				</ul>
			</div>

			<div className='justify-self-end flex justify-items-end items-center'>
				<form className='relative w-64'>
					<input
						className='w-full bg-black border rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100'
						type='text'
						placeholder='titles, people and genres'
					/>
					<button className='absolute right-2 py-1' onClick={(e) => e.preventDefault()}>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</form>
				<div className='relative flex ml-4'>
					<img onClick={handleClick} src={placeholderUser} alt="User's profile" />
					<button onClick={handleClick}>
						<FontAwesomeIcon className='ml-2' icon={faCaretDown} />
					</button>
					<ul
						className={`absolute mt-10 top-0 right-0 w-32 bg-black rounded p-3 transition-all duration-500 ease-in-out ${
							!isMenuOpen && 'opacity-0 invisible'
						}`}
					>
						<li className='mb-2'>
							<a href='#account' onClick={handleClick}>
								Account
							</a>
						</li>
						<li>
							<a href='#logout' onClick={handleClick}>
								Sign Out
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
