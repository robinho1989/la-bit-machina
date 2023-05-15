interface ButtonProps {
	text: string;
	image: string;
	musicSrc: string;
}

import { Howl } from 'howler';
import styles from './actionButton.module.css';

export const ActionButton = ({ text, image, musicSrc }: ButtonProps) => {
	const currentSound = () => {
		const sound = new Howl({
			src: [musicSrc],
		});

		sound.play();
	};

	return (
		<button onClick={currentSound} className={styles.actionButton}>
			<p>{text}</p> <img src={image} alt='Icon' />
		</button>
	);
};
