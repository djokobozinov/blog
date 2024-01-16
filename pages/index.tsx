import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { getSortedPostsData } from '../services/post_service';
import BlogItem from '../components/blog_item';
import Separator from '../components/separator';
import AboutMe from '../components/about_me';
import Contact from '../components/contact';
import YouTubeVideo from '../components/youtube_video';

const siteTitle = 'Gjoko Bozhinov';
const siteDescription =
	'Need a website or mobile app? I can help! As an experienced developer, I create customized solutions that meet your needs. Contact me today to get started!';

const hiddenBlogPosts = ['memory_game'];

export default function Home({ allPostsData }) {
	const [allVisiblePosts, setAllVisiblePosts] = useState([]);
	const [displayPosts, setDisplayPosts] = useState([]);

	useEffect(() => {
		const filteredPosts = allPostsData.filter((post) => !hiddenBlogPosts.includes(post.id));
		setAllVisiblePosts(filteredPosts);
		setDisplayPosts(filteredPosts.slice(0, 3));
	}, []);

	const onViewMore = () => {
		setDisplayPosts(allVisiblePosts);
	};

	return (
		<Layout title={siteTitle} description={siteDescription} home>
			<AboutMe />
			<Contact />
			<Separator title='Video introduction'></Separator>
			<YouTubeVideo videoId={'t5M6Qq3QE8I'} />
			<Separator title='Blog'></Separator>
			<section>
				<ul>
					{displayPosts.map(({ id, date, title, description, tags }) => (
						<BlogItem key={id} id={id} date={date} title={title} description={description} tags={tags} />
					))}
				</ul>
				{displayPosts.length < allVisiblePosts.length && (
					<div className='flex w-full justify-center'>
						<div
							className='flex items-center justify-center h-10 w-28 border border-cyan-900 text-cyan-900 cursor-pointer rounded-lg text-sm hover:bg-cyan-900 hover:text-white'
							onClick={onViewMore}
						>
							View More
						</div>
					</div>
				)}
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
