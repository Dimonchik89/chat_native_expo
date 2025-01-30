import React from 'react';
import { FlatList, View } from 'react-native';
import HeadingForSection from '../Header/HeadingForSection';
import { router } from 'expo-router';
import AdvicesItem from './AdvicesItem';
import { advicesData } from '../../constants/data/advicesData';

const Advices = () => {
	const handleNavigation = () => {
		router.push('../chat');
	};
	return (
		<View className="mb-2">
			<HeadingForSection title="Advices" navigationFn={handleNavigation} />
			<FlatList
				horizontal={true}
				data={advicesData}
				renderItem={({ item }) => <AdvicesItem posts={item} />}
				keyExtractor={(item, index) =>
					`${item[0].description}-${Math.random()}`
				}
			/>
		</View>
	);
};

export default Advices;
