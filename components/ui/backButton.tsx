import { useRouter } from "next/navigation";
import { IoIosArrowDropleft } from "react-icons/io";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex w-28 items-center gap-2 text-[#BFBFC6] dark:text-[#191921] hover:text-[#7e7e97] dark:hover:text-[#7e7e97] transition-all duration-300"
    >
      <IoIosArrowDropleft />
      Back
    </button>
  );
}
