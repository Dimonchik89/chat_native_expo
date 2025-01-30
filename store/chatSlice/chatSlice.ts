import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createSlug } from '../../utils';
import { ChatAuthorType, MessageType } from '../../types/types';

interface AllChatsI {
	[key: string]: [MessageType];
}

export interface ChatState {
	actualChat: string;
	allChats: AllChatsI;
}

const initialState: ChatState = {
	actualChat: '',
	allChats: {},
};

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		changeActualChat: (state, action: PayloadAction<string>) => {
			const slug = createSlug(action.payload);
			state.actualChat = slug;
		},
		addToChat: (
			state,
			action: PayloadAction<{ author: ChatAuthorType; text: string }>,
		) => {
			const isChat = state.allChats[state.actualChat];
			if (!isChat) {
				state.allChats[state.actualChat] = [
					{
						author: action.payload.author,
						text: action.payload.text,
					},
				];
			} else {
				state.allChats[state.actualChat].push({
					author: action.payload.author,
					text: action.payload.text,
				});
			}
		},
	},
});

export const { changeActualChat, addToChat } = chatSlice.actions;
export default chatSlice.reducer;
