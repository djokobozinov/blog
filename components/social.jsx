import styles from './social.module.css';
import Image from 'next/image';

export default function Social() {
	return (
		<div className={styles.socialHolder}>
			<a href='https://www.linkedin.com/in/bozinov/' target='_blank'>
				<Image
					className={styles.socialImg}
					priority
					src='/images/social/linkedin.png'
					height={40}
					width={40}
					alt='Facebook'
				/>
			</a>
			<a href='https://github.com/djokobozinov' target='_blank'>
				<Image
					className={styles.socialImg}
					priority
					src='/images/social/github.png'
					height={40}
					width={40}
					alt='Facebook'
				/>
			</a>
		</div>
	);
}
