// const columns = [...Array(17).keys()];

const buttonStatus = { isActive: false };
const buttonStatusArray = new Array(17).fill(buttonStatus);
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
export { buttonStatusArray, buttonsArr };
