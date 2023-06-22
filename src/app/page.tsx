"use client";

import ColumnsComponent from "components/ColumnsComponent";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import SideBar from "components/SideBar";
import { CardsProvider } from "context/CardsProvider";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className="bg-white-100 flex flex-col gap-8 w-full h-screen mt-1 rounded-tl-[2rem] pt-12 px-8 z-[100] lg:overflow-hidden overflow-auto scrollbar">
        <CardsProvider>
          <Header />
          <SearchBar />
          {winReady ? <ColumnsComponent /> : null}
        </CardsProvider>
      </div>
    </div>
  );
}
