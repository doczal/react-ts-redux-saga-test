import { call, put, takeLatest, select, all, delay } from "redux-saga/effects";
import { GET_IMAGES, CatImage } from "./types";
import { getImagesFailure, getImagesSuccess } from "./actions";

export function* getImages() {
  const data: CatImage[] = [
    {
      breeds: [],
      id: "123",
      url: "lol",
      width: 100,
      height: 100,
    },
  ];
  yield delay(2000);
  yield put(getImagesSuccess(data));
}

export default function* questionsSaga() {
  yield all([takeLatest(GET_IMAGES, getImages)]);
}
