import SearchBar from "./SearchBar";
import IconGroup from "./IconGroup";
import UserMenu from "./UserMenu";
import Link from "next/link";

import { CgProfile } from "react-icons/cg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <nav className="bg-orange-600 text-white p-4 flex justify-between items-center isolate sticky top-0 z-20">
      <div className="flex items-center justify-between">
        <Avatar className="w-10 h-10">
          <Link href={"/"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              <CgProfile className="w-full h-full" />
            </AvatarFallback>
          </Link>
        </Avatar>

        <SearchBar
          inputProps={{ placeholder: "Search" }}
          mainDivClassName="py-1 w-10 h-10 rounded-full lg:w-full lg:h-full lg:rounded-2xl justify-center"
          inputClassName="hidden lg:block"
        />
        <div className="md:hidden pt-1">
          <IconGroup />
        </div>
      </div>
      <div className="hidden md:block">
        <IconGroup />
      </div>
      <UserMenu />
    </nav>
  );
};

export default Navbar;
