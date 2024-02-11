import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { createNewUser, getUser } from "../reducers/authReducer";
import { UserActionPayload } from "../../Utils/globalTypes";
import Api from "../api";

function* createNewUserWorker(action: PayloadAction<UserActionPayload>) {
  const { status, problem } = yield call(Api.createNewUser, action.payload);
  if (status === 200) {
    console.log("REGISTERED");
  } else {
    console.log("PROBLEM", problem);
  }
}

// function* getCurrentUser() {
//   const { status, problem, data } = yield call(Api.getCurrentUser);
//   if (status === 200 && data) {
//     // yield put(setUser(data));
//     console.log(data);
//   } else {
//     console.log("Error getting user", problem);
//   }
// }

export default function* authWatcher() {
  yield all([
    takeLatest(createNewUser, createNewUserWorker),
    // takeLatest(getUser, getCurrentUser),
  ]);
}
