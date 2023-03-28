import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface newsLayoutState {
	layout: 'list' | 'tiles';
}

const initialState: newsLayoutState = {
	layout: 'list',
};

const newsLayoutSlice = createSlice({
	name: 'layout',
	initialState,
	reducers: {
		setLayout: (state, action: PayloadAction<newsLayoutState['layout']>) => {
			state.layout = action.payload;
		},
	},
});

export const { setLayout } = newsLayoutSlice.actions;

export default newsLayoutSlice.reducer;
