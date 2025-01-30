import React from 'react';
import { FlatList, View } from 'react-native';
import AssistantItem from './AssistantItem';
import HeadingForSection from '../Header/HeadingForSection';
import { router } from 'expo-router';
import { assistansData } from '../../constants/data/assistansData';

const Assistants = () => {
	const handleNavigate = () => {
		// router.push('../chat');
	};

	return (
		<View className="gap-1 mb-4">
			<HeadingForSection title="AI assistants" navigationFn={handleNavigate} />
			<FlatList
				horizontal={true}
				data={assistansData}
				renderItem={({ item }) => <AssistantItem assistant={item} />}
				keyExtractor={(item, index) => `${item.title}-${index}`}
			/>
		</View>
	);
};

export default Assistants;
