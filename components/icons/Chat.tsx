import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatIcon = (props: any) => {
	return (
		<Svg
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M1 5V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H5M15 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V5M19 15V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H15M5 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V15M5 10H15"
				stroke="#CBCBD7"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				{...props}
			/>
		</Svg>
	);
};

export default ChatIcon;
