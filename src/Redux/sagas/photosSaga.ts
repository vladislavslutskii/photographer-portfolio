import Api from "../api";
import {
  addNewAlbum,
  deleteAlbum,
  getAlbumsList,
  getAlbumsPhotos,
  setAlbumsList,
  setAlbumsPhotos,
} from "../reducers/photosReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, call, put } from "redux-saga/effects";

export type DeletePostPayload = {
  id: string | number;
};

function* getAlbumsListWorker(action: PayloadAction<any>) {
  const { data, status, problem } = yield call(Api.getAlbumsList);
  if (status === 200 && data) {
    yield put(setAlbumsList(data));
  } else {
    console.log(problem);
  }
}

function* getAlbumPhotosWorker(action: PayloadAction<string>) {
  const { data, status, problem } = yield call(
    Api.getAlbumPhotos,
    action.payload
  );
  if (status === 200 && data) {
    yield put(setAlbumsPhotos(data));
  } else {
    console.log(problem);
  }
}
function* deleteAlbumWorker(action: PayloadAction<DeletePostPayload>) {
  const { id } = action.payload;
  const { status, problem } = yield call(Api.deleteAlbum, id);

  if (status === 204) {
    console.log(`good`);
  } else {
    console.log("problem", problem);
  }
}
function* addNewAlbumWorker(action: PayloadAction<any>) {
  const { formData, callback } = action.payload;
  const { status, problem } = yield call(Api.addNewAlbum, formData);

  if (status === 201) {
    callback();
  } else {
    console.log("problem", problem);
  }
}

export default function* postsSagaWatcher() {
  yield all([
    takeLatest(getAlbumsList, getAlbumsListWorker),
    takeLatest(getAlbumsPhotos, getAlbumPhotosWorker),
    takeLatest(deleteAlbum, deleteAlbumWorker),
    takeLatest(addNewAlbum, addNewAlbumWorker),
  ]);
}
