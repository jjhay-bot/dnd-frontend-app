import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    productValue: '',
    productShow: false,
  },
  reducers: {
    getProductList(state, action) {
      state.productList = action.payload;
    },
    getProductValue(state, action) {
      state.productValue = action.payload;
    },
    setProductShow(state) {
      state.productShow = !state.productShow;
    },
  },
});

export default productSlice.reducer;
export const { getProductList, getProductValue, setProductShow } =
  productSlice.actions;
export const productState = (state) => state.product;
