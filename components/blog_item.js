import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import styles from './blog_item.module.css';

export default function BlogItem({ id, date, title }) {
	return (
		<div className={styles.card}>
			<li className={utilStyles.listItem} key={id}>
				<Link href={`/${id}`}>
					<a>{title}</a>
				</Link>
				<br />
				<small className={utilStyles.lightText}>
					<Date dateString={date} />
				</small>
			</li>
		</div>
	);
}
