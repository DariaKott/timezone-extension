import { useContext } from "react";
import {
  ZonesContext,
  ADD_ZONE,
  REMOVE_ZONE,
  SET_DEFAULT_ZONE,
} from "../context/zones-context";

function useZones() {
  const context = useContext(ZonesContext);
  if (!context) {
    throw new Error("useZones must be used within a ZonesProvider");
  }
  const { state, dispatch } = context;
  const addZone = (zone: string) => dispatch({ type: ADD_ZONE, payload: zone });
  const removeZone = (index: number) =>
    dispatch({ type: REMOVE_ZONE, payload: index });
  const setDefaultZone = (zone: string) =>
    dispatch({ type: SET_DEFAULT_ZONE, payload: zone });

  return { state, addZone, removeZone, setDefaultZone };
}

export { useZones };
