import { DrumContainerProps } from '../../types/types';
import { buttonsArr } from '../../data/data';
import { Track } from '../track/Track';
import styles from './drumContainer.module.css';

export const DrumContainer = ({
	isClicked,
	setIsClicked,
	isActiveButtons,
	setIsActiveButtons
}: DrumContainerProps) => {
	return (
		<section className={styles.container}>
			<ul>
				{buttonsArr.map((row,rowIndex) => (
					<Track
						key={row.buttonName}
						buttonName={row.buttonName}
						rowIndex={rowIndex}
						iconSrc={row.icon}
						musicSrc={row.musicSrc}
						isClicked={isClicked}
						setIsClicked={setIsClicked}
						isActiveButtons={isActiveButtons}
						setIsActiveButtons={setIsActiveButtons}
					/>
				))}
			</ul>
		</section>
	);
};
