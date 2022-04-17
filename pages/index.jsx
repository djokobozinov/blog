import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../services/post_service';
import BlogItem from '../components/blog_item';

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<section className={utilStyles.headingMd}>
				<p className={utilStyles.headingMd}>
					I value clean code and simplicity, and love working with latest
					technologies.
				</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title, description }) => (
						<BlogItem
							id={id}
							date={date}
							title={title}
							description={description}
						/>
					))}
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
