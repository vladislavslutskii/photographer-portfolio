import { all } from "redux-saga/effects";

import photosSaga from "./photosSaga";
import authSaga from "./authSaga";

export default function* rootSaga() {
  yield all([photosSaga(), authSaga()]);
}
