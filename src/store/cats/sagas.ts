import { call, put, takeLatest, select, all, delay } from "redux-saga/effects";
import { GET_IMAGES, CatImage } from "./types";
import { getImagesFailure, getImagesSuccess } from "./actions";
import { FetchApiRes, apiGetImages } from "api";

export function* getImagesSaga() {
  const { data, error }: FetchApiRes<CatImage[]> = yield call(apiGetImages);
  console.log(data);
  if (error) {
    yield put(getImagesFailure());
  } else {
    yield put(getImagesSuccess(data));
  }
}

export default function* catSaga() {
  yield all([takeLatest(GET_IMAGES, getImagesSaga)]);
}
