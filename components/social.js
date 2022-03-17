import styles from './social.module.css';
import Image from 'next/image';

export default function Social() {
	return (
		<div className={styles.socialHolder}>
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
			<a href='https://twitter.com/bozinovd' target='_blank'>
				<Image
					className={styles.socialImg}
					priority
					src='/images/social/twitter.png'
					height={40}
					width={40}
					alt='Facebook'
				/>
			</a>
			<a href='https://www.facebook.com/djoko.bozinov/' target='_blank'>
				<Image
					className={styles.socialImg}
					priority
					src='/images/social/facebook.png'
					height={40}
					width={40}
					alt='Facebook'
				/>
			</a>
		</div>
	);
}
