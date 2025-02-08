"use client";
import { MouseEventHandler, useState } from "react";

export default function CheckPublic({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const [flag, setFlag] = useState(false);
  return (
    <button
      className={`h-10 w-10 ${
        flag ? "bg-green-300" : "bg-white"
      } rounded-[5px] border-solid border-[5px] border-blue-500`}
      onClick={(e) => {
        e.preventDefault();
        setFlag(!flag);
        onClick(e);
      }}></button>
  );
}
