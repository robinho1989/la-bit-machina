import { ActionButton } from '../actionButton/ActionButton';
import { SoundButton } from '../soundButton/SoundButton';
import styles from './drumContainer.module.css';
export const DrumContainer = () => {
	const columns = [...Array(18).keys()];

	const buttonsArr = [
		{
			buttonName: 'kick',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-kick.aif',
		},
		{
			buttonName: 'snare',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-snare.aif',
		},
		{
			buttonName: 'hh open',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-hh-open.aif',
		},
		{
			buttonName: 'hh closed',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-hh-closed.aif',
		},
		{
			buttonName: 'clap',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-clap.aif',
		},
		{
			buttonName: 'rim',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-rim.aif',
		},
		{
			buttonName: 'tom',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-tom.aif',
		},
	];
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
								<SoundButton />
							)}
						</li>
					))
				)}
			</ul>
		</section>
	);
};
