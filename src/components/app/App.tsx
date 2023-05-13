import { DrumContainer } from '../drumContainer/DrumContainer';
import styles from './app.module.css';

export const App = () => {
	return (
		<div className={styles.appContainer}>
			<DrumContainer />
		</div>
	);
};
