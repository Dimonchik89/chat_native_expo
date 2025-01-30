import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

interface Props extends PropsWithChildren {}

const MessageWrapperDefault: React.FC<Props> = ({ children }) => {
	return (
		<View className="bg-gray w-5/6 mb-3 px-4 py-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-sm ">
			{children}
		</View>
	);
};

export default MessageWrapperDefault;
