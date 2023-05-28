import { SoundButtonProps } from '../../types/types';
import styles from './soundButton.module.css';

export const SoundButton = ({
	active,
	index,
	rowIndex,
	isClicked,
	setIsClicked,
	isActiveButtons,
	setIsActiveButtons,
}: SoundButtonProps) => {
	
	const handleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
		const newArray = isActiveButtons.map((button, buttonIndex) => {
			if (index === buttonIndex && button.isActive === false) {
				return { ...button, isActive: true };
			} else if (index === buttonIndex && button.isActive === true) {
				return { ...button, isActive: false };
			} else {
				return button;
			}
		});
		setIsActiveButtons(newArray);
		console.log(rowIndex)
		// console.log(e.currentTarget);
		// console.log(index, isActiveButtons);
		setIsClicked((prev) => !prev);
	};

	return (
		<button
			onClick={handleActive}
			className={active? `${styles.musicButton} ${styles.active}`:`${styles.musicButton} ${styles.disActive}`}
		></button>
	);
};
