import { FiBell, FiPlusSquare } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BiMenuAltRight } from "react-icons/bi";

import Chats from "../usermenu/chat/Chats";
import { CgProfile } from "react-icons/cg";

const UseMenu = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-5">
      <FiPlusSquare className="text-xl sm:text-2xl" />
      <Chats />
      <FiBell className="text-xl sm:text-2xl" />
      <BiMenuAltRight className="text-xl sm:text-2xl" />

      <Avatar className="w-10 h-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>
          <CgProfile className="w-full h-full" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UseMenu;
