import Slick from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import mockData, { Movie } from '../data/mock';
import Poster from './Poster';
import './Carousel.css';

interface CarouselData {
	title?: string;
	data?: Movie[];
}

const Carousel = ({ title = 'Highlighted Movies', data = mockData }: CarouselData) => {
	enum Direction {
		left,
		right,
	}

	const SlickArrow = ({ direction, onClick }: { direction: Direction; onClick?: () => void }) => (
		<button
			type='button'
			className={`absolute w-16 h-full top-0 z-10 bg-black bg-opacity-50 ${direction ? 'right-0' : 'left-0'}`}
			onClick={onClick}
		>
			<FontAwesomeIcon icon={direction ? faChevronRight : faChevronLeft} size='3x' />
		</button>
	);

	const options = {
		infinite: true,
		slidesToScroll: 1,
		variableWidth: true,
		prevArrow: <SlickArrow direction={Direction.left} />,
		nextArrow: <SlickArrow direction={Direction.right} />,
	};

	return (
		<section className='carousel'>
			<h2 className='relative z-10 font-bold text-xl pl-8'>{title}</h2>
			<Slick className='relative mb-8' {...options}>
				{data.map((movie, index) => Poster(movie, index))}
			</Slick>
		</section>
	);
};

export default Carousel;
