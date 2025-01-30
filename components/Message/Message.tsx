import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ChatAuthorType } from '../../types/types';
import { LinearGradient } from 'expo-linear-gradient';
import MessageWrapperGradient from './MessageWrapperGradient';
import MessageWrapperDefault from './MessageWrapperDefault';
import DownloadIcon from '../icons/Download';
import CopyIcon from '../icons/Copy';
import MessageButton from './MessageButton';
import CloseIcon from '../icons/Close';
import CloseButton from '../Button/CloseButton';

interface Props {
	author: ChatAuthorType;
	text: string;
	lastMessage: boolean;
}

const Message: React.FC<Props> = ({ author, text, lastMessage }) => {
	const [value, setValue] = useState<string>('');
	const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout>[]>([]);

	useEffect(() => {
		const textArr = text.split(' ');
		if (lastMessage) {
			for (let i = 0; i < textArr.length; i++) {
				let id = setTimeout(() => {
					setValue((prev) => (prev += ` ${textArr[i]}`));
					if (i === textArr.length - 1) {
						setTimerId([]);
					}
				}, i * 75);
				setTimerId((prev) => [...prev, id]);
			}
		} else {
			setValue(text);
		}
	}, []);

	const handleStopWritingText = () => {
		if (timerId.length) {
			timerId.forEach((item) => clearTimeout(item));
		}
	};

	const CustomComponent =
		author === ChatAuthorType.USER
			? MessageWrapperGradient
			: MessageWrapperDefault;

	useEffect(() => {
		return () => {
			timerId.forEach((item) => clearTimeout(item));
		};
	}, []);

	return (
		<CustomComponent>
			<Text className="text-base text-white">{value}</Text>
			{timerId.length && author === ChatAuthorType.AI ? (
				<CloseButton handlePress={handleStopWritingText} />
			) : (
				<View
					className={`flex-row gap-2 max-w-[163] ${
						author === ChatAuthorType.USER && 'mr-0 ml-auto'
					}`}
				>
					<MessageButton>
						<CopyIcon width={16} height={16} />
						<Text className="text-sm text-white">Copy</Text>
					</MessageButton>
					<MessageButton>
						<DownloadIcon width={16} height={16} />
						<Text className="text-sm text-white">Share</Text>
					</MessageButton>
				</View>
			)}
		</CustomComponent>
	);
};

export default Message;
