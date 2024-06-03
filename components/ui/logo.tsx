import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <div className="w-[20px] h-[2px] bg-[#61616E]"></div>
      <h1>Adekunle</h1>
    </Link>
  );
}
