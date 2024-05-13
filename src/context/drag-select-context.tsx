import React, { createContext, useState, useEffect } from "react";
import DragSelect, { DSInputElement } from "dragselect";

export const DragSelectContext = createContext<
  DragSelect<DSInputElement> | undefined
>(undefined);

function DragSelectProvider({
  children,
  settings = {},
}: DragSelectProviderProps) {
  const [ds, setDS] = useState<DragSelect<DSInputElement>>();

  useEffect(() => {
    setDS((prevState) => {
      if (prevState) return prevState;
      return new DragSelect({});
    });
    return () => {
      if (ds) {
        ds.stop();
        setDS(undefined);
      }
    };
  }, [ds]);

  useEffect(() => {
    ds?.setSettings(settings);
  }, [ds, settings]);

  return (
    <DragSelectContext.Provider value={ds}>
      {children}
    </DragSelectContext.Provider>
  );
}

export default DragSelectProvider;
