import { useCardsContext } from "app/context/CardsProvider";
import Tag from "components/Tag";
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Columns } from "utils/cards";

interface Props {
  card: (typeof Columns)[0]["cards"][0];
  index: number;
  listIndex: number;
}

export default function Card({ card, index, listIndex }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { move } = useCardsContext();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { index, listIndex },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop({
    accept: "card",
    hover(item: Props, monitor) {
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

      const targetSize = ref.current?.getBoundingClientRect();
      const targetCenter = targetSize
        ? (targetSize.bottom - targetSize.top) / 2
        : null;
      const draggedOffset = monitor.getClientOffset();
      const draggedTop =
        draggedOffset && targetSize ? draggedOffset.y - targetSize?.top : null;

      if (
        draggedIndex < targetIndex &&
        draggedTop !== null &&
        targetCenter !== null &&
        draggedTop < targetCenter
      ) {
        return;
      }

      if (
        draggedIndex > targetIndex &&
        draggedTop !== null &&
        targetCenter !== null &&
        draggedTop > targetCenter
      ) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`rounded-lg p-6 w-full shadow-card ${
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
