import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRight = (props: any) => {
	return (
		<Svg
			viewBox="0 0 6 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M6 6C6 6.07783 5.98569 6.15157 5.95706 6.2212C5.92843 6.28674 5.88548 6.34819 5.82822 6.40553L0.96319 11.1674C0.85276 11.278 0.719836 11.3333 0.564417 11.3333C0.458077 11.3333 0.364008 11.3088 0.282208 11.2596C0.196318 11.2104 0.128834 11.1429 0.0797543 11.0568C0.0265846 10.9749 -1.78814e-07 10.8807 -1.78814e-07 10.7742C-1.78814e-07 10.6226 0.0552147 10.4895 0.165644 10.3748L4.6319 6L0.165644 1.6252C0.0552147 1.5105 -1.78814e-07 1.37737 -1.78814e-07 1.22581C-1.78814e-07 1.11931 0.0265846 1.02509 0.0797543 0.943169C0.128834 0.857148 0.196318 0.78956 0.282208 0.740404C0.364008 0.691249 0.458077 0.666672 0.564417 0.666672C0.719836 0.666672 0.85276 0.719923 0.96319 0.826426L5.82822 5.59447C5.88548 5.65182 5.92843 5.71531 5.95706 5.78495C5.98569 5.85049 6 5.92218 6 6Z"
				fill="#CBCBD7"
				{...props}
			/>
		</Svg>
	);
};

export default ArrowRight;
