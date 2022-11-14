import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "../fetaure/number/numberSlice";

const store = configureStore({
  reducer: {
    number: numberReducer,
  },
});

export default store;
