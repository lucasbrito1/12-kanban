import { useCardsContext } from "context/CardsProvider";
import Card from "components/Card";
import { useCallback } from "react";

export default function ColumnsComponent() {
  const { listColumns, moveCard } = useCardsContext();

  const handleCardMove = useCallback(
    (
      draggedListIndex: number,
      targetListIndex: number,
      draggedIndex: number,
      targetIndex: number
    ) => {
      moveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
    },
    [moveCard]
  );

  return (
    <div className="flex gap-12 h-[60%]">
      {listColumns
        .filter((column) => column.cards.length)
        .map((column, listIndex) => {
          return (
            <div key={listIndex}>
              <div>
                <div className="px-6" key={column.status}>
                  <p className="py-6 text-black font-bold text-xl">
                    {column.status}
                  </p>
                </div>
                <div
                  className={`flex flex-col gap-6 px-6 scrollbar h-full pt-3 pb-3 overflow-auto overflow-x-hidden`}
                >
                  {column.cards.map((card, index) => (
                    <Card
                      key={card?.id}
                      card={card}
                      index={index}
                      listIndex={listIndex}
                      onMoveCard={handleCardMove}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
