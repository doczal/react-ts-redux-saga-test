import {
  CatActionTypes,
  CatImage,
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  POST_IMAGE,
  POST_IMAGE_SUCCESS,
  POST_IMAGE_FAILURE,
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

export function postImage(image: File): CatActionTypes {
  return {
    type: POST_IMAGE,
    payload: image,
  };
}

export function postImageSuccess(): CatActionTypes {
  return {
    type: POST_IMAGE_SUCCESS,
  };
}

export function postImageFailure(): CatActionTypes {
  return {
    type: POST_IMAGE_FAILURE,
  };
}
