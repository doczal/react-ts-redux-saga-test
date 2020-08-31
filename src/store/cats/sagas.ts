import { call, put, takeLatest, select, all, delay } from "redux-saga/effects";
import { GET_IMAGES, CatImage } from "./types";
import { getImagesFailure, getImagesSuccess } from "./actions";
import { apiGetImages } from "api";

export function* getImages() {
  try {
    const data = yield call(apiGetImages);
    yield put(getImagesSuccess(data));
  } catch (e) {
    yield put(getImagesFailure());
  }
}

export default function* questionsSaga() {
  yield all([takeLatest(GET_IMAGES, getImages)]);
}
