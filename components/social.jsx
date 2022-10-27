import Image from 'next/image';

export default function Social() {
	return (
		<div className='flex justify-end w-full gap-2'>
			<a href='https://github.com/djokobozinov' target='_blank'>
				<Image
					className='cursor-pointer p-1'
					priority
					src='/images/social/github.png'
					height={40}
					width={40}
					alt='Facebook'
				/>
			</a>
			<a href='https://twitter.com/bozinovd' target='_blank'>
				<Image
					className='cursor-pointer p-1'
					priority
					src='/images/social/twitter.png'
					height={40}
					width={40}
					alt='Facebook'
				/>
			</a>
		</div>
	);
}
