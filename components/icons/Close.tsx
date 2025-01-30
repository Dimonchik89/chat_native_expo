import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseIcon = (props: any) => {
	return (
		<Svg
			viewBox="0 0 8 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M7 7L1 1M7 1L1 7"
				stroke="#ECEFF1"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};

export default CloseIcon;
