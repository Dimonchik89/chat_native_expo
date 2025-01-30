import React from 'react';
import { View } from 'react-native';
import Form from '../Form/Form';
import { FormType } from '../../types/types';
import ChatIcon from '../icons/Chat';

const HomeForm = () => {
	return (
		<View className="pt-4">
			<Form
				type={FormType.chat}
				Icon={ChatIcon}
				placeholder="Enter text here..."
			/>
		</View>
	);
};

export default HomeForm;
