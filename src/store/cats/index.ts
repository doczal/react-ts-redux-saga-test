import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  POST_IMAGE,
  POST_IMAGE_SUCCESS,
  POST_IMAGE_FAILURE,
  CatActionTypes,
  CatState,
} from "./types";

const initialState: CatState = {
  images: [],
  isLoading: false,
  hasError: false,
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
        hasError: false,
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
        hasError: true,
      };
    case POST_IMAGE:
      return {
        ...state,
        isLoading: true,
      };
    case POST_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case POST_IMAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
