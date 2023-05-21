export interface DrumContainerProps {
	isClicked: boolean;
	setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface MetronomeProps {
	tempo: number;
	setTempo: React.Dispatch<React.SetStateAction<number>>;
}
export interface ButtonProps {
	text: string;
	image: string;
	musicSrc: string;
}
