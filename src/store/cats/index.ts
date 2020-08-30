import { GET_CATEGORIES, CatActionTypes, CatState } from "./types";

const initialState: CatState = {
  categories: [],
  isLoading: false,
};

export default function reducer(state = initialState, action: CatActionTypes) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
