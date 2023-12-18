export default function YouTubeVideo({ videoId }) {
	return (
		<div className='flex w-full justify-center'>
			<iframe
				width='612'
				height='400'
				src={`https://www.youtube.com/embed/${videoId}`}
				title='Video introduction'
				allowFullScreen
			></iframe>
		</div>
	);
}
