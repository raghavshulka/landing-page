import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../public/Vector.svg";
import logo2 from "../public/vector2.svg";
export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image className={cn("size-7 w-7", className)} src={logo2} alt="logo" />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <Image className={cn("size-7 w-7", className)} src={logo} alt="logo" />
  );
};
