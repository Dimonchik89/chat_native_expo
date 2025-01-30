import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ChatState } from './chatSlice';

type BaseStateT = (state: RootState) => ChatState;

const baseState: BaseStateT = (state) => state.chat;
export const actualChat = createSelector(
	baseState,
	(state) => state.actualChat,
);
export const allChats = createSelector(baseState, (state) => state.allChats);
