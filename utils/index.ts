export const createSlug = (str: string): string => {
	return str.replaceAll(' ', '_');
};

export const generateRandomNum = (maxCount: number): number => {
	return Math.floor(Math.random() * (maxCount + 1));
};
