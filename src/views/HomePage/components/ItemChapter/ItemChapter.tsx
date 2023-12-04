import { IcCmtSvg, IcPenSvg } from '@app-uikits/svgs';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { IBook } from '../../../../mock-data';
import styles from './styles';

interface ItemChapterProps {
	item: IBook;
	index: number;
	onPressEdit?: (item: IBook) => void;
}

const ItemChapter: React.FC<ItemChapterProps> = ({ index, item, onPressEdit: _onPressEdit }) => {
	const isUnread = React.useMemo(() => {
		return !!item.unreadComment;
	}, [item]);

	const onPressEdit = React.useCallback(() => {
		typeof _onPressEdit === 'function' && _onPressEdit(item);
	}, [item, _onPressEdit]);

	return (
		<View style={[styles.container, index > 0 ? styles.lineBottom : {}]}>
			<View style={styles.containerDesc}>
				<Text style={styles.textChapterNum}>{`Ch.${item.chapterNum}`}</Text>
				<Text style={styles.textDesc}>{item.desc}</Text>
			</View>
			<View style={[styles.containerDesc, { marginTop: 16 }]}>
				<View style={styles.space} />
				<View style={[styles.viewOptions, { flex: 1 }]}>
					<Pressable style={styles.viewOptions}>
						<View>
							<SvgXml xml={IcCmtSvg()} />
							{isUnread && <View style={styles.unreadDot} />}
						</View>
						<Text style={[styles.textTotalCmt, isUnread && styles.textTotalCmtUnread]}>
							{item.totalComment} Bình luận
						</Text>
						{isUnread && (
							<View style={styles.viewUnread}>
								<Text style={styles.txtUnread}>
									{item.unreadComment > 99 ? '99+' : item.unreadComment}
								</Text>
							</View>
						)}
					</Pressable>
					<Pressable style={styles.viewOptions} onPress={onPressEdit}>
						<SvgXml xml={IcPenSvg()} />
						<Text style={styles.txtEdit}>Chỉnh sửa</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default React.memo(ItemChapter);
