import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		width: '100%',
		height: undefined,
		aspectRatio: 235 / 140,
	},
	mask: {
		backgroundColor: '#000000CC',
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	content: {
		zIndex: 1,
		flex: 1,
		padding: 16,
	},
	topView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	baseBtn: {
		width: 32,
		height: 32,
		borderRadius: 32 / 2,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnBack: {
		opacity: 0.5,
	},
	btnUpload: {
		backgroundColor: '#E7EEFF',
		borderRadius: 24,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 4,
	},
	textUpload: {
		fontSize: 14,
		fontWeight: 'bold',
		lineHeight: 16,
		color: '#528AFF',
		marginLeft: 8,
	},
	textDesc: {
		fontWeight: 'bold',
		fontSize: 18,
		lineHeight: 20,
		color: '#FFFFFF',
		marginTop: 16,
	},
	txtQuantity: {
		fontWeight: '400',
		fontSize: 14,
		lineHeight: 16,
		color: '#B5B5B5',
		marginTop: 8,
	},
	contentInfo: {
		backgroundColor: '#ffffff',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#F0F0F0',
		shadowColor: '#00000080',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8,
		alignSelf: 'center',
		padding: 16,
		bottom: -85,
	},
	viewInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	viewBaseInfo: {
		flexDirection: 'row',
	},
	viewIcon: {
		width: 40,
		height: 40,
		borderRadius: 40 / 2,
		backgroundColor: '#F5F5F5',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 4,
	},
	textInfo: {
		color: '#303030',
		fontWeight: '600',
		fontSize: 16,
		lineHeight: 24,
	},
	textTitleInfo: {
		color: '#B5B5B5',
		fontWeight: '500',
		fontSize: 12,
		lineHeight: 14,
	},
	viewSpace: {
		width: 15,
	},
	btnConfirmDone: {
		backgroundColor: '#EDE7FE',
		borderWidth: 1,
		borderColor: '#D3C6F8',
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 8,
		marginTop: 16,
	},
	txtConfirmDone: {
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 16,
		color: '#4920BC',
	},
});
