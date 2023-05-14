interface ButtonProps {
	text: string;
	image: string;
}
import styles from './actionButton.module.css';
export const ActionButton = ({ text, image }: ButtonProps) => {
	return (
		<button className={styles.actionButton}>
			<p>{text}</p> <img src={image} alt='Icon' />
		</button>
	);
};
