import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ProductTypeSerialized } from "./ProductType";

interface productsDataType {
  data: ProductTypeSerialized[];
  isFetched: boolean;
  isLoading: boolean;
  selectedProduct: ProductTypeSerialized | null;
  isCreating: boolean;
  isEditing: boolean;
}

// Define the initial state using that type
const initialState: productsDataType = {
  data: [],
  isFetched: false,
  isLoading: false,
  selectedProduct: null,
  isCreating: false,
  isEditing: false,
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    removeSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    refetch: (state, action: PayloadAction<ProductTypeSerialized[]>) => {
      state.data = action.payload;
      state.isFetched = true;
    },
    addNew: (state, action: PayloadAction<ProductTypeSerialized>) => {
      state.data.push(action.payload);
    },
    editProduct: (state, action: PayloadAction<ProductTypeSerialized>) => {
      state.selectedProduct = action.payload;
      state.isEditing = true;
    },
    createProduct(state) {
      state.isCreating = true;
    },
  },
});

export const productAction = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
