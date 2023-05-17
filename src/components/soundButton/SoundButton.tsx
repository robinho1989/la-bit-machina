import { useEffect } from 'react';
import { DrumContainerProps } from '../../types/types';
import styles from './soundButton.module.css';

export const SoundButton = ({
	isActive,
	setIsAvtive,
	isClicked,
	setIsClicked,
}: DrumContainerProps) => {
	useEffect(() => {
		setIsAvtive(true);
	}, [isClicked]);
	const handleActiveState = (e: React.MouseEvent<HTMLButtonElement>) => {
		setIsClicked(!isClicked);

		isActive
			? (e.currentTarget.className = `${styles.musicButton} ${styles.active}`)
			: (e.currentTarget.className = `${styles.musicButton} ${styles.disActive}`);
	};

	return (
		<button
			onClick={(e) => handleActiveState(e)}
			className={`${styles.musicButton} ${styles.disActive}`}
		></button>
	);
};
