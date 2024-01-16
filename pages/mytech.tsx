import Layout from '../components/layout';
import LibItem from '../components/lib_item';

export default function Page() {
	return (
		<Layout title={'My tech'} description={'My tech choice & favorite libraries'} home={false}>
			<div className='flex flex-col gap-3'>
				<h1 className='text-2xl text-cyan-900 mb-5'>My tech choice & favorite libraries</h1>
				<LibItem
					title={'Next.js'}
					description={
						'Next.js is my favorite React framework. It is a React framework that provides a lot of features out of the box, such as server-side rendering, static site generation, and more.'
					}
					url={'https://nextjs.org/'}
				/>
				<LibItem
					title={'Tailwind CSS'}
					description={'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.'}
					url={'https://tailwindcss.com/'}
				/>
				<LibItem
					title={'Lucid'}
					description={
						'Lucide is an open-source icon library that provides 1000+ vector (svg) files for displaying icons and symbols in digital and non-digital projects.'
					}
					url={'https://lucide.dev/'}
				/>
			</div>
		</Layout>
	);
}
