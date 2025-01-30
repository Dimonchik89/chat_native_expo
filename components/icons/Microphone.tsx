import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MicrophoneIcon = (props: any) => {
	return (
		<Svg
			viewBox="0 0 16 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M5 4C5 3.20435 5.31607 2.44129 5.87868 1.87868C6.44129 1.31607 7.20435 1 8 1C8.79565 1 9.55871 1.31607 10.1213 1.87868C10.6839 2.44129 11 3.20435 11 4V9C11 9.79565 10.6839 10.5587 10.1213 11.1213C9.55871 11.6839 8.79565 12 8 12C7.20435 12 6.44129 11.6839 5.87868 11.1213C5.31607 10.5587 5 9.79565 5 9V4Z"
				fill="white"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				{...props}
			/>
			<Path
				d="M8 16C6.14348 16 4.36301 15.2625 3.05025 13.9497C1.7375 12.637 1 10.8565 1 9V8M8 16C9.85652 16 11.637 15.2625 12.9497 13.9497C14.2625 12.637 15 10.8565 15 9V8M8 16V19M8 19H11M8 19H5"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				{...props}
			/>
		</Svg>
	);
};

export default MicrophoneIcon;
