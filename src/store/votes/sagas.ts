import { call, put, takeLatest, select, all, delay } from "redux-saga/effects";
import {
  GET_VOTES,
  POST_VOTE,
  VoteData,
  PostVoteRes,
  PostVoteAction,
} from "./types";
import {
  getVotesFailure,
  getVotesSuccess,
  postVoteSuccess,
  postVoteFailure,
} from "./actions";
import { FetchApiRes, apiGetVotes, apiPostVote } from "api";

function* getVotesSaga() {
  const { data, error }: FetchApiRes<VoteData[]> = yield call(apiGetVotes);
  console.log(data);
  if (error) {
    yield put(getVotesFailure());
  } else {
    yield put(getVotesSuccess(data));
  }
}

function* postVoteSaga({ payload }: PostVoteAction) {
  const voteReq = {
    value: payload.voteVal,
    image_id: payload.imageId,
  };
  yield delay(1000);
  const { data, error }: FetchApiRes<PostVoteRes> = yield call(
    apiPostVote,
    voteReq
  );
  if (error) {
    yield put(postVoteFailure());
  } else {
    yield put(postVoteSuccess(payload.imageId, payload.voteVal, data.id));
  }
}

export default function* voteSaga() {
  yield all([
    takeLatest(GET_VOTES, getVotesSaga),
    takeLatest(POST_VOTE, postVoteSaga),
  ]);
}
