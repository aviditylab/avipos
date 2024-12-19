import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface stateType {
  isGettingStarted: boolean;
}

const initialState: stateType = {
  isGettingStarted: window.localStorage.getItem("isGettingStarted") === "true",
};

export const gettingStartedSlice = createSlice({
  name: "gettingStarted",
  initialState,
  reducers: {
    gettingStartedChecked: (state, action: PayloadAction<boolean>) => {
      state.isGettingStarted = action.payload;
    },
  },
});

export const salesActions = gettingStartedSlice.actions;

export const selectSales = (state: RootState) => state.sales;

export default gettingStartedSlice.reducer;
