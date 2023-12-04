import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		paddingHorizontal: 16,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 16,
	},
	headerLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	btnBack: {
		width: 32,
		height: 32,
		borderRadius: 32 / 2,
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#E0E0E0',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textDesc: {
		fontSize: 16,
		fontWeight: '600',
		lineHeight: 24,
		marginLeft: 8,
		color: '#303030',
	},
	btnExport: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: '#EDE7FE',
		borderRadius: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	txtExport: {
		fontWeight: 'bold',
		fontSize: 14,
		lineHeight: 16,
		color: '#D3C6F8',
	},
	inputHeader: {
		height: 40,
	},
	inputDesc: {
		minHeight: 40,
	},
});
