import Tag from "components/Tag";
import React from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";
import { Columns } from "utils/cards";

interface Props {
  card: (typeof Columns)[0]["cards"][0];
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  draggableHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

export default function Card({
  card,
  innerRef,
  draggableHandleProps,
  draggableProps,
}: Props) {
  return (
    <div
      className="rounded-lg p-6 w-full shadow-card"
      {...draggableHandleProps}
      {...draggableProps}
      ref={innerRef}
    >
      <div className="flex flex-col gap-[0.625rem]">
        <p className="font-bold text-sm text-black">{card.title}</p>
        <p className="font-medium text-sm text-gray-300">{card.content}</p>
        <div className="flex gap-2">
          {card.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
