import React from 'react';
import Svg, { Path, RadialGradient, Defs, Stop } from 'react-native-svg';

const StarIcon = (props: any) => {
	return (
		<Svg
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M10.6161 1.03676L11.9669 3.94807C12.222 4.4912 12.7237 4.87155 13.3106 4.95685L16.4849 5.44598C17.921 5.66355 18.5001 7.42598 17.4968 8.46529L15.0793 10.9579C14.8847 11.1586 14.74 11.4021 14.6568 11.669C14.5736 11.9358 14.5543 12.2185 14.6004 12.4942L15.156 15.9181C15.3963 17.3925 13.8358 18.4952 12.5311 17.7729L9.86636 16.2906C9.60243 16.1418 9.30457 16.0636 9.00158 16.0636C8.69859 16.0636 8.40073 16.1418 8.1368 16.2906L5.4728 17.7736C4.1674 18.4952 2.60766 17.3925 2.84714 15.9181L3.40279 12.4942C3.44886 12.2185 3.42952 11.9358 3.34633 11.669C3.26314 11.4021 3.11842 11.1586 2.92384 10.9579L0.507141 8.46607C-0.504773 7.41737 0.0821843 5.66355 1.51905 5.4452L4.69253 4.95685C4.98175 4.9106 5.25531 4.79446 5.48947 4.61853C5.72364 4.4426 5.91133 4.21219 6.03627 3.94728L7.38784 1.03598C8.0288 -0.345326 9.97515 -0.345326 10.6153 1.03598"
				fill="url(#paint0_radial_2023_42)"
				{...props}
			/>
			<Defs>
				<RadialGradient
					id="paint0_radial_2023_42"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(9.00002 9.00059) rotate(90) scale(9 9.00001)"
				>
					<Stop stop-color="#DDBA38" />
					<Stop offset="1" stop-color="#DDBA38" stop-opacity="0" />
				</RadialGradient>
			</Defs>
		</Svg>
	);
};

export default StarIcon;
