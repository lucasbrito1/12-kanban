import Card from "components/Card";
import Columns from "components/ColumnsComponent";
import React from "react";
import { ConnectDropTarget, useDrop } from "react-dnd";
import { CARDS, CardItem } from "utils/cards";

interface Props {
  status: string;
}

export default function Content({ status }: Props) {
  return (
    <div className="">
      <Columns />
    </div>
  );
}
