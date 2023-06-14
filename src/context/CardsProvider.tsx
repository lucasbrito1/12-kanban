"use client";

import React, { createContext, useState, useContext } from "react";
import { Columns } from "utils/cards";

type CardsContextType = {
  listColumns: Columns[];
  setListColumns: React.Dispatch<React.SetStateAction<Columns[]>>;
};

interface Props {
  children: React.ReactNode;
}

const CardsContext = createContext<CardsContextType | undefined>(undefined);

export const CardsProvider = ({ children }: Props) => {
  const [listColumns, setListColumns] = useState<Columns[]>(Columns);

  return (
    <CardsContext.Provider
      value={{
        listColumns,
        setListColumns,
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
