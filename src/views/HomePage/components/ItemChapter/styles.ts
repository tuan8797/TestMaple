import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 16,
		marginHorizontal: 16,
	},
	lineBottom: {
		borderTopWidth: 1,
		borderColor: '#EAEAEA',
	},
	containerDesc: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textChapterNum: {
		fontWeight: '400',
		fontSize: 14,
		lineHeight: 16,
		color: '#B5B5B5',
		width: 56,
	},
	textDesc: {
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 16,
		color: '#303030',
		flex: 1,
	},
	space: {
		width: 56,
	},
	viewOptions: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textTotalCmt: {
		fontWeight: '400',
		fontSize: 14,
		lineHeight: 16,
		color: '#B5B5B5',
		marginLeft: 8,
	},
	txtEdit: {
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 16,
		color: '#528AFF',
		marginLeft: 8,
	},
	textTotalCmtUnread: {
		color: '#303030',
		fontWeight: '500',
	},
	unreadDot: {
		width: 6,
		height: 6,
		borderRadius: 6,
		backgroundColor: '#DA4936',
		position: 'absolute',
		right: 2,
		top: -1,
	},
	viewUnread: {
		backgroundColor: '#DA4936',
		borderRadius: 24,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 3,
		paddingTop: 5,
		marginLeft: 12,
	},
	txtUnread: {
		fontWeight: '500',
		fontSize: 12,
		lineHeight: 12,
		color: '#FFFFFF',
	},
});
