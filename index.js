/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { registerOptions, registerScreens } from './src/navigation/navigation-helpers';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
	registerOptions();

	Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: {
							name: 'HomePage',
						},
					},
				],
			},
		},
	});
});
