"use client";

import { CardsProvider } from "context/CardsProvider";
import { useCardsContext } from "context/CardsProvider";
import logo from "assets/logo.svg";
import ColumnsComponent from "components/ColumnsComponent";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import { Cog, FileText, Tablet, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-44 pl-9 pr-7 pt-8">
        <Image src={logo} alt="" />
        <div className="mt-16 flex flex-col gap-9">
          <div className="flex items-center gap-4 text-white">
            <Tablet size={20} />
            <p className="font-bold">Boards</p>
          </div>
          <div className="flex items-center gap-4 text-secondary">
            <Users size={20} />
            <p>Equipes</p>
          </div>
          <div className="flex items-center gap-4 text-secondary">
            <FileText size={20} />
            <p>Relatórios</p>
          </div>
          <div className="flex items-center gap-4 text-secondary">
            <Cog size={20} />
            <p>Ajustes</p>
          </div>
        </div>
      </div>

      <div className="bg-white-100 flex flex-col gap-8 w-full h-screen mt-1 rounded-tl-[2rem] pt-12 px-8 overflow-hidden">
        <Header />
        <SearchBar />
        <ColumnsComponent />
      </div>
    </div>
  );
}
