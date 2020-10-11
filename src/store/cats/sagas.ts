import {
  call,
  put,
  takeLatest,
  select,
  all,
  delay,
  take,
} from "redux-saga/effects";
import {
  GET_IMAGES,
  POST_IMAGE,
  DELETE_IMAGE,
  CatImage,
  PostImageAction,
  DeleteImageAction,
} from "./types";
import { POST_VOTE } from "voteTypes";
import {
  getImagesFailure,
  getImagesSuccess,
  postImageSuccess,
  postImageFailure,
  deleteImageSuccess,
  deleteImageFailure,
} from "./actions";
import { FetchApiRes, apiGetImages, apiPostImage, apiDeleteImage } from "api";

export function* getImagesSaga() {
  console.log("get images saga");
  const { data, error }: FetchApiRes<CatImage[]> = yield call(apiGetImages);

  if (error) {
    yield put(getImagesFailure());
  } else {
    yield put(getImagesSuccess(data));
    const action = yield take([POST_IMAGE, POST_VOTE]);
    console.log("action taken", action);
  }
}

export function* postImageSaga({ payload }: PostImageAction) {
  const { error }: FetchApiRes<unknown> = yield call(apiPostImage, payload);
  if (error) {
    yield put(postImageFailure());
  } else {
    yield put(postImageSuccess());
  }
}

export function* deleteImageSaga({ payload }: DeleteImageAction) {
  const { error, data }: FetchApiRes<unknown> = yield call(
    apiDeleteImage,
    payload
  );
  if (error) {
    yield put(deleteImageFailure());
  } else {
    yield put(deleteImageSuccess(payload));
  }
}

export default function* catSaga() {
  yield all([
    takeLatest(GET_IMAGES, getImagesSaga),
    takeLatest(POST_IMAGE, postImageSaga),
    takeLatest(DELETE_IMAGE, deleteImageSaga),
  ]);
}
