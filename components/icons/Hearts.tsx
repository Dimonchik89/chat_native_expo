import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HeartsIcon = (props: any) => {
	return (
		<Svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M9.49799 5.793C10.918 3.889 13.053 3.333 15.017 3.868C17.137 4.445 19.001 6.266 19.62 8.802C19.652 8.932 19.68 9.062 19.703 9.192C18.8094 8.8738 17.8375 8.84928 16.929 9.122C15.642 8.17 14.048 8.01 12.631 8.532C10.856 9.187 9.46999 10.848 9.14899 12.938C8.73899 15.614 10.369 18.018 12.674 20.062L13.062 20.398C12.749 20.42 12.431 20.371 12.127 20.306C11.9707 20.2726 11.8154 20.2353 11.661 20.194L11.124 20.044C6.34999 18.701 3.15399 16.6 2.23699 13.46C1.50499 10.954 2.20899 8.445 3.75699 6.885C5.19099 5.44 7.31699 4.854 9.49799 5.793ZM11.126 13.241C11.554 10.449 14.783 9.073 16.441 11.469C16.4569 11.4913 16.4809 11.5064 16.5079 11.5111C16.5348 11.5157 16.5625 11.5096 16.585 11.494C18.962 9.81 21.525 12.207 20.972 14.977C20.652 16.583 19.162 17.917 16.502 18.977L16.067 19.147L15.804 19.255C15.577 19.344 15.337 19.415 15.12 19.377C14.904 19.339 14.703 19.189 14.52 19.029L14.21 18.749C11.897 16.758 10.869 14.922 11.126 13.241Z"
				fill="white"
				{...props}
			/>
		</Svg>
	);
};

export default HeartsIcon;
