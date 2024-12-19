import { put, takeLatest } from "redux-saga/effects";
import { gettingStartedSlice } from "../GettingStartedSlice";

function* gettingStartedCheck() {
  try {
    let isGettingStarted = false;
    if (window.localStorage.getItem("isGettingStarted"))
      isGettingStarted = true;

    yield put({
      type: gettingStartedSlice.actions.gettingStartedChecked.type,
      payload: isGettingStarted,
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      yield put({ type: "GETTING_STARTED_FAILED", payload: e.message });
    }
  }
}
function* gettingStarted() {
  try {
    window.localStorage.setItem("isGettingStarted", "true");

    yield put({
      type: gettingStartedSlice.actions.gettingStartedChecked.type,
      payload: true,
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      yield put({ type: "GETTING_STARTED_FAILED", payload: e.message });
    }
  }
}

export default function* gettingStartedSaga() {
  yield takeLatest("GETTING_STARTED_CHECK_REQUEST", gettingStartedCheck);
  yield takeLatest("GETTING_STARTED", gettingStarted);
}
