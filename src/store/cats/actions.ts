import { GET_CATEGORIES, CatActionTypes } from "./types";

export function getCategories(): CatActionTypes {
  return {
    type: GET_CATEGORIES,
  };
}
