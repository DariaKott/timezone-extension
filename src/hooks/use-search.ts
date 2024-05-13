import { useContext } from "react";
import { SearchContext, SET_INPUT } from "../context/search-context";

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  const { state, dispatch } = context;
  const setSearchInput = (searchInput: string) =>
    dispatch({ type: SET_INPUT, payload: searchInput });

  return { state, setSearchInput };
}

export { useSearch };
