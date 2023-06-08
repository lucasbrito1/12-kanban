import { useCardsContext } from "app/context/CardsProvider";
import Card from "components/Card";

export default function ColumnsComponent() {
  const { listColumns } = useCardsContext();

  return (
    <div className="flex gap-12 h-[60%]">
      {listColumns
        .filter((column) => column.cards.length)
        .map((card, index) => (
          <div key={index}>
            <div>
              <div className="px-6" key={card.status}>
                <p className="py-6 text-black font-bold text-xl">
                  {card.status}
                </p>
              </div>
              <div
                className={`flex flex-col gap-6 px-6 scrollbar h-full pt-3 pb-3 overflow-auto overflow-x-hidden`}
              >
                {card.cards.map((card) => {
                  return (
                    <Card
                      key={card.id}
                      card={card}
                      index={index}
                      listIndex={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
