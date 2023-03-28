export interface News {
	articles: Article[];
	status: string;
	totalResults: number;
}

export interface Article {
	source: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description: string | null;
	url: string;
	urlToImage: string | null;
	publishedAt: Date;
	content: string | null;
}
