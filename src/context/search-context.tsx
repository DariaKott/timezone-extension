import { createContext } from "react";
import { Search, SearchAction, SearchContextType } from "../@types/search";
import { useReducer } from "react";

export const SET_INPUT = "SET_INPUT";

export const SearchContext = createContext<SearchContextType | null>(null);

const initialState: Search = {
  searchInput: "",
};

function reducer(state: Search, action: SearchAction): Search {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function SearchProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   if (!state.defaultZone) {
  //     dispatch({ type: "set_default_offset", payload: getCurrentTimezone() });
  //   }
  //   if (!state.zones.length) {
  //     dispatch({ type: "add_zone", payload: getCurrentTimezone() });
  //   }
  // }, [state.defaultZone, state.zones.length]);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
