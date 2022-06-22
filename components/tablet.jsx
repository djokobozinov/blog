import Image from 'next/image';
import styles from './tablet.module.css';

export default function Tablet() {
	return (
		<div className={styles.memoryGameDiv}>
			<hr />
			<h4>Checkout your memory</h4>
			<div className={styles.tabletDiv}>
				<Image src='/images/tablet.png' width={900} height={600}></Image>
				<iframe
					className={styles.webView}
					src='https://memory-game-3a820.web.app/#/'
					title='Memory Game'
				></iframe>
			</div>
		</div>
	);
}
