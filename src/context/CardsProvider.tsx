import React, { createContext, useState, useContext } from "react";
import { Columns } from "utils/cards";
import { produce } from "immer";

type CardsContextType = {
  listColumns: Columns[];
  setListColumns: React.Dispatch<React.SetStateAction<Columns[]>>;
  moveCard: (
    draggedListIndex: number,
    targetListIndex: number,
    draggedIndex: number,
    targetIndex: number
  ) => void;
};

interface Props {
  children: React.ReactNode;
}

const CardsContext = createContext<CardsContextType | undefined>(undefined);

export const CardsProvider = ({ children }: Props) => {
  const [listColumns, setListColumns] = useState<Columns[]>(Columns);

  function moveCard(
    draggedListIndex: number,
    targetListIndex: number,
    draggedIndex: number,
    targetIndex: number
  ) {
    setListColumns(
      produce(listColumns, (draft) => {
        const dragged = draft[draggedListIndex].cards[draggedIndex];

        // Remove o card da coluna original
        draft[draggedListIndex].cards.splice(draggedIndex, 1);

        // Insere o card na nova coluna na posição desejada
        draft[targetListIndex].cards.splice(targetIndex, 0, dragged);
      })
    );
  }

  return (
    <CardsContext.Provider
      value={{
        listColumns,
        setListColumns,
        moveCard,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export const useCardsContext = () => {
  const context = useContext(CardsContext);

  if (!context) {
    throw new Error("useCardsContext must be used within a CardsProvider");
  }

  return context;
};
