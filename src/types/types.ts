interface DrumContainerProps {
	state: AppState;
	dispatch: React.Dispatch<Action>;
}
interface SoundButtonProps {
	note: number;
	state: AppState;
	dispatch: React.Dispatch<Action>;
	trackName: string;
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
	state: AppState;
	dispatch: React.Dispatch<Action>;
}
interface ButtonStatusArray {
	isActive: boolean;
}

interface AppState {
	trackName: string;
	note: null | number;
}
interface Action {
	type: 'toggleNote';
	payloadTrack: string;
	payloadNote: null | number;
}
export type {
	AppState,
	Action,
	DrumContainerProps,
	MetronomeProps,
	ButtonProps,
	TrackProps,
	SoundButtonProps,
	ButtonStatusArray,
};
