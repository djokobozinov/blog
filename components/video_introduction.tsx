export default function VideoIntroduction() {
	return (
		<video className='w-full' controls>
			Your browser does not support the video tag.
			<source src='/videos/aboutme.mov'></source>
		</video>
	);
}
