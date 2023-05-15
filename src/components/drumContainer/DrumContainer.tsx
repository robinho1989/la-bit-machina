import { ActionButton } from '../actionButton/ActionButton';
import { SoundButton } from '../soundButton/SoundButton';
import styles from './drumContainer.module.css';
export const DrumContainer = () => {
	const columns = [...Array(18).keys()];

	const buttonsArr = [
		{
			buttonName: 'kick',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-kick.mp3',
		},
		{
			buttonName: 'snare',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-snare.mp3',
		},
		{
			buttonName: 'hh open',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-hh-open.mp3',
		},
		{
			buttonName: 'hh closed',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-hh-closed.mp3',
		},
		{
			buttonName: 'clap',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-clap.mp3',
		},
		{
			buttonName: 'rim',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-rim.mp3',
		},
		{
			buttonName: 'tom',
			icon: 'src/assets/loud-icon.png',
			musicSrc: 'src/assets/samples/909-tom.mp3',
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
