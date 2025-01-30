import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import { ChatAuthorType, FormType, HeaderType } from '../types/types';
import { router } from 'expo-router';
import { actualChat, allChats } from '../store/chatSlice/selectors';
import { createStructuredSelector } from 'reselect';
import { connect, ConnectedProps } from 'react-redux';
import Form from '../components/Form/Form';
import ChatIcon from '../components/icons/Chat';
import Message from '../components/Message/Message';

interface Props extends PropsFromRedux {}

const Chat: React.FC<Props> = ({ actualChat, allChats }) => {
	const chat = allChats[actualChat];

	return (
		<SafeAreaView className="flex-1 pt-10 bg-darkGray">
			<StatusBar style="light" backgroundColor="#1c1d22" />
			<View className="flex-1">
				<Layout>
					<View className="flex-1">
						<Header title="Chat" type={HeaderType.chat} />
						<Text
							className="text-3xl text-lightBlue"
							onPress={() => router.push('/')}
						>
							Go back
						</Text>
						<FlatList
							inverted // bottom scroll
							contentContainerStyle={{ flexDirection: 'column-reverse' }} // bottom scroll
							className="w-full flex-col"
							data={chat}
							renderItem={({ item, index }) => (
								<Message
									{...item}
									lastMessage={index === chat.length - 1 && index !== 0}
								/>
							)}
							keyExtractor={(item, index) => `${item.text}-${index}`}
						/>
						<Form
							placeholder="Enter text here..."
							Icon={ChatIcon}
							type={FormType.screenChat}
						/>
					</View>
				</Layout>
			</View>
		</SafeAreaView>
	);
};

const mapStateToProps = createStructuredSelector({
	actualChat,
	allChats,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Chat);
