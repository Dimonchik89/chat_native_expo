import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ArrowRight from '../icons/ArrowRight';

interface Props {
	title: string;
	navigationFn: () => void;
}

const HeadingForSection: React.FC<Props> = ({ title, navigationFn }) => {
	return (
		<View className="flex-row justify-between mb-[6]">
			<Text className="text-xl text-white">{title}</Text>
			<TouchableOpacity onPress={navigationFn}>
				<View className="flex-row gap-3 items-center">
					<Text className="text-sm text-textGray">See All</Text>
					<ArrowRight width={6} height={12} />
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default HeadingForSection;
