import { Edit2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import profile from "assets/profile.png";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-6">
      <div className="sm:flex items-center gap-3">
        <p className="font-bold text-[2rem] text-black">Meu Kanban</p>
        <Edit2 className="text-gray-200" />
      </div>
      <Image src={profile} alt="" className="w-16 h-16 rounded-full" />
    </div>
  );
}
