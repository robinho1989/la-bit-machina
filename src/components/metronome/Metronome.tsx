import styles from './metronome.module.css';

interface MetronomeProps {
	tempo: number;
	setTempo: React.Dispatch<React.SetStateAction<number>>;
}

export const Metronome = ({ tempo, setTempo }: MetronomeProps) => {
	const handleIncreaseTempo = () => {
		setTempo(tempo + 1);
	};
	const handleDecreaseTempo = () => {
		setTempo(tempo - 1);
	};
	return (
		<section className={styles.metronomeContainer}>
			<div className={styles.arrowButtonsContainer}>
				<button onClick={handleIncreaseTempo}>
					<img src='src/assets/Triangle-up.png' alt='Arrow up' />
				</button>
				<button onClick={handleDecreaseTempo}>
					<img src='src/assets/Triangle-down.png' alt='Arrow down' />
				</button>
			</div>
			<div className={styles.tempoContainer}>
				<p className={styles.tempoText}>
					<span>{tempo}</span>BPM
				</p>
			</div>
		</section>
	);
};
