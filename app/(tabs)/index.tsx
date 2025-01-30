import { View, SafeAreaView, ScrollView } from 'react-native';

import Header from '../../components/Header/Header';
import { StatusBar } from 'expo-status-bar';
import Layout from '../../components/Layout/Layout';
import { HeaderType } from '../../types/types';
import Search from '../../components/Search/Search';
import HomeForm from '../../components/HomeForm/HomeForm';
import Promo from '../../components/Promo/Promo';
import Assistants from '../../components/Assistants/Assistants';
import Popular from '../../components/Popular/Popular';
import Advices from '../../components/Advices/Advices';

export default function HomeScreen() {
	return (
		<SafeAreaView className="flex-1 pt-10 bg-darkGray">
			<StatusBar style="light" backgroundColor="#1c1d22" />
			<View className="h-full bg-darkGray">
				<Layout>
					<ScrollView>
						<Header title="Explore" type={HeaderType.home} />
						<Search />
						<Promo />
						<Assistants />
						<Popular />
						<Advices />
						<HomeForm />
					</ScrollView>
				</Layout>
			</View>
		</SafeAreaView>
	);
}
