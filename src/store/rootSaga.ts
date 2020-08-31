import { all } from "redux-saga/effects";
import catSaga from "./cats/sagas";

export default function* rootSaga() {
  yield all([catSaga()]);
}
