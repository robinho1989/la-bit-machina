import { ActionButton } from '../actionButton/ActionButton';
import { SoundButton } from '../soundButton/SoundButton';
import { TrackProps } from '../../types/types';
import { buttonStatusArray } from '../../data/data';
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
			{props.isActiveButtons.map((button, index) => {
				return (
					<SoundButton
						active={button.isActive}
						key={index}
						index={index}
						isClicked={props.isClicked}
						setIsClicked={props.setIsClicked}
						isActiveButtons={props.isActiveButtons}
						setIsActiveButtons={props.setIsActiveButtons}
					/>
				);
			})}
		</li>
	);
};
