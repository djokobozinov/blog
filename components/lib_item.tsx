export default function LibItem({ title, description, url }) {
	return (
		<div className='flex'>
			<a className={'text-cyan-900 font-semibold w-[140px] shrink-0'} href={url} target='_blank'>
				{title}
			</a>
			<p>{description}</p>
		</div>
	);
}
