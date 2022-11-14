import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 50,
};

const numberSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    incrementByFive: (state) => {
      state.count += 5;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export default numberSlice.reducer;
export const { increment, decrement, incrementByFive } = numberSlice.actions;
