import { ImageSourcePropType } from 'react-native';

export enum HeaderType {
	home = 'HOME',
	chat = 'CHAT',
}

export enum FormType {
	search = 'SEARCH',
	chat = 'CHAT',
	screenChat = 'SCREEN_CHAT',
}

export interface AssistantType {
	imgPath: ImageSourcePropType;
	title: string;
}

export interface PopularType {
	Icon: (props: any) => React.JSX.Element;
	title: string;
	description: string;
	bgColor: string;
	borderGradient: readonly [string, string, ...string[]];
}

export interface AdvicesType {
	description: string;
}

export enum ChatAuthorType {
	AI = 'ai',
	USER = 'user',
}

export interface MessageType {
	author: ChatAuthorType;
	text: string;
}
