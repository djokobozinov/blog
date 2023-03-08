import Head from 'next/head';
import Link from 'next/link';
import Social from './social';
import Separator from './separator';
import Header from './header';

const name = 'Gjoko Bozhinov';

export default function Layout({ children, home, title, description }) {
	return (
		<div className='max-w-xl m-auto mt-5 mb-10'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					property='og:image'
					content='https://gbozhinov.com/images/code.jpg'
				/>
				<meta name='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<Header home={home} name={name}></Header>
			<main>{children}</main>
			{!home && (
				<div className='mt-5'>
					<Link className='text-cyan-900' href='/'>
						← Back to home
					</Link>
				</div>
			)}
			<div className='mt-14'>
				<Separator></Separator>
				<Social></Social>
			</div>
		</div>
	);
}
