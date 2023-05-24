import { DrumContainerProps } from '../../types/types';
import { buttonsArr } from '../../data/data';
import { Track } from '../track/Track';
import styles from './drumContainer.module.css';

export const DrumContainer = ({
	isClicked,
	setIsClicked,
}: DrumContainerProps) => {
	return (
		<section className={styles.container}>
			<ul>
				{buttonsArr.map((row) => (
					<Track
						key={row.buttonName}
						buttonName={row.buttonName}
						iconSrc={row.icon}
						musicSrc={row.musicSrc}
						isClicked={isClicked}
						setIsClicked={setIsClicked}
					/>
				))}
			</ul>
		</section>
	);
};
