import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../services/post_service';
import BlogItem from '../components/blog_item';
import Tablet from '../components/tablet';
import Separator from '../components/separator';
import VideoIntroduction from '../components/video_introductionn';
import AboutMe from '../components/about_me';
import Contact from '../components/contact';

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
			<AboutMe></AboutMe>
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
							className='flex items-center justify-center h-10 w-28 border border-gray-700 cursor-pointer rounded-lg text-sm hover:bg-gray-100'
							onClick={onViewMore}
						>
							View More
						</div>
					</div>
				)}
			</section>
			<Contact></Contact>
			<section className='hidden md:block'>
				<Separator title='Have some fun 🙂'></Separator>
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
