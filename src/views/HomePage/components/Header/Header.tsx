import React, { memo, useCallback } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { HomeBG } from '@app-uikits/images';
import { SvgXml } from 'react-native-svg';
import { IcBackSvg, IcGenre, IcGroupSvg, IcHashTagSvg, IcSettingSvg, IcUploadSvg } from '@app-uikits/svgs';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	const baseInfo = useCallback((info: { xml: string; info: string; title: string }) => {
		return (
			<View style={styles.viewBaseInfo}>
				<View style={styles.viewIcon}>
					<SvgXml xml={info.xml} />
				</View>
				<View>
					<Text style={styles.textInfo}>{info.info}</Text>
					<Text style={styles.textTitleInfo}>{info.title}</Text>
				</View>
			</View>
		);
	}, []);

	return (
		<ImageBackground source={HomeBG} resizeMode="stretch" style={styles.container}>
			<View style={styles.mask} />
			<View style={styles.content}>
				<View style={styles.topView}>
					<Pressable style={[styles.baseBtn, styles.btnBack]}>
						<SvgXml xml={IcBackSvg()} />
					</Pressable>
					<Pressable style={styles.btnUpload}>
						<SvgXml xml={IcUploadSvg()} />
						<Text style={styles.textUpload}>Thay ảnh bìa</Text>
					</Pressable>
					<Pressable style={styles.baseBtn}>
						<SvgXml xml={IcSettingSvg()} />
					</Pressable>
				</View>

				<Text style={styles.textDesc}>
					Tên của bộ truyện có thể dài hơn 2 dòng nhưng yêu cầu giới hạn ký tự (có thể quy định sau)
				</Text>

				<Text style={styles.txtQuantity}>Số lượng: 12 chương</Text>
			</View>

			<View style={styles.contentInfo}>
				<View style={styles.viewInfo}>
					{baseInfo({ xml: IcGenre(), info: '8', title: 'Thể loại' })}
					<View style={styles.viewSpace} />
					{baseInfo({ xml: IcHashTagSvg(), info: '12', title: 'Hashtag' })}
					<View style={styles.viewSpace} />
					{baseInfo({ xml: IcGroupSvg(), info: '1,234', title: 'Theo dõi' })}
				</View>
				<Pressable style={styles.btnConfirmDone}>
					<Text style={styles.txtConfirmDone}>Xác nhận truyện đã hoàn thành</Text>
				</Pressable>
			</View>
		</ImageBackground>
	);
};

export default memo(Header);
