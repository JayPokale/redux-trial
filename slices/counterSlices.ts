import {
  bindActionCreators,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import type { AppDispatch } from "../pages/_app";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    byNumber: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, byNumber } = counterSlice.actions;
export default counterSlice.reducer;