import Layout from '../components/layout';
import Date from '../components/date';
import { getAllPostIds, getPostData } from '../services/post_service';

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData }) {
	return (
		<Layout title={postData.title} description={postData.description}>
			<article>
				<h1 className='text-2xl text-cyan-900'>{postData.title}</h1>
				<div className='text-gray-500 mb-2'>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}
