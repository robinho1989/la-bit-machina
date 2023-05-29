import { SoundButtonProps } from '../../types/types';
import styles from './soundButton.module.css';

export const SoundButton = ({
	note,
	trackName,
	state,
	dispatch,
}: SoundButtonProps) => {
	const handleActive = ({
		note,
		trackName,
	}: {
		note: number;
		trackName: string;
	}) => {
		dispatch({
			type: 'toggleNote',
			payloadNote: note,
			payloadTrack: trackName,
		});
		
	};

	return (
		<button
			onClick={() => handleActive({ note, trackName })}
			className={`${styles.musicButton} ${styles.disActive}`}
		></button>
	);
};
