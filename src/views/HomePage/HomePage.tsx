import { IcPenSvg, IcPlusSvg } from '@app-uikits/svgs';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, Pressable, SafeAreaView, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { DataBooks, IBook } from '../../mock-data';
import Header from './components/Header/Header';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ItemChapter from './components/ItemChapter/ItemChapter';
import { Navigation } from 'react-native-navigation';

interface HomePageProps {
	componentId: string;
}

const HomePage: React.FC<HomePageProps> = ({ componentId }) => {
	const onPressEdit = useCallback(
		(item?: IBook) => {
			Navigation.push(componentId, {
				component: {
					name: 'NewBookPage',
					passProps: { item },
				},
			});
		},
		[componentId],
	);

	const keyExtractor = (item: IBook) => item.id.toString();

	const renderHeader = useCallback(() => {
		return (
			<View style={styles.viewHeader}>
				<Header />
				<View style={styles.content}>
					<Pressable style={styles.btnEditDesc} onPress={() => onPressEdit()}>
						<SvgXml xml={IcPenSvg()} />
						<Text style={styles.txtEditDesc}>Chỉnh sửa mô tả</Text>
					</Pressable>
				</View>
			</View>
		);
	}, [onPressEdit]);

	const renderItem: ListRenderItem<IBook> = ({ index, item }) => {
		return <ItemChapter index={index} item={item} onPressEdit={onPressEdit} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={DataBooks}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				ListHeaderComponent={renderHeader}
				showsVerticalScrollIndicator={false}
			/>
			<Pressable style={styles.btnCreateChapter} onPress={() => onPressEdit()}>
				<LinearGradient
					colors={['#DB70D7', '#5345EE']}
					start={{ x: 0, y: 0.5 }}
					end={{ x: 1, y: 0.5 }}
					style={styles.lineaerGradient}
				>
					<SvgXml xml={IcPlusSvg()} />
					<Text style={styles.textBtnNewChapter}>Viết chương mới</Text>
				</LinearGradient>
			</Pressable>
		</View>
	);
};

export default HomePage;
