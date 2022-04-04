import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import styles from './blog_item.module.css';

export default function BlogItem({ id, date, title, description }) {
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
		</div>
	);
}
