import { useRouter } from "next/navigation";
import { IoIosArrowDropleft } from "react-icons/io";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="flex w-28 items-center gap-2 text-[#BFBFC6] dark:text-[#7a7a8a] hover:text-[#7e7e97] dark:hover:text-[#5b5b6d] transition-all duration-300"
    >
      <IoIosArrowDropleft />
      Go Home
    </button>
  );
}
