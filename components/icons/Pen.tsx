import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PenIcon = (props: any) => {
	return (
		<Svg
			viewBox="0 0 19 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M17.71 4.04C17.37 4.38 17.04 4.71 17.03 5.04C17 5.36 17.34 5.69 17.66 6C18.14 6.5 18.61 6.95 18.59 7.44C18.57 7.93 18.06 8.44 17.55 8.94L13.42 13.08L12 11.66L16.25 7.42L15.29 6.46L13.87 7.87L10.12 4.12L13.96 0.289999C14.35 -0.100001 15 -0.100001 15.37 0.289999L17.71 2.63C18.1 3 18.1 3.65 17.71 4.04ZM0 14.25L9.56 4.68L13.31 8.43L3.75 18H0V14.25Z"
				fill="white"
				{...props}
			/>
		</Svg>
	);
};

export default PenIcon;
