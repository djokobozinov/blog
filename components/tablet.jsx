import Image from 'next/image';

export default function Tablet() {
	return (
		<div className='hidden md:block'>
			<h4>Play Memory game</h4>
			<div className='relative w-[600px] m-0 mt-4'>
				<Image
					src='/images/tablet.png'
					width={900}
					height={600}
					priority={true}
				></Image>
				<iframe
					className='absolute w-[550px] h-[87%] top-5 left-5 right-5 bottom-24 border-0'
					src='https://memory-game-3a820.web.app/#/'
					title='Memory Game'
				></iframe>
			</div>
		</div>
	);
}
