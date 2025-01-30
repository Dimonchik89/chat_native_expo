import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import HeartsIcon from '../icons/Hearts';
import { AdvicesType, ChatAuthorType } from '../../types/types';
import { router } from 'expo-router';
import { createSlug } from '../../utils';
import { changeActualChat, addToChat } from '../../store/chatSlice/chatSlice';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store/store';
import { allChats } from '../../store/chatSlice/selectors';
import { createStructuredSelector } from 'reselect';

interface Props extends PropsFromRedux {
	posts: AdvicesType[];
}

const AdvicesItem: React.FC<Props> = ({
	posts,
	changeActualChat,
	allChats,
	addToChat,
}) => {
	const handleOpenChat = (text: string) => {
		const slug = createSlug('Advices');

		if (allChats[slug]) {
			changeActualChat(slug);
			router.push('../chat');
		} else {
			changeActualChat(slug);
			addToChat({
				author: ChatAuthorType.AI,
				text,
			});
			router.push({
				pathname: '../chat',
			});
		}
	};

	return (
		<View className="flex gap-2 mr-2">
			{posts?.map((item, i) => (
				<TouchableOpacity
					key={`${item.description}-${Math.random()}`}
					onPress={() => handleOpenChat(item.description)}
				>
					<View className="bg-gray p-2 rounded-xl w-[386] gap-2 flex-row">
						<LinearGradient
							colors={['#448ACA', '#5C34B1']}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
							className="w-12 h-12 flex justify-center items-center rounded-2xl overflow-hidden"
						>
							<View className="justify-center items-center">
								<HeartsIcon width={24} height={24} />
							</View>
						</LinearGradient>
						<Text className="text-white text-sm flex-1">
							{item.description}
						</Text>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};

const mapStateToProps = createStructuredSelector({
	allChats,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	changeActualChat: bindActionCreators(changeActualChat, dispatch),
	addToChat: bindActionCreators(addToChat, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AdvicesItem);
