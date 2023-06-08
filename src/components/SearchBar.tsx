"use client";

import { useCardsContext } from "app/context/CardsProvider";
import Button from "components/Button";
import Input from "components/Input";
import React, { ChangeEvent, useState } from "react";
import { Columns } from "utils/cards";

// interface Props {
//   // setFilteredCards: (cards: CardItem[]) => void;
// }

export default function SearchBar(/* { setFilteredCards }: Props */) {
  const [searchInput, setSearchInput] = useState("");
  const { setListColumns } = useCardsContext();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);

    const searchParam = event.target.value;
    if (!searchParam) {
      return setListColumns(Columns);
    }

    return setListColumns(filterCard(searchParam));
  };

  const filterCard = (searchParam: string): Columns[] =>
    Columns.map((column) => {
      const searchName = searchParam.toLowerCase();
      const cards = column.cards.filter((card) =>
        card.title.toLowerCase().includes(searchName)
      );

      return {
        ...column,
        cards,
      };
    });

  return (
    <div className="flex gap-4 px-6">
      <Button>Filtrar</Button>
      <Input
        value={searchInput}
        onChange={handleSearch}
        placeholder="Busque por cards, assuntos ou responsáveis..."
      />
    </div>
  );
}
