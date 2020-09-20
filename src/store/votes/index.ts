import {
  GET_VOTES,
  GET_VOTES_SUCCESS,
  GET_VOTES_FAILURE,
  POST_VOTE,
  POST_VOTE_SUCCESS,
  POST_VOTE_FAILURE,
  VoteActionTypes,
  VoteState,
} from "./types";

const initialState: VoteState = {
  votes: [],
  isLoading: false,
  hasError: false,
};

export default function reducer(
  state = initialState,
  action: VoteActionTypes
): VoteState {
  switch (action.type) {
    case GET_VOTES:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_VOTES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        votes: action.payload,
      };
    case GET_VOTES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case POST_VOTE:
      return {
        ...state,
        isLoading: true,
      };
    case POST_VOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case POST_VOTE_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
