import Image from 'next/image';

export default function Social() {
	return (
		<div className='flex justify-center w-full gap-1 mt-5'>
			<a href='https://www.linkedin.com/in/bozinov/' target='_blank'>
				<Image
					className='cursor-pointer'
					priority
					src='/images/social/linkedin.png'
					height={40}
					width={40}
					alt='Facebook'
				/>
			</a>
			<a href='https://github.com/djokobozinov' target='_blank'>
				<Image
					className='cursor-pointer'
					priority
					src='/images/social/github.png'
					height={40}
					width={40}
					alt='Facebook'
				/>
			</a>
		</div>
	);
}
