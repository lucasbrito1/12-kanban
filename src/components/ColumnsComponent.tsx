import { useCardsContext } from "context/CardsProvider";
import Card from "components/Card";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useState } from "react";
import { Columns } from "utils/cards";

export default function ColumnsComponent() {
  const { listColumns, setListColumns } = useCardsContext();

  const handleOnDragEnd = (result: DropResult) => {
    ("");
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="column" direction="vertical" type="column">
        {(provided) => (
          <div
            className="flex gap-12 h-[60%]"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
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
                      <div className={`flex flex-col gap-6 px-6 scrollbar  `}>
                        {column.cards.map((card, index) => (
                          <Draggable
                            key={card.id}
                            draggableId={card.id.toString()}
                            index={index}
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
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
