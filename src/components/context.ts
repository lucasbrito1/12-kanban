import { createContext } from "react";

interface BoardContextProps {
  move: (draggedIndex: number, targetIndex: number) => void;
  // Other properties...
}

export default createContext<BoardContextProps>({
  move: () => {
    ("");
  },
});
