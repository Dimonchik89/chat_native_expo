import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, View } from 'react-native';

interface Props extends PropsWithChildren {}

const MessageButton: React.FC<Props> = ({ children }) => {
	return (
		<TouchableOpacity
			className="px-3 py-[6] mt-2 flex-row items-center gap-[6] rounded-lg"
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
		>
			{children}
		</TouchableOpacity>
	);
};

export default MessageButton;
