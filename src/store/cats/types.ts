export interface CatState {
  categories: string[];
  isLoading: boolean;
}

export const GET_CATEGORIES = "cats/GET_CATEGORIES";

interface GetCategoriesAction {
  type: typeof GET_CATEGORIES;
}

export type CatActionTypes = GetCategoriesAction;
