import { ActionButton } from '../actionButton/ActionButton';
import { SoundButton } from '../soundButton/SoundButton';
import { columns } from '../../data/data';
import styles from './track.module.css'
interface TrackProps {
	buttonName: string;
	iconSrc: string;
	musicSrc: string;
	isClicked: boolean;
	setIsClicked: () => void;
}

export const Track = (props: TrackProps) => {
	return (
		<div>
			{columns.map(() => {
				return (
					<li key={props.buttonName} className={styles.gridItem}>
						<ActionButton
							text={props.buttonName}
							image={props.iconSrc}
							musicSrc={props.musicSrc}
						/>

						<SoundButton isClicked={props.isClicked} setIsClicked={props.setIsClicked} />
					</li>
				);
			})}
		</div>
	);
};
