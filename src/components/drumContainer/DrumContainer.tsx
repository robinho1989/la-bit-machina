import styles from './drumContainer.module.css';
export const DrumContainer = () => {
	const columns = [...Array(16).keys()];
    console.log(columns)
	const buttonsArr = [
		{ buttonName: 'kick', icon: 'srcassetsloud-icon.png' },
		{ buttonName: 'snare', icon: 'srcassetsloud-icon.png' },
		{ buttonName: 'hh open', icon: 'srcassetsloud-icon.png' },
		{ buttonName: 'hh closed', icon: 'srcassetsloud-icon.png' },
		{ buttonName: 'clap', icon: 'srcassetsloud-icon.png' },
		{ buttonName: 'rim', icon: 'srcassetsloud-icon.png' },
		{ buttonName: 'tom', icon: 'srcassetsloud-icon.png' },
	];
	return (
		<section className={styles.container}>
			<ul>
				{buttonsArr.map((element) => {
					return (
						<li key={element.buttonName}>
							<ul>
                                {columns.map(element=>{
                                    return <li>
                                        <button>s</button>
                                    </li>
                                })}
                            </ul>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
