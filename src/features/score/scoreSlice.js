import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setScore: (state, { payload }) => {
      state.value = payload
    },
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("score", JSON.stringify(state.value));
      console.log("stored");
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("score", JSON.stringify(state.value));
      console.log("stored");
    },
  },
});
export const selectScore = (state) => state.score.value;
export const { increment, decrement, setScore } = scoreSlice.actions;
export default scoreSlice.reducer;
