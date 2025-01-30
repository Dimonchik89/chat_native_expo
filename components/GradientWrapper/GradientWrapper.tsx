import { LinearGradient } from 'expo-linear-gradient';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const GradientWrapper: React.FC<Props> = ({ children }) => {
	return (
		<LinearGradient
			colors={['#59B0FF', '#925FFF']}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			className={`px-[1] py-[1] rounded-full overflow-hidden`}
		>
			<LinearGradient
				colors={['#448ACA', '#4C6BC1', '#5C34B1']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				className="px-3 py-2 rounded-full overflow-hidden"
			>
				{children}
			</LinearGradient>
		</LinearGradient>
	);
};

export default GradientWrapper;
