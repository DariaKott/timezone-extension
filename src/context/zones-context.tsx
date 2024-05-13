import { createContext, useEffect } from "react";
import { ZonesContextType } from "../@types/zones";
import { useReducer } from "react";
import { Zones, ZonesAction } from "../@types/zones";
import getTimezoneOffset from "../utils/get-timezone-offset";
import getCurrentTimezone from "../utils/get-current-timezone";

export const ADD_ZONE = "ADD_ZONE";
export const REMOVE_ZONE = "REMOVE_ZONE";
export const SET_DEFAULT_ZONE = "SET_DEFAULT_ZONE";

export const ZonesContext = createContext<ZonesContextType | null>(null);

const initialState: Zones = {
  zones: [],
  defaultZone: "",
  defaultOffset: 0,
};

function reducer(state: Zones, action: ZonesAction): Zones {
  switch (action.type) {
    case ADD_ZONE:
      return {
        ...state,
        zones: [...state.zones, action.payload as string],
      };
    case REMOVE_ZONE:
      return {
        ...state,
        zones: state.zones.filter((_, i) => i !== (action.payload as number)),
      };
    case SET_DEFAULT_ZONE:
      return {
        ...state,
        defaultZone: action.payload as string,
        defaultOffset: getTimezoneOffset(action.payload as string),
      };
    default:
      throw new Error("Unknown action type");
  }
}

function ZonesProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.defaultZone) {
      dispatch({ type: SET_DEFAULT_ZONE, payload: getCurrentTimezone() });
    }
    if (!state.zones.length) {
      dispatch({ type: ADD_ZONE, payload: getCurrentTimezone() });
    }
  }, [state.defaultZone, state.zones.length]);

  return (
    <ZonesContext.Provider value={{ state, dispatch }}>
      {children}
    </ZonesContext.Provider>
  );
}

export default ZonesProvider;
