import { VoteVal } from "voteTypes";

export interface CatImage {
  breeds: string[];
  id: string;
  url: string;
  width: number;
  height: number;
  vote?: {
    id: number;
    value: VoteVal;
  };
}

export interface CatState {
  images: CatImage[];
  isLoading: boolean;
  hasError: boolean;
}

export const GET_IMAGES = "cats/GET_IMAGES";
export const GET_IMAGES_SUCCESS = "cats/GET_IMAGES_SUCCESS";
export const GET_IMAGES_FAILURE = "cats/GET_IMAGES_FAILURE";
export const POST_IMAGE = "cats/POST_IMAGE";
export const POST_IMAGE_SUCCESS = "cats/POST_IMAGE_SUCCESS";
export const POST_IMAGE_FAILURE = "cats/POST_IMAGE_FAILURE";
export const DELETE_IMAGE = "cats/DELETE_IMAGE";
export const DELETE_IMAGE_SUCCESS = "cats/DELETE_IMAGE_SUCCESS";
export const DELETE_IMAGE_FAILURE = "cats/DELETE_IMAGE_FAILURE";

interface GetImagesAction {
  type: typeof GET_IMAGES;
}

interface GetImagesSuccessAction {
  type: typeof GET_IMAGES_SUCCESS;
  payload: CatImage[];
}

interface GetImagesFailureAction {
  type: typeof GET_IMAGES_FAILURE;
}

export interface PostImageAction {
  type: typeof POST_IMAGE;
  payload: File;
}

interface PostImageSuccessAction {
  type: typeof POST_IMAGE_SUCCESS;
}

interface PostImageFailureAction {
  type: typeof POST_IMAGE_FAILURE;
}

export interface DeleteImageAction {
  type: typeof DELETE_IMAGE;
  payload: string;
}

interface DeleteImageSuccessAction {
  type: typeof DELETE_IMAGE_SUCCESS;
  payload: string;
}

interface DeleteImageFailureAction {
  type: typeof DELETE_IMAGE_FAILURE;
}

export type CatActionTypes =
  | GetImagesAction
  | GetImagesSuccessAction
  | GetImagesFailureAction
  | PostImageAction
  | PostImageSuccessAction
  | PostImageFailureAction
  | DeleteImageAction
  | DeleteImageSuccessAction
  | DeleteImageFailureAction;
