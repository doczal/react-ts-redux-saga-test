export interface CatImage {
  breeds: string[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatState {
  images: CatImage[];
  isLoading: boolean;
}

export const GET_IMAGES = "cats/GET_IMAGES";
export const GET_IMAGES_SUCCESS = "cats/GET_IMAGES_SUCCESS";
export const GET_IMAGES_FAILURE = "cats/GET_IMAGES_FAILURE";

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

export type CatActionTypes =
  | GetImagesAction
  | GetImagesSuccessAction
  | GetImagesFailureAction;
