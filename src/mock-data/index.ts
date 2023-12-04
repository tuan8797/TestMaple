export interface IBook {
	id: number;
	chapterNum: number;
	desc: string;
	totalComment: number;
	unreadComment: number;
}

export const DataBooks: IBook[] = [
	{
		id: 21,
		chapterNum: 21,
		desc: 'Tên của chương truyện có thể hiển thị mà không giới hạn ký tự',
		totalComment: 120,
		unreadComment: 100,
	},
	{
		id: 20,
		chapterNum: 20,
		desc: 'Tên của chương truyện có thể hiển thị mà không giới hạn ký tự',
		totalComment: 123,
		unreadComment: 0,
	},
	{
		id: 19,
		chapterNum: 19,
		desc: 'Tên của chương truyện có thể hiển thị mà không giới hạn ký tự',
		totalComment: 123,
		unreadComment: 0,
	},
	{
		id: 18,
		chapterNum: 18,
		desc: 'Tên của chương truyện có thể hiển thị mà không giới hạn ký tự',
		totalComment: 123,
		unreadComment: 0,
	},
];
