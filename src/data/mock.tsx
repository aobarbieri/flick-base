import cover1 from '../assets/images/cover1.jpeg';
import cover2 from '../assets/images/cover2.jpeg';
import cover3 from '../assets/images/cover3.jpeg';

export interface Movie {
	title: string;
	cover: string;
	score?: number | string;
}

const mockData: Movie[] = [
	{
		title: 'Avengers',
		cover: cover1,
	},
	{
		title: 'Mission: Impossible',
		cover: cover2,
	},
	{
		title: 'The Meg',
		cover: cover3,
	},
    {
		title: 'Avengers',
		cover: cover1,
	},
	{
		title: 'Mission: Impossible',
		cover: cover2,
	},
	{
		title: 'The Meg',
		cover: cover3,
	},
    {
		title: 'Avengers',
		cover: cover1,
	},
	{
		title: 'Mission: Impossible',
		cover: cover2,
	},
	{
		title: 'The Meg',
		cover: cover3,
	},
    {
		title: 'Avengers',
		cover: cover1,
	},
	{
		title: 'Mission: Impossible',
		cover: cover2,
	},
	{
		title: 'The Meg',
		cover: cover3,
	},
];

export default mockData;