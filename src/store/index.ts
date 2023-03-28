import { configureStore } from '@reduxjs/toolkit';
import newsLayoutSlice from './newsLayout-slice';
import { newsApi } from './api-slice';

const store = configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
		newsLayout: newsLayoutSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
