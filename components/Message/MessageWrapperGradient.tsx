import { LinearGradient } from 'expo-linear-gradient';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const MessageWrapperGradient: React.FC<Props> = ({ children }) => {
	return (
		<LinearGradient
			colors={['#448ACA', '#5C34B1']}
			start={{ x: 0, y: 0 }}
			end={{ x: 0, y: 1 }}
			className={`overflow-hidden w-5/6 mb-3 px-4 py-3 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm mr-0 ml-auto bg-lightBlue `}
		>
			{children}
		</LinearGradient>
	);
};

export default MessageWrapperGradient;
