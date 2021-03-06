import styles from './tags.module.css';

export default function Tags({ tags }) {
	return (
		<div className={styles.holder}>
			{tags &&
				tags.length > 0 &&
				tags.split(',').map((tag, index) => {
					return (
						tag && (
							<div key={index} className={styles.tag}>
								{tag}
							</div>
						)
					);
				})}
		</div>
	);
}
