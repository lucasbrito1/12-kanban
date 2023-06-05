import Tag from "components/Tag";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useDrag, useDrop } from "react-dnd";

interface Props {
  title: string;
  content: string;
  tag1: string;
  tag2: string;
  id?: number;
}

export default function Card({ title, content, tag1, tag2, id }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="bg-white rounded-lg p-6 w-full flex flex-col gap-[0.625rem] shadow-card"
    >
      <p className="font-bold text-sm text-black">{title}</p>
      <p className="font-medium text-sm text-gray-300">{content}</p>
      <div className="flex gap-2">
        <Tag>{tag1}</Tag>
        {tag2 ? <Tag>{tag2}</Tag> : ""}
      </div>
    </div>
  );
}
