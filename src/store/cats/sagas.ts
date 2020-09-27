import { call, put, takeLatest, select, all, delay } from "redux-saga/effects";
import { GET_IMAGES, POST_IMAGE, CatImage, PostImageAction } from "./types";
import {
  getImagesFailure,
  getImagesSuccess,
  postImageSuccess,
  postImageFailure,
} from "./actions";
import { FetchApiRes, apiGetImages, apiPostImage } from "api";

export function* getImagesSaga() {
  const { data, error }: FetchApiRes<CatImage[]> = yield call(apiGetImages);
  console.log(data);
  if (error) {
    yield put(getImagesFailure());
  } else {
    yield put(getImagesSuccess(data));
  }
}

export function* postImageSaga({ payload }: PostImageAction) {
  const { data, error }: FetchApiRes<unknown> = yield call(
    apiPostImage,
    payload
  );
  if (error) {
    yield put(postImageFailure());
  } else {
    yield put(postImageSuccess());
  }
}

export default function* catSaga() {
  yield all([
    takeLatest(GET_IMAGES, getImagesSaga),
    takeLatest(POST_IMAGE, postImageSaga),
  ]);
}
