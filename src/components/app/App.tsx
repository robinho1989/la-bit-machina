import { DrumContainer } from '../drumContainer/DrumContainer';
import { Metronome } from '../metronome/Metronome';
import { useState, useReducer } from 'react';

import styles from './app.module.css';
import { Action, AppState } from '../../types/types';


const reducer = (state: AppState, action: Action) => {
	switch (action.type) {
		case 'toggleNote':
			return  { trackName: action.payloadTrack, note: action.payloadNote} ;
		default:
			throw new Error('Something went wrong');
	}
};
export const App = () => {
	const initialValue = { trackName: '', note: null };
	const [state, dispatch] = useReducer(reducer, initialValue);
	const [tempo, setTempo] = useState(120);

	return (
		<div className={styles.appContainer}>
			<Metronome tempo={tempo} setTempo={setTempo} />
			<DrumContainer state={state} dispatch={dispatch} />
		</div>
	);
};
