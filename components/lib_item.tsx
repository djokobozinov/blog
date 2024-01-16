export default function LibItem({ title, description, url }) {
	return (
		<div className='flex flex-col md:flex-row'>
			<a className={'text-cyan-900 font-semibold w-[140px] shrink-0'} href={url} target='_blank'>
				{title}
			</a>
			<p className='text-sm'>{description}</p>
		</div>
	);
}
