import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SalesItemType, SalesType } from "./SalesType";
import { RootState } from "../store";
import { ProductTypeSerialized } from "../Product/ProductType";

interface SalesStateType {
  sales: SalesType;
  selectedProduct: ProductTypeSerialized | null;
}

const initialState: SalesStateType = {
  sales: {
    items: [],
    total: 0,
    createdAt: 0,
    updatedAt: 0,
  },
  selectedProduct: null,
};

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<SalesItemType>) => {
      state.sales.items.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.sales.items = state.sales.items.filter(
        (_, i) => i !== action.payload
      );
    },
    resetSales: (state) => {
      state.sales.items = [];
      state.sales.total = 0;
    },
    selectProduct: (state, action: PayloadAction<ProductTypeSerialized>) => {
      state.selectedProduct = action.payload;
    },
    unselectProduct: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const salesActions = salesSlice.actions;

export const selectSales = (state: RootState) => state.sales;

export default salesSlice.reducer;
