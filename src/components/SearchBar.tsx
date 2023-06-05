"use client";

import Button from "components/Button";
import Input from "components/Input";
import React, { ChangeEvent, useState } from "react";
import { CARDS, CardItem } from "utils/cards";

interface Props {
  setFilteredCards: (cards: CardItem[]) => void;
}

export default function SearchBar({ setFilteredCards }: Props) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);

    const searchParam = event.target.value;
    if (!searchParam) {
      return setFilteredCards(CARDS);
    }

    return setFilteredCards(filterCard(searchParam));
  };

  const filterCard = (searchParam: string) =>
    CARDS.filter((card) => {
      const searchName = searchParam.toLowerCase();
      const name = card.title.toLowerCase();

      return name.includes(searchName);
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
