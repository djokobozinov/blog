import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../services/post_service';
import BlogItem from '../components/blog_item';

const siteTitle = "Gjoko's Blog";
const siteDescription =
	'Blogging about Software Development, programming, life...';

const hiddenBlogPosts = ['memory_game'];

export default function Home({ allPostsData }) {
	return (
		<Layout title={siteTitle} description={siteDescription} home>
			<section className={utilStyles.headingMd}>
				<p className={utilStyles.headingMd}>
					I value clean code and simplicity, and love working with latest
					technologies.
				</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<ul className={utilStyles.list}>
					{allPostsData.map(
						({ id, date, title, description }) =>
							!hiddenBlogPosts.includes(id) && (
								<BlogItem
									key={id}
									id={id}
									date={date}
									title={title}
									description={description}
								/>
							)
					)}
				</ul>
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
