import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import ExploreIcon from '../../components/icons/Explore';
import TasksIcon from '../../components/icons/Tasks';
import HistoryIcon from '../../components/icons/History';

export default function TabLayout() {


  return (
    <Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#fff',
				tabBarInactiveTintColor: '#6c6c76',
				tabBarStyle: {
					backgroundColor: '#1C1D22',
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Explore',
					tabBarIcon: ({ color }) => (
						<ExploreIcon width={24} height={24} stroke={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="tasks"
				options={{
					title: 'Tasks',
					tabBarIcon: ({ color }) => (
						<TasksIcon width={24} height={24} stroke={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="history"
				options={{
					title: 'History',
					tabBarIcon: ({ color }) => (
						<HistoryIcon width={24} height={24} stroke={color} />
					),
				}}
			/>
		</Tabs>
  );
}
