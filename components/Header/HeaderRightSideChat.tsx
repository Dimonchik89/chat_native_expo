import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import CustomIcon from '../icons/Custom';
import DownloadIcon from '../icons/Download';

const HeaderRightSideChat = () => {
	return (
		<View className="flex flex-row gap-3">
			<TouchableOpacity>
				<CustomIcon width={20} height={20} />
			</TouchableOpacity>
			<TouchableOpacity>
				<DownloadIcon width={20} height={20} />
			</TouchableOpacity>
		</View>
	);
};

export default HeaderRightSideChat;
