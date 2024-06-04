import Link from "next/link";

export default function Logo() {
  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="w-[20px] h-[2px] bg-[#61616E]"></div>
      <h1>Adekunle</h1>
    </div>
  );
}
