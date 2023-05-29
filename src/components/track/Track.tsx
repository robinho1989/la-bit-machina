import { ActionButton } from '../actionButton/ActionButton';
import { SoundButton } from '../soundButton/SoundButton';
import { TrackProps } from '../../types/types';
import { columns } from '../../data/data';
import styles from './track.module.css';

export const Track = (props: TrackProps) => {
	// const buttonStatus = { isActive: false };
	// const buttonStatusArray = new Array(17).fill(buttonStatus);
	// console.log(buttonStatusArray);
	return (
		<li className={styles.gridContainer}>
			<ActionButton
				text={props.buttonName}
				image={props.iconSrc}
				musicSrc={props.musicSrc}
			/>
			{columns.map((button, index) => {
				return (
					<SoundButton
						state={props.state}
						dispatch={props.dispatch}
						key={index}
						note={index}
						trackName={props.buttonName}
					/>
				);
			})}
		</li>
	);
};
