"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cog, FileText, Menu, Tablet, Users } from "lucide-react";
import logo from "assets/logo.svg";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${isOpen ? "w-10 pl-2" : "w-44 pl-9"} pr-7 pt-8 duration-300`}
    >
      <div className="flex flex-col gap-8">
        <Menu className="text-white cursor-pointer" onClick={handleOpenMenu} />
        {isOpen ? "" : <Image src={logo} alt="" />}
      </div>
      <div
        className={`${
          isOpen
            ? "mt-16 flex flex-col gap-9 absolute"
            : "mt-16 flex flex-col gap-9"
        }`}
      >
        <div className="flex items-center gap-4 text-white cursor-pointer hover:text-white">
          <Tablet size={20} />
          <p className="font-bold">Boards</p>
        </div>
        <div className="flex items-center gap-4 text-secondary cursor-pointer hover:text-white">
          <Users size={20} />
          <p>Equipes</p>
        </div>
        <div className="flex items-center gap-4 text-secondary cursor-pointer hover:text-white">
          <FileText size={20} />
          <p>Relatórios</p>
        </div>
        <div className="flex items-center gap-4 text-secondary cursor-pointer hover:text-white">
          <Cog size={20} />
          <p>Ajustes</p>
        </div>
      </div>
    </div>
  );
}
