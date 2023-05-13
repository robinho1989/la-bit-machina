import { ActionButton } from '../actionButton/ActionButton';
import { SoundButton } from '../soundButton/SoundButton';
import styles from './drumContainer.module.css';
export const DrumContainer = () => {
	const columns = [...Array(18).keys()];

	const buttonsArr = [
		{ buttonName: 'kick', icon: 'src/assets/loud-icon.png' },
		{ buttonName: 'snare', icon: 'src/assets/loud-icon.png' },
		{ buttonName: 'hh open', icon: 'src/assets/loud-icon.png' },
		{ buttonName: 'hh closed', icon: 'src/assets/loud-icon.png' },
		{ buttonName: 'clap', icon: 'src/assets/loud-icon.png' },
		{ buttonName: 'rim', icon: 'src/assets/loud-icon.png' },
		{ buttonName: 'tom', icon: 'src/assets/loud-icon.png' },
	];
	return (
		<section className={styles.container}>
			<ul className={styles.gridContainer}>
				{buttonsArr.map((row) =>
					columns.map((col) => (
						<li key={`${row}-${col}`} className={styles.gridItem}>
							{col === 0 ? (
								<ActionButton text={row.buttonName} image={row.icon} />
							) : (
								<SoundButton/>
							)}
						</li>
					))
				)}
			</ul>
		</section>
	);
};
