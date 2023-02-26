import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../services/post_service';
import BlogItem from '../components/blog_item';
import Tablet from '../components/tablet';
import Separator from '../components/separator';
import VideoIntroduction from '../components/video_introductionn';

const siteTitle = "Gjoko's Blog";
const siteDescription =
	'Blogging about Software Development, programming, life...';

const hiddenBlogPosts = ['memory_game'];

export default function Home({ allPostsData }) {
	const [allVisiblePosts, setAllVisiblePosts] = useState([]);
	const [displayPosts, setDisplayPosts] = useState([]);

	useEffect(() => {
		const filteredPosts = allPostsData.filter(
			(post) => !hiddenBlogPosts.includes(post.id)
		);
		setAllVisiblePosts(filteredPosts);
		setDisplayPosts(filteredPosts.slice(0, 3));
	}, []);

	const onViewMore = () => {
		setDisplayPosts(allVisiblePosts);
	};

	return (
		<Layout title={siteTitle} description={siteDescription} home>
			<section>
				<p className='mt-4'>
					I value clean code and simplicity, and love working with latest
					technologies. <br />
					Currently working with React, Next.js, Node.js, Express, Flutter and
					Java. <br />
					📧 Feel free to{' '}
					<a href='mailto: djoko.bozinov@gmail.com'>contact me</a> if you have
					any questions.
					<br />
					🥇 Top rated developer on{' '}
					<a href='https://www.upwork.com/freelancers/bozinov' target='_blank'>
						Upwork.
					</a>{' '}
					<br />
					📱 Checkout my{' '}
					<a
						href='https://play.google.com/store/apps/dev?id=7462252183579132740'
						target='_blank'
					>
						Google Play Developer page.
					</a>{' '}
				</p>
			</section>
			<Separator title='Video introduction'></Separator>
			<VideoIntroduction></VideoIntroduction>
			<Separator title='Blog'></Separator>
			<section>
				<ul className={utilStyles.list}>
					{displayPosts.map(({ id, date, title, description, tags }) => (
						<BlogItem
							key={id}
							id={id}
							date={date}
							title={title}
							description={description}
							tags={tags}
						/>
					))}
				</ul>
				{displayPosts.length < allVisiblePosts.length && (
					<div className='flex w-full justify-center'>
						<div
							className='flex items-center justify-center h-10 w-28 border border-gray-700 cursor-pointer rounded-lg text-sm'
							onClick={onViewMore}
						>
							View More
						</div>
					</div>
				)}
			</section>
			<section className='hidden md:block'>
				<Separator title='Have some fun'></Separator>
				<Tablet></Tablet>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
