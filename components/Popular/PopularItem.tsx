import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ChatAuthorType, PopularType } from '../../types/types';
import { router } from 'expo-router';
import { createSlug } from '../../utils';
import { changeActualChat, addToChat } from '../../store/chatSlice/chatSlice';
import { connect, ConnectedProps } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { allChats } from '../../store/chatSlice/selectors';
import { createStructuredSelector } from 'reselect';

interface Props extends PropsFromRedux {}

interface Props extends PopularType {}

const PopularItem: React.FC<Props> = ({
	title,
	description,
	Icon,
	bgColor,
	borderGradient,
	changeActualChat,
	allChats,
	addToChat,
}) => {
	const handleOpenChat = () => {
		const slug = createSlug(title);

		if (allChats[slug]) {
			changeActualChat(slug);
			router.push('../chat');
		} else {
			changeActualChat(slug);
			addToChat({
				author: ChatAuthorType.AI,
				text: description,
			});
			router.push({
				pathname: '../chat',
			});
		}
	};

	return (
		<LinearGradient
			colors={borderGradient}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			className={`px-[1] py-[1] rounded-lg overflow-hidden w-[190] mr-2 `}
		>
			<TouchableOpacity onPress={handleOpenChat}>
				<View
					className={`p-3 mx-0  h-[110] rounded-lg`}
					style={{ backgroundColor: bgColor }}
				>
					<LinearGradient
						colors={borderGradient}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						className={`rounded-lg overflow-hidden w-8 h-8 justify-center items-center`}
					>
						<Icon width="20" height="20" />
					</LinearGradient>
					<View className="mt-2">
						<Text className="text-base font-semibold text-white">{title}</Text>
						<Text className="text-sm text-white">{description}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</LinearGradient>
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

export default connector(PopularItem);
