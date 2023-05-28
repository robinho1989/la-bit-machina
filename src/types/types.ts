interface DrumContainerProps {
	isClicked: boolean;
	setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
	isActiveButtons: ButtonStatusArray[];
	setIsActiveButtons: React.Dispatch<React.SetStateAction<ButtonStatusArray[]>>;
}
interface SoundButtonProps {
	active: boolean;
	index: number;
	isClicked: boolean;
	rowIndex: number;
	setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
	isActiveButtons: ButtonStatusArray[];
	setIsActiveButtons: React.Dispatch<React.SetStateAction<ButtonStatusArray[]>>;
}
interface MetronomeProps {
	tempo: number;
	setTempo: React.Dispatch<React.SetStateAction<number>>;
}
interface ButtonProps {
	text: string;
	image: string;
	musicSrc: string;
}
interface TrackProps {
	buttonName: string;
	iconSrc: string;
	musicSrc: string;
	rowIndex: number;
	isClicked: boolean;
	setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
	isActiveButtons: ButtonStatusArray[];
	setIsActiveButtons: React.Dispatch<React.SetStateAction<ButtonStatusArray[]>>;
}
interface ButtonStatusArray {
	isActive: boolean;
}
export type {
	DrumContainerProps,
	MetronomeProps,
	ButtonProps,
	TrackProps,
	SoundButtonProps,
	ButtonStatusArray,
};
