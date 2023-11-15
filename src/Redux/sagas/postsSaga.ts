import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, call, put } from "redux-saga/effects";
import Api from "../api";
import {
  deletePost,
  getPosts,
  getSinglePost,
  setCardsList,
  setSinglePost,
} from "../reducers/postsreducer";

function* getPostsWorker(action: PayloadAction<undefined>) {
  const { data, status, problem } = yield call(Api.getPostsList);
  if (status === 200 && data) {
    yield put(setCardsList(data));
  } else {
    console.log(problem);
  }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  const { data, status, problem } = yield call(Api.getPost, action.payload);
  if (status === 200 && data) {
    yield put(setSinglePost(data));
  } else {
    console.log(problem);
  }
}
function* deletePostWorker(action: PayloadAction<any>) {
  const { id, callback } = action.payload;
  const { status, problem } = yield call(Api.deletePost, id);

  if (status === 204) {
    callback();
  } else {
    console.log("problem", problem);
  }
}

export default function* postsSagaWatcher() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(deletePost, deletePostWorker),
  ]);
}
