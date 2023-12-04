import HomePage from '@app-views/HomePage/HomePage';
import NewBookPage from '@app-views/NewBookPage/NewBookPage';
import { ComponentProvider } from 'react-native';

export interface IScreenComponent {
	name: string | number;
	component: ComponentProvider;
}

const screens = {
	HomePage: {
		name: 'HomePage',
		component: () => HomePage,
	},
	NewBookPage: {
		name: 'NewBookPage',
		component: () => NewBookPage,
	},
};

export default screens;
