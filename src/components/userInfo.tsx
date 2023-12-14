import React from "react";

export const UserInfo = ({
  des,
  info,
}: {
  des: string;
  info: string | number;
}) => {
  return (
    <span className={`flex gap-2 bg-[#111729] w-fit `}>
      <p className="border-r  pr-4">{des}</p>
      <p>{info}</p>
    </span>
  );
};
