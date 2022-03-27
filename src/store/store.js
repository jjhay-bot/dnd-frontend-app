import { configureStore } from '@reduxjs/toolkit';
import formModalSlice from './ui/formModal-slice';
import pageSlice from './ui/page-slice';
import productSlice from './products/products-slice';

const store = configureStore({
  reducer: {
    formModal: formModalSlice,
    page: pageSlice,
    product: productSlice,
  },
});

export default store;
