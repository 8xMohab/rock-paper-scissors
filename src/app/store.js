import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "../features/score/scoreSlice";
import stageSlice from "../features/stageSlice";
import itemSlice from "../features/item/itemSlice";
export const store = configureStore({
  reducer: {
    score: scoreSlice,
    stage: stageSlice,
    item: itemSlice,
  },
});
