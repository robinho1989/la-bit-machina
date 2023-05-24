import { SoundButtonProps } from '../../types/types';
import styles from './soundButton.module.css';

export const SoundButton = ({
	index,
	isClicked,
	setIsClicked,
}: SoundButtonProps) => {
	const handleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
		// console.log(e.currentTarget);
		console.log(index);
		setIsClicked((prev) => !prev);
	};

	return (
		<button
			onClick={handleActive}
			className={`${styles.musicButton} ${styles.disActive}`}
		></button>
	);
};
