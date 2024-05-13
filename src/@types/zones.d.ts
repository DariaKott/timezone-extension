export interface Zones {
  zones: string[];
  defaultZone: string;
  defaultOffset: number;
}

export interface ZonesAction {
  type: string;
  payload: string | number;
}

export type ZonesContextType = {
  state: Zones;
  dispatch: (action: ZonesAction) => void;
};
