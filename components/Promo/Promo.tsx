import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const Promo = () => {
	return (
		<TouchableOpacity className="mb-4">
			<LinearGradient
				colors={['#59B0FF', '#925FFF']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				className={`px-[1] py-[1] rounded-2xl overflow-hidden`}
			>
				<LinearGradient
					colors={['#4A33A8', '#3354AB']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					className={`px-4 py-[28] rounded-2xl overflow-hidden relative`}
				>
					<Text className="text-white font-medium text-base capitalize">
						Start your free 3-day premium
					</Text>
					<Text className="text-white text-sm">Click to get started now.</Text>

					<Image
						source={require('../../assets/images/gift-box-big.png')}
						style={{ width: 110, height: 85 }}
						className="absolute right-0 bottom-0 z-10"
					/>
					<Image
						source={require('../../assets/images/gift-box-small.png')}
						style={{ width: 55, height: 45 }}
						className="absolute right-[90] bottom-0"
					/>
				</LinearGradient>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default Promo;
