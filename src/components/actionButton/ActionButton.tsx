interface ButtonProps {
	text: string;
	image: string;
	musicSrc: string;
}
import { Howl } from 'howler';
import styles from './actionButton.module.css';

export const ActionButton = ({ text, image, musicSrc }: ButtonProps) => {
	const sound = new Howl({
		src: [musicSrc],
	});
	const currentSound = () => {
		const context = new AudioContext();
		context.resume().then(() => {
			sound.play();
		});
		// sound.play();
	};

	return (
		<button onClick={currentSound} className={styles.actionButton}>
			<p>{text}</p> <img src={image} alt='Icon' />
		</button>
	);
};
