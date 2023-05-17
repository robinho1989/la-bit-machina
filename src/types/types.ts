export interface DrumContainerProps {
	isActive: boolean;
	setIsAvtive: React.Dispatch<React.SetStateAction<boolean>>;
	isClicked: boolean;
	setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface MetronomeProps {
	tempo: number;
	setTempo: React.Dispatch<React.SetStateAction<number>>;
}
