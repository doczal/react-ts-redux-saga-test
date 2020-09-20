import {
  VoteActionTypes,
  VoteData,
  VoteVal,
  PostVoteReq,
  GET_VOTES,
  GET_VOTES_SUCCESS,
  GET_VOTES_FAILURE,
  POST_VOTE,
  POST_VOTE_SUCCESS,
  POST_VOTE_FAILURE,
} from "./types";

export function getVotes(): VoteActionTypes {
  return {
    type: GET_VOTES,
  };
}

export function getVotesSuccess(data: VoteData[]): VoteActionTypes {
  return {
    type: GET_VOTES_SUCCESS,
    payload: data,
  };
}

export function getVotesFailure(): VoteActionTypes {
  return {
    type: GET_VOTES_FAILURE,
  };
}

export function postVote(imageId: string, voteVal: VoteVal): VoteActionTypes {
  return {
    type: POST_VOTE,
    payload: {
      imageId,
      voteVal,
    },
  };
}

export function postVoteSuccess(
  imageId: string,
  voteVal: VoteVal,
  voteId: number
): VoteActionTypes {
  return {
    type: POST_VOTE_SUCCESS,
    payload: {
      imageId,
      voteVal,
      voteId,
    },
  };
}

export function postVoteFailure(): VoteActionTypes {
  return {
    type: POST_VOTE_FAILURE,
  };
}
