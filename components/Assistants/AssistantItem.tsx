import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import GradientWrapper from '../GradientWrapper/GradientWrapper';
import { AssistantType, ChatAuthorType } from '../../types/types';
import { router } from 'expo-router';
import { changeActualChat, addToChat } from '../../store/chatSlice/chatSlice';
import { AppDispatch } from '../../store/store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { ConnectedProps, connect } from 'react-redux';
import { helloAiText } from '../../constants/chatContent/aiMessage';
import { allChats, actualChat } from '../../store/chatSlice/selectors';
import { createStructuredSelector } from 'reselect';
import { createSlug } from '../../utils';

interface Props extends PropsFromRedux {
	assistant: AssistantType;
}

const AssistantItem: React.FC<Props> = ({
	assistant,
	changeActualChat,
	addToChat,
	actualChat,
	allChats,
}) => {
	const handleOpenChat = () => {
		const slug = createSlug(assistant.title);

		if (allChats[slug]) {
			changeActualChat(slug);
			router.push({
				pathname: '../chat',
			});
		} else {
			changeActualChat(slug);
			addToChat({
				author: ChatAuthorType.AI,
				text: helloAiText(assistant.title),
			});
			router.push({
				pathname: '../chat',
			});
		}
	};

	return (
		<View className="w-[120] h-[135] relative mr-2">
			<View className="w-[120] h-[120] bg-gray rounded-2xl relative mr-2">
				<Image source={assistant.imgPath} className="w-[120] h-[120]" />
			</View>
			<TouchableOpacity
				onPress={handleOpenChat}
				className="absolute left-0 right-0 width-full -bottom-[0]"
			>
				<GradientWrapper>
					<Text className="text-white text-xs font-medium text-center">
						{assistant.title}
					</Text>
				</GradientWrapper>
			</TouchableOpacity>
		</View>
	);
};

const mapStateToProps = createStructuredSelector({
	allChats,
	actualChat,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	changeActualChat: bindActionCreators(changeActualChat, dispatch),
	addToChat: bindActionCreators(addToChat, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AssistantItem);
