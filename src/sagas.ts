import { all } from "redux-saga/effects";
import productSaga from "./Product/sagas";
import salesSaga from "./Sales/sagas";
import gettingStartedSaga from "./GettingStarted/sagas";

export default function* rootSaga() {
  yield all([productSaga(), salesSaga(), gettingStartedSaga()]);
  // code after all-effect
}
