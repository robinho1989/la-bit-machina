import { DrumContainerProps } from '../../types/types';
import styles from './soundButton.module.css';

export const SoundButton = ({
	isClicked,
	setIsClicked,
}: DrumContainerProps) => {
	const buttonClass = `${styles.musicButton} ${
		isClicked ? styles.active : styles.disActive
	}`;

	const handleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
		// console.log(e.currentTarget);

		setIsClicked((prev) => !prev);
		e.currentTarget.className = buttonClass;
	};
	
	return (
		<button
			onClick={handleActive}
			className={`${styles.musicButton} ${styles.disActive}`}
		></button>
	);
};
