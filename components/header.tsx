import Image from 'next/image';
import Link from 'next/link';

type Props = {
	home?: boolean;
	name: string;
};
export default function Header({ home = false, name }: Props) {
	return (
		<header className='flex flex-col items-center justify-center font-mono'>
			{home ? (
				<>
					<Image
						priority
						src='/images/gjoko.jpg'
						className='rounded-full border-2'
						height={144}
						width={144}
						alt={name}
					/>
					<h1 className='text-2xl text-cyan-900 font-bold'>{name}</h1>
					<p className='text-xs'>Software Developer</p>
				</>
			) : (
				<>
					<Link href='/'>
						<Image
							priority
							src='/images/gjoko.jpg'
							className='rounded-full border-2'
							height={108}
							width={108}
							alt={name}
						/>
					</Link>
					<h2 className=''>
						<Link className='text-xl text-cyan-900' href='/'>
							{name}
						</Link>
					</h2>
					<p className='text-xs mb-8'>Software Developer</p>
				</>
			)}
		</header>
	);
}
