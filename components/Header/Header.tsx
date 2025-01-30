import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SettingsIcon from '../icons/Settings';
import HeaderRightSide from './HeaderRightSide';
import { HeaderType } from '../../types/types';

interface Props {
	type: HeaderType;
	title: string;
}

const Header: React.FC<Props> = ({ title, type = HeaderType.home }) => {
	return (
		<View className="my-4">
			<View className="flex flex-row items-center justify-between">
				<View className="w-20">
					<TouchableOpacity>
						<SettingsIcon width={20} height={20} />
					</TouchableOpacity>
				</View>
				<Text className="text-xl text-white font-medium">{title}</Text>
				<HeaderRightSide type={type} />
			</View>
		</View>
	);
};

export default Header;
