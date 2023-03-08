import Link from 'next/link';
import Date from './date';
import Tags from './tags';

export default function BlogItem({ id, date, title, description, tags }) {
	return (
		<div className='px-5 py-3 mb-4 border rounded-lg shadow' key={id}>
			<Date dateString={date} />
			<br />
			<Link className='text-base text-gray-800' href={`/${id}`}>
				{title}
			</Link>
			<div className='text-sm text-gray-500'>{description}</div>
			<Tags tags={tags}></Tags>
		</div>
	);
}
