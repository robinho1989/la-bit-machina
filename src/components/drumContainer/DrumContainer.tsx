import { ActionButton } from '../actionButton/ActionButton';
import { SoundButton } from '../soundButton/SoundButton';
import { DrumContainerProps } from '../../types/types';
import { columns, buttonsArr } from '../../data/data';
import styles from './drumContainer.module.css';

export const DrumContainer = ({
	isClicked,
	setIsClicked,
}: DrumContainerProps) => {
	return (
		<section className={styles.container}>
			<ul className={styles.gridContainer}>
				{buttonsArr.map((row) =>
					columns.map((col) => (
						<li key={`${row}-${col}`} className={styles.gridItem}>
							{col === 0 ? (
								<ActionButton
									text={row.buttonName}
									image={row.icon}
									musicSrc={row.musicSrc}
								/>
							) : (
								<SoundButton
									isClicked={isClicked}
									setIsClicked={setIsClicked}
								/>
							)}
						</li>
					))
				)}
			</ul>
		</section>
	);
};
