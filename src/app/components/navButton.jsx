import { cn } from "../../../@/lib/utils"
import { usePathname } from "next/navigation";

export const NavButton = ({ Title, subTitle, bgcolor, href }) => {
  const pathname = usePathname();

  return (
    <button className={cn("border-0 outline-none bg-[#000000a6] cursor-pointer relative uppercase card text-[#000000a6]  w-[145px]  text-[0.85rem]  h-[45px]", {
      "border-2 border-slate-300": pathname.split('/')[1] === href.split('/')[1],
    })}>
      <div className={cn("btn__content  card flex items-center justify-center absolute top-[5px] shadow inset-[0.101rem] transition-all duration-500 font-cyberway  font-extrabold tracking-[0.3rem] hover:bg-[#fffbffdc]", bgcolor)}>{Title}</div>
      <span className={cn(" font-Orbitron btn__label  h-[16px] text-[0.5rem] absolute bottom-[-4px] right-[8%] px-[5px] transition duration-500 z-3", bgcolor)} > {subTitle}</span>
    </button >
  );
};

