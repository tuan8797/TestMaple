import { Navigation, OptionsModalPresentationStyle } from 'react-native-navigation';
import { IScreenComponent } from './navigation-screens';

export const registerScreens = () => {
	const screens = require('./navigation-screens').default;

	const value_screens: IScreenComponent[] = Object.values(screens);

	for (let i = 0; i < value_screens.length; i++) {
		Navigation.registerComponent(value_screens[i].name, value_screens[i].component);
	}
};

export const registerOptions = () => {
	Navigation.setDefaultOptions({
		topBar: {
			visible: false,
			height: 0,
		},
		bottomTabs: {
			visible: false,
			elevation: 0,
		},
		modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
		layout: {
			backgroundColor: '#fff',
			componentBackgroundColor: 'transparent',
			orientation: ['portrait'],
		},
	});
};
