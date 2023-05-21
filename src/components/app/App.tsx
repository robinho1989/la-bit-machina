import { DrumContainer } from '../drumContainer/DrumContainer';
import { Metronome } from '../metronome/Metronome';
import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [tempo, setTempo] = useState(120);

	const [isClicked, setIsClicked] = useState(false);
	
	return (
		<div className={styles.appContainer}>
			<Metronome tempo={tempo} setTempo={setTempo} />
			<DrumContainer isClicked={isClicked} setIsClicked={setIsClicked} />
		</div>
	);
};
