import React from 'react';
import { Text, View } from 'react-native';
import StarIcon from '../icons/Star';
import GradientWrapper from '../GradientWrapper/GradientWrapper';

const HeaderRightSideHome = () => {
	return (
		<GradientWrapper>
			<View className="flex flex-row items-center gap-1">
				<StarIcon width={18} height={18} fill="#DDBA38" />
				<Text className="text-white text-xl font-semibold">10</Text>
			</View>
		</GradientWrapper>
	);
};

export default HeaderRightSideHome;
