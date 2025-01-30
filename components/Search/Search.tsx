import React from 'react';
import { View } from 'react-native';
import Form from '../Form/Form';
import { FormType } from '../../types/types';
import SearchIcon from '../icons/Search';

const Search = () => {
	return (
		<View className="mb-4">
			<Form type={FormType.search} placeholder="Search" Icon={SearchIcon} />
		</View>
	);
};

export default Search;
