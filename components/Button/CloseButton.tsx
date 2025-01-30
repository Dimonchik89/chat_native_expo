import React from 'react';
import { TouchableOpacity } from 'react-native';
import CloseIcon from '../icons/Close';

interface Props {
	handlePress: () => void;
}

const CloseButton: React.FC<Props> = ({ handlePress }) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			className="w-6 h-6 p-2 rounded-full mr-0 ml-auto"
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
		>
			<CloseIcon width={8} height={8} />
		</TouchableOpacity>
	);
};

export default CloseButton;
