import Tag from "components/Tag";
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Columns } from "utils/cards";

interface Props {
  card: (typeof Columns)[0]["cards"][0];
  index: number;
  listIndex: number;
  onMoveCard: (
    draggedListIndex: number,
    targetListIndex: number,
    draggedIndex: number,
    targetIndex: number
  ) => void;
}

export default function Card({ card, index, listIndex, onMoveCard }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "card",
    hover(item: Props) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      onMoveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { index, listIndex },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`rounded-lg p-6 w-full cursor-pointer shadow-card ${
        isDragging
          ? "border-2 border-dashed border-gray-100 bg-transparent shadow-none p-[22px]"
          : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col gap-[0.625rem] ${
          isDragging ? "opacity-0" : ""
        }`}
      >
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
