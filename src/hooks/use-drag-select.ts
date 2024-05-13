import { useContext } from "react";
import { DragSelectContext } from "../context/drag-select-context";

function useDragSelect() {
  return useContext(DragSelectContext);
}

export { useDragSelect };
