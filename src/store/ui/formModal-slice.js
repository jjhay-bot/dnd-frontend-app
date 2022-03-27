import { createSlice } from "@reduxjs/toolkit"

const formModalSlice = createSlice({
  name: "formModal",
  initialState: {
    formModalList: [],
    formModalValue: "",
    formModalShow: false, 
  },
  reducers: {
    setFormModalShow(state, action) {
      state.formModalShow = action.payload
    },    
  },
});

export default formModalSlice.reducer;
export const { setFormModalShow } = formModalSlice.actions; 
export const formModalState = (state) => state.formModal;