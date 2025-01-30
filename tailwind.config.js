/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				white: '#fff',
				darkGray: '#1c1d22',
				gray: '#333',
				lightGray: '#93939f',
				buttonGray: '#58585c',
				textGray: '#CBCBD7',
				iconGray: '#6c6c76',
				lightBlue: '#448ACA',
				borderBlue: '#689aff',
				bgBlue: '#222831',
				bgGreen: '#232c2c',
				violet: '#5C34B1',
				borderViolet: '#8457e3',
				brown: '#2b2427',
				lightBrown: '#2b2627',
				yellow: '#DDBA38',
			},
		},
	},
	plugins: [],
};
