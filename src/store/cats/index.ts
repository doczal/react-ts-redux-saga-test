import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  CatActionTypes,
  CatState,
} from "./types";

const initialState: CatState = {
  images: [],
  isLoading: false,
};

export default function reducer(
  state = initialState,
  action: CatActionTypes
): CatState {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        images: action.payload,
      };
    case GET_IMAGES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
