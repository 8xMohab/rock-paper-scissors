import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "pick" | "compare",
};
const stageSlice = createSlice({
  name: "stage",
  initialState,
  reducers: {
    setStage: (state, { payload }) => {
      state.value = payload;
    },
  },
});
export const selectStage = (state) => state.stage.value;
export const { setStage } = stageSlice.actions;
export default stageSlice.reducer;
