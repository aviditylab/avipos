import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./Product/productSlice";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import { salesSlice } from "./Sales/SalesSlice";
import { gettingStartedSlice } from "./GettingStarted/GettingStartedSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    sales: salesSlice.reducer,
    gettingStarted: gettingStartedSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(sagas);

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
