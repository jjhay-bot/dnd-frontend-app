import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    pageList: [],
    pageValue: 'home',
    pageShow: false,
  },
  reducers: {
    setPageValue(state, action) {
      state.pageValue = action.payload;
    },
  },
});

export default pageSlice.reducer;
export const { setPageValue } = pageSlice.actions;
export const pageState = (state) => state.page;
