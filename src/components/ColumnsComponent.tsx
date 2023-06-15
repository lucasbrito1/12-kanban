import { useCardsContext } from "context/CardsProvider";
import Card from "components/Card";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";

export default function ColumnsComponent() {
  const { listColumns, setListColumns } = useCardsContext();

  const handleOnDragEnd = (result: DropResult) => {
    ("");
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex gap-12 h-[60%]">
        {listColumns.map((column, columnIndex) => (
          <Droppable
            key={columnIndex}
            droppableId={column.status}
            direction="vertical"
            type="column"
          >
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div className="px-6">
                  <p className="py-6 text-black font-bold text-xl">
                    {column.status}
                  </p>
                </div>
                <div className="flex flex-col gap-6 px-6 scrollbar h-full pt-3 pb-3 overflow-auto overflow-x-hidden">
                  {column.cards.map((card, cardIndex) => (
                    <Draggable
                      key={card.id}
                      draggableId={card.id.toString()}
                      index={cardIndex}
                    >
                      {(provided) => (
                        <Card
                          card={card}
                          innerRef={provided.innerRef}
                          draggableHandleProps={provided.dragHandleProps}
                          draggableProps={provided.draggableProps}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
