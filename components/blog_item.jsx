import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import styles from './blog_item.module.css';
import Tags from './tags';

export default function BlogItem({ id, date, title, description, tags }) {
	return (
		<div className={styles.card} key={id}>
			<small className={utilStyles.lightText}>
				<Date dateString={date} />
			</small>
			<br />
			<Link href={`/${id}`}>
				<a>{title}</a>
			</Link>
			<div className={styles.description}>{description}</div>
			<Tags tags={tags}></Tags>
		</div>
	);
}
