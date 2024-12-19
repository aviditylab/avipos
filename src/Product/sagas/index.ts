import { call, put, takeLatest } from "redux-saga/effects";
import { ProductType } from "../ProductType";
import getProducts from "../ProductRepositories/getProducts";
import { productAction } from "../productSlice";

function* fetchProducts() {
  try {
    const products: ProductType[] = yield call(getProducts);
    yield put({ type: productAction.refetch.type, payload: products });
  } catch (e: unknown) {
    if (e instanceof Error) {
      yield put({ type: "PRODUCT_FETCH_FAILED", message: e.message });
    }
  }
}

export default function* productSaga() {
  yield takeLatest("PRODUCT_FETCH_REQUESTED", fetchProducts);
}
