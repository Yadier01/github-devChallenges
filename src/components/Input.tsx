import { SvgSearch } from "./SVGS";
interface Props {
  submitHandler: (e: any) => void;
  text: string;
  handleUserInput: (e: any) => void;
}
export const Input = ({ submitHandler, text, handleUserInput }: Props) => {
  return (
    <form
      className="w-1/4 mt-9 flex items-center bg-[#364153]  rounded-md p-1 gap-1"
      onSubmit={submitHandler}
    >
      <SvgSearch />
      <input
        value={text}
        type="text"
        placeholder="username"
        className="p-2 w-full bg-[#364153] text-gray-300"
        onChange={handleUserInput}
      />
      <button hidden></button>
    </form>
  );
};
