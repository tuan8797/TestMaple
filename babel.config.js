module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@app-views': './src/views',
					'@app-navigation': './src/navigation',
					'@app-assets': './src/assets',
					'@app-uikits': './src/uikits',
				},
			},
		],
	],
};
