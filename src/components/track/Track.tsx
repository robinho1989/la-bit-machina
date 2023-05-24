import { ActionButton } from '../actionButton/ActionButton';
import { SoundButton } from '../soundButton/SoundButton';
import { columns } from '../../data/data';
import styles from './track.module.css';
import { SetStateAction } from 'react';
interface TrackProps {
	buttonName: string;
	iconSrc: string;
	musicSrc: string;
	isClicked: boolean;
	setIsClicked: React.Dispatch<SetStateAction<boolean>>;
}

export const Track = (props: TrackProps) => {
	return (
		<li className={styles.gridContainer}>
			<ActionButton
				text={props.buttonName}
				image={props.iconSrc}
				musicSrc={props.musicSrc}
			/>
			{columns.map((_, index) => {
				return (
					<SoundButton
						key={index}
						isClicked={props.isClicked}
						setIsClicked={props.setIsClicked}
					/>
				);
			})}
		</li>
	);
};
