import Card from "components/Card";
import React from "react";
import { useDrop } from "react-dnd";
import { CardItem } from "utils/cards";

interface Props {
  filteredCards: CardItem[];
  setFilteredCards: (cards: CardItem[]) => void;
}

export default function Content({ filteredCards, setFilteredCards }: Props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item: any) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id: number) => {
    setFilteredCards((prev) => {
      const mCard = prev.map((t) => {
        if (t.id === id) {
          return { ...t, state: filteredCards[0].state };
        }
        return t;
      });

      return mCard;
    });
  };

  return (
    <div className="flex gap-12 h-[60%]">
      {filteredCards.filter((card) => card.state === "A fazer").length ? (
        <div>
          <div className="px-6">
            <p className="py-6 text-black font-bold text-xl">A fazer</p>
          </div>
          <div
            ref={drop}
            className={`flex flex-col gap-6 px-6 scrollbar h-full pt-3 pb-3 overflow-auto overflow-x-hidden ${
              isOver ? "bg-slate-200" : ""
            }`}
          >
            {filteredCards
              .filter((card) => card.state === "A fazer")
              .map((card) => {
                return (
                  <div key={card.id}>
                    <Card
                      title={card.title}
                      content={card.content}
                      tag1={card.tag1}
                      tag2={card.tag2}
                      id={card.id}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      ) : null}

      {filteredCards.filter((card) => card.state === "Fazendo").length ? (
        <div>
          <div className="px-6">
            <p className="py-6 text-black font-bold text-xl">Fazendo</p>
          </div>
          <div
            ref={drop}
            className={`flex flex-col gap-6 px-6 scrollbar h-full pt-3 pb-3 overflow-auto overflow-x-hidden ${
              isOver ? "bg-slate-200" : ""
            }`}
          >
            {filteredCards
              .filter((card) => card.state === "Fazendo")
              .map((card) => {
                return (
                  <Card
                    key={card.id}
                    title={card.title}
                    content={card.content}
                    tag1={card.tag1}
                    tag2={card.tag2}
                    id={card.id}
                  />
                );
              })}
          </div>
        </div>
      ) : null}

      {filteredCards.filter((card) => card.state === "Feito").length ? (
        <div>
          <div className="px-6">
            <p className="py-6 text-black font-bold text-xl">Feito</p>
          </div>
          <div className="flex flex-col gap-6 px-6 scrollbar h-full pt-3 pb-3 overflow-auto overflow-x-hidden">
            {filteredCards
              .filter((card) => card.state === "Feito")
              .map((card) => {
                return (
                  <Card
                    key={card.id}
                    title={card.title}
                    content={card.content}
                    tag1={card.tag1}
                    tag2={card.tag2}
                    id={card.id}
                  />
                );
              })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
