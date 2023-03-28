import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { News } from '../interface';

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	endpoints: (builder) => ({
		getCountryNews: builder.query<News, string>({
			query: (country) =>
				`https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=${
					import.meta.env.VITE_NEWS_API_KEY
				}`,
		}),
	}),
});

export const { useGetCountryNewsQuery } = newsApi;
