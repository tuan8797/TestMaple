import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 10,
	},
	content: {
		paddingHorizontal: 16,
	},
	btnEditDesc: {
		marginTop: 100,
		backgroundColor: '#F0F0F0',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
		paddingVertical: 12,
		flexDirection: 'row',
	},
	txtEditDesc: {
		fontSize: 14,
		fontWeight: 'bold',
		lineHeight: 16,
		color: '#528AFF',
		marginLeft: 8,
	},
	btnCreateChapter: {
		borderTopWidth: 1,
		borderColor: '#F0F0F0',
		paddingTop: 16,
	},
	lineaerGradient: {
		marginHorizontal: 16,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		paddingVertical: 12,
	},
	textBtnNewChapter: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 14,
		lineHeight: 16,
		marginLeft: 8,
	},
	viewHeader: {
		marginBottom: 8,
	},
});
