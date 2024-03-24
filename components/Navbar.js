import AvatarIcon from "@/public/svg/avatar.svg";
import MenuIcon from "@/public/svg/menu.svg";
import ShoppingCartIcon from "@/public/svg/shopping-Cart.svg";
import Image from "next/image";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image className="lg:hidden w-5 h-5" src={MenuIcon} alt="" />

          <Logo />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          className="hidden lg:block w-[18px] h-[18px]"
          src={AvatarIcon}
          alt="login acount avatar"
        />
        <Image
          src={ShoppingCartIcon}
          className="block w-5 h-5"
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
}

export default Navbar;
