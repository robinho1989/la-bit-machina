import { DrumContainerProps } from '../../types/types';
import { buttonsArr } from '../../data/data';
import { Track } from '../track/Track';
import styles from './drumContainer.module.css';

export const DrumContainer = ({ state, dispatch }: DrumContainerProps) => {
	return (
		<section className={styles.container}>
			<ul>
				{buttonsArr.map((row, rowIndex) => (
					<Track
						state={state}
						dispatch={dispatch}
						key={row.buttonName}
						buttonName={row.buttonName}
						rowIndex={rowIndex}
						iconSrc={row.icon}
						musicSrc={row.musicSrc}
					/>
				))}
			</ul>
		</section>
	);
};
