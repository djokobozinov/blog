import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Social from './social';

const name = 'Gjoko Bozhinov';
const siteTitle = "Gjoko's Blog";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<title>{siteTitle}</title>
				<meta
					name='description'
					content='Blogging about Software Development.'
				/>
				<meta property='og:image' content='https://gbozhinov.com/images/gjoko.jpg' />
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<header className={styles.header}>
				<Social></Social>
				{home ? (
					<>
						<Image
							priority
							src='/images/gjoko.jpg'
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href='/'>
							<a>
								<Image
									priority
									src='/images/gjoko.jpg'
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href='/'>
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
