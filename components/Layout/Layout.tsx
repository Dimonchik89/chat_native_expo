import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return <View className="pt-4 pr-4 pb-1 pl-4 h-full">{children}</View>;
};

export default Layout;
