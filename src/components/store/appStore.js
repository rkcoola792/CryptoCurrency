import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "../slices/coinData";
import newsSlice from "../slices/newsData";
const store = configureStore({
  reducer: {
    coinData: coinSlice,
    newsSlice: newsSlice,
  },
});

export default store;
