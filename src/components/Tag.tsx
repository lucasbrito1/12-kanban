import React from "react";

interface Props {
  children: string;
}

export default function Tag({ children }: Props) {
  return (
    <div className="bg-secondary-100 py-1 px-2 w-fit rounded-lg">
      <p className="text-primary font-medium text-xs">{children}</p>
    </div>
  );
}
