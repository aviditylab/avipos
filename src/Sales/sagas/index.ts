import { call, put, takeLatest } from "redux-saga/effects";
import { store } from "../../store";
import saveSales from "../SalesRepositories/saveSales";
import { salesActions } from "../SalesSlice";
import { toaster } from "rsuite";
import NotificationMessage from "../../Utils/NotificationMessage";

function* checkoutSales() {
  try {
    const { sales } = store.getState();
    yield call(saveSales, sales.sales);
    yield put({ type: "CHECKOUT_SALES_SUCCESS" });
    yield put(salesActions.resetSales());
    yield call(() => {
      toaster.push(
        NotificationMessage({ text: `Checkout successfully`, type: "success" }),
        { placement: "topCenter", duration: 3000 }
      );
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      yield put({ type: "CHECKOUT_SALES_FAILED", payload: e.message });
    }
  }
}

export default function* salesSaga() {
  yield takeLatest("CHECKOUT_SALES", checkoutSales);
}
