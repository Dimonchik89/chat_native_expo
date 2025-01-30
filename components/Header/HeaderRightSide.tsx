import React from 'react';
import { HeaderType } from '../../types/types';
import HeaderRightSideHome from './HeaderRightSideHome';
import HeaderRightSideChat from './HeaderRightSideChat';

interface Props {
	type: HeaderType;
}

const HeaderRightSide: React.FC<Props> = ({ type }) => {
	return (
		<>
			{type === HeaderType.home ? (
				<HeaderRightSideHome />
			) : (
				<HeaderRightSideChat />
			)}
		</>
	);
};

export default HeaderRightSide;
