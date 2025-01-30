import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { ChatAuthorType, FormType } from '../../types/types';
import { LinearGradient } from 'expo-linear-gradient';
import MicrophoneIcon from '../icons/Microphone';
import ArrowSendIcon from '../icons/ArrowSend';
import { changeActualChat, addToChat } from '../../store/chatSlice/chatSlice';
import { connect, ConnectedProps } from 'react-redux';
import { router } from 'expo-router';
import { AppDispatch } from '../../store/store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { helloAiText } from '../../constants/chatContent/aiMessage';
import { allChats } from '../../store/chatSlice/selectors';
import { createStructuredSelector } from 'reselect';
import { placeholderMessage } from '../../constants/chatContent/placeholredMessage';
import { createSlug, generateRandomNum } from '../../utils';
import CloseButton from '../Button/CloseButton';

interface Props extends PropsFromRedux {
	type: FormType;
	placeholder: string;
	Icon: (props: any) => React.JSX.Element;
}

const Form: React.FC<Props> = ({
	type = FormType.search,
	placeholder,
	Icon,
	changeActualChat,
	addToChat,
	allChats,
}) => {
	const [value, setValue] = useState<string>('');
	const isChatForm = type === FormType.chat;
	const isFormChatOrScreenChat =
		type === FormType.chat || type === FormType.screenChat;
	const CustomComponent = isChatForm ? LinearGradient : View;

	const selectMessageToSend = () => {
		const messageNumber = generateRandomNum(4);
		const aiMessage = placeholderMessage[messageNumber];
		addToChat({ author: ChatAuthorType.AI, text: aiMessage });
	};

	const resetValue = () => {
		setValue('');
	};

	const handleOpenChat = () => {
		if (type === FormType.chat) {
			const slug = createSlug(`${Date.now()}`);
			changeActualChat(slug);
			if (!allChats[slug]) {
				addToChat({ author: ChatAuthorType.AI, text: helloAiText('AI') });
				addToChat({ author: ChatAuthorType.USER, text: value });
				selectMessageToSend();
				resetValue();
				router.push('../chat');
				return;
			} else {
				changeActualChat('AI assistant');
				addToChat({ author: ChatAuthorType.USER, text: value });
				selectMessageToSend();
				resetValue();
				router.push('../chat');
				return;
			}
		}

		if (type === FormType.screenChat) {
			addToChat({ author: ChatAuthorType.USER, text: value });
			resetValue();
			selectMessageToSend();
			return;
		}
	};

	return (
		<View
			className={`flex-row items-center ${isFormChatOrScreenChat && 'gap-2'}`}
		>
			<CustomComponent
				colors={['#448ACA', '#5C34B1']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				className={`px-[1] py-[1] rounded-2xl overflow-hidden flex-1`}
			>
				<View
					className={`flex-row items-center px-4 bg-gray rounded-2xl overflow-hidden`}
				>
					<Icon width={20} height={20} />
					<TextInput
						multiline
						onChangeText={setValue}
						value={value}
						placeholder={placeholder}
						className="ml-3 py-3 flex-1 placeholder:text-lightGray placeholder:text-base text-white"
					/>
					{value.length ? <CloseButton handlePress={resetValue} /> : null}
				</View>
			</CustomComponent>
			{isFormChatOrScreenChat && (
				<TouchableOpacity onPress={handleOpenChat}>
					<LinearGradient
						colors={['#448ACA', '#5C34B1']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						className="w-12 h-12 justify-center items-center rounded-2xl overflow-hidden"
					>
						{value.length ? (
							<ArrowSendIcon width={20} height={20} />
						) : (
							<MicrophoneIcon width={14} height={18} />
						)}
					</LinearGradient>
				</TouchableOpacity>
			)}
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

export default connector(Form);
