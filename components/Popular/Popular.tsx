import React from 'react';
import { FlatList, View } from 'react-native';
import HeadingForSection from '../Header/HeadingForSection';
import { router } from 'expo-router';
import PopularItem from './PopularItem';
import { popularData } from '../../constants/data/popularData';

const Popular = () => {
	const handleNavigate = () => {
		// router.push('../chat');
	};

	return (
		<View className="mb-3 gap-1">
			<HeadingForSection
				title="Popular  Promts"
				navigationFn={handleNavigate}
			/>
			<FlatList
				horizontal={true}
				data={popularData}
				renderItem={({ item }) => <PopularItem {...item} />}
				keyExtractor={(item, index) => `${item.title}-${index}`}
			/>
		</View>
	);
};

export default Popular;
