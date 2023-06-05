"use client";

import { Search } from "lucide-react";
import React, { ChangeEventHandler } from "react";

interface Props {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ placeholder, value, onChange }: Props) {
  return (
    <div className="bg-white w-full h-12 flex items-center gap-[10px] px-6 py-4 rounded-lg border-[0.7px] shadow-input">
      <Search className="text-black" />
      <input
        className="bg-transparent w-full outline-none placeholder-gray-100 text-black"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
