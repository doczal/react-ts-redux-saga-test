import {
  CatActionTypes,
  CatImage,
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
} from "./types";

export function getImages(): CatActionTypes {
  return {
    type: GET_IMAGES,
  };
}

export function getImagesSuccess(data: CatImage[]): CatActionTypes {
  return {
    type: GET_IMAGES_SUCCESS,
    payload: data,
  };
}

export function getImagesFailure(): CatActionTypes {
  return {
    type: GET_IMAGES_FAILURE,
  };
}
