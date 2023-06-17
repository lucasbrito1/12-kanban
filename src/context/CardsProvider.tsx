"use client";

import React, { createContext, useState, useContext } from "react";
import { Columns } from "utils/cards";

type CardsContextType = {
  listColumns: Columns[];
  setListColumns: React.Dispatch<React.SetStateAction<Columns[]>>;
  setColumnState: (cards: Columns) => void;
};

interface Props {
  children: React.ReactNode;
  setColumnState: (cards: Columns) => void;
}

const CardsContext = createContext<CardsContextType | undefined>(undefined);

export const CardsProvider = ({ children, setColumnState }: Props) => {
  const [listColumns, setListColumns] = useState<Columns[]>(Columns);

  return (
    <CardsContext.Provider
      value={{
        listColumns,
        setListColumns,
        setColumnState,
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
