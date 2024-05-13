export interface Search {
  searchInput: string;
}

export interface SearchAction {
  type: string;
  payload: string;
}

export type SearchContextType = {
  state: Search;
  dispatch: (action: SearchAction) => void;
};
