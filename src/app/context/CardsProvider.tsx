import React, { createContext, useState, useContext } from "react";
import { Columns } from "utils/cards";
import { produce } from "immer";

type CardsContextType = {
  listColumns: Columns[];
  setListColumns: React.Dispatch<React.SetStateAction<Columns[]>>;
  move: (fromList: number, toList: number, from: number, to: number) => void;
};

interface Props {
  children: React.ReactNode;
}

const CardsContext = createContext<CardsContextType | undefined>(undefined);

export const CardsProvider = ({ children }: Props) => {
  const [listColumns, setListColumns] = useState<Columns[]>(Columns);

  function move(fromList: number, toList: number, from: number, to: number) {
    setListColumns(
      produce(listColumns, (draft) => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <CardsContext.Provider
      value={{
        listColumns,
        setListColumns,
        move,
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
