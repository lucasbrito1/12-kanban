import { ListFilter } from "lucide-react";
import React from "react";

interface Props {
  children: string;
}

export default function Button({ children }: Props) {
  return (
    <button className="bg-primary flex px-8 py-3 text-white gap-2 items-center rounded-[5px] text-sm">
      <ListFilter size={24} />
      {children}
    </button>
  );
}
