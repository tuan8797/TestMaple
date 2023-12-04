import React, { useCallback, useMemo, useState } from 'react';
import { Keyboard, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { IBook } from '../../mock-data';
import styles from './styles';
import { SvgXml } from 'react-native-svg';
import { IcBackSvg } from '@app-uikits/svgs';
import { Navigation } from 'react-native-navigation';

interface NewBookPageProps {
	componentId: string;
	item?: IBook;
}

const NewBookPage: React.FC<NewBookPageProps> = ({ componentId }) => {
	const [header, setHeader] = useState('');
	const [desc, setDesc] = useState('');

	const onPressBack = useCallback(() => {
		Navigation.pop(componentId);
	}, [componentId]);

	const onChangeHeader = (text: string) => {
		setHeader(text);
	};

	const onChangeDesc = (text: string) => {
		setDesc(text);
	};

	const isDisable = useMemo(() => {
		return !header || !desc;
	}, [header, desc]);

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.header} onTouchEnd={Keyboard.dismiss}>
					<View style={styles.headerLeft}>
						<Pressable style={styles.btnBack} onPress={onPressBack}>
							<SvgXml xml={IcBackSvg()} />
						</Pressable>
						<Text style={styles.textDesc}>Viết mô tả truyện</Text>
					</View>
					<Pressable style={[styles.btnExport, { opacity: isDisable ? 0.5 : 1 }]} disabled={isDisable}>
						<Text>Xuất bản</Text>
					</Pressable>
				</View>
				<ScrollView>
					<TextInput
						placeholder="Tên truyện"
						value={header}
						onChangeText={onChangeHeader}
						style={styles.inputHeader}
					/>
					<TextInput
						value={desc}
						placeholder="Giới thiệu về tác phẩm mới của bạn"
						placeholderTextColor={'#E0E0E0'}
						multiline
						onChangeText={onChangeDesc}
						style={styles.inputDesc}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default NewBookPage;
