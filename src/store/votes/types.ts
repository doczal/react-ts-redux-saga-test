export interface VoteState {
  votes: VoteData[];
  isLoading: boolean;
  hasError: boolean;
}

export interface VoteData {
  id: string;
  image_id: string;
  sub_id: string;
  value: number;
}

export type VoteVal = 0 | 1;

export interface PostVoteReq {
  image_id: string;
  value: VoteVal;
}

export interface PostVoteRes {
  message: string;
  status?: number;
  id: number;
}

export const GET_VOTES = "votes/GET_VOTES";
export const GET_VOTES_SUCCESS = "votes/GET_VOTES_SUCCESS";
export const GET_VOTES_FAILURE = "votes/GET_VOTES_FAILURE";
export const POST_VOTE = "votes/POST_VOTE";
export const POST_VOTE_SUCCESS = "votes/POST_VOTE_SUCCESS";
export const POST_VOTE_FAILURE = "votes/POST_VOTE_FAILURE";

interface GetVotesAction {
  type: typeof GET_VOTES;
}

interface GetVotesSuccessAction {
  type: typeof GET_VOTES_SUCCESS;
  payload: VoteData[];
}

interface GetVotesFailureAction {
  type: typeof GET_VOTES_FAILURE;
}

export interface PostVoteAction {
  type: typeof POST_VOTE;
  payload: {
    imageId: string;
    voteVal: VoteVal;
  };
}

export interface PostVoteSuccessAction {
  type: typeof POST_VOTE_SUCCESS;
  payload: {
    imageId: string;
    voteVal: VoteVal;
    voteId: number;
  };
}

interface PostVoteFailureAction {
  type: typeof POST_VOTE_FAILURE;
}

export type VoteActionTypes =
  | GetVotesAction
  | GetVotesSuccessAction
  | GetVotesFailureAction
  | PostVoteAction
  | PostVoteSuccessAction
  | PostVoteFailureAction;
