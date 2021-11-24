import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/imagiflix.svg';
import placeholderUser from '../assets/images/avatar.jpeg';

const NavBar = () => (
	<nav className='absolute top-0 left-0 grid grid-cols-2 w-full p-8'>
		<div className='justify-self-start grid grid-cols-2 gap-4 items-center'>
			<h1 className='hidden'>Imagiflix</h1>
			<img src={logo} alt='Flick Base Logo'/>

			<ul className='grid grid-flow-col gap-4'>
				<li className='font-bold'>Home</li>
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
				<button className='absolute right-2 py-1'>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</form>
			<div className='flex ml-4'>
				<img src={placeholderUser} alt="User's profile" />
				<button>
					<FontAwesomeIcon className='ml-2' icon={faCaretDown} />
				</button>
				<u className='hidden'>
					<li>
						<a href='#account'>Account</a>
					</li>
					<li>
						<a href='#logout'>Sign Out</a>
					</li>
				</u>
			</div>
		</div>
	</nav>
);

export default NavBar;
