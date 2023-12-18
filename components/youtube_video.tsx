export default function YouTubeVideo({ videoId }) {
	return (
		<div className='flex w-full justify-center border rounded-lg py-5'>
			<iframe
				width='560'
				height='315'
				src={`https://www.youtube.com/embed/${videoId}`}
				title='Video introduction'
				frameBorder='0'
				allowFullScreen
			></iframe>
		</div>
	);
}
