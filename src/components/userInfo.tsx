export const UserInfo = ({
  des,
  info,
}: {
  des: string;
  info: string | number;
}) => {
  return (
    <span
      className={`flex gap-2 bg-[#111729] p-2 rounded-lg w-fit items-center `}
    >
      <p className="border-r border-[#4A5567] pr-4 text-[#4A5567] text-sm font-semibold ">
        {des}
      </p>
      <p className="text-white">{info}</p>
    </span>
  );
};
