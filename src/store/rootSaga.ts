import { all } from "redux-saga/effects";
import catSaga from "./cats/sagas";
import voteSaga from "./votes/sagas";

export default function* rootSaga() {
  yield all([catSaga(), voteSaga()]);
}
