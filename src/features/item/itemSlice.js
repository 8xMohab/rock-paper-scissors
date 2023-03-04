import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {}
};
const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, { payload }) => {
      state.value = payload;
    },
  },
});
export const selectItem = (state) => state.item.value;
export const { setItem } = itemSlice.actions;
export default itemSlice.reducer;
