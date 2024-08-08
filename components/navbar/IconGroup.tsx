import React from "react";
import { AiFillTrophy } from "react-icons/ai";
import { FiGrid, FiHeart, FiPlusSquare } from "react-icons/fi";
import TextIcon from "../shared/TextIcon";
import { IoMdMenu } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const IconGroup = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="hidden md:flex space-x-8">
        <TextIcon
          icon={<FiPlusSquare className="text-xl sm:text-2xl" />}
          label="Create"
          className="flex-col"
        />
        <TextIcon
          icon={<FiHeart className="text-xl sm:text-2xl" />}
          label="Followed PRO"
          className="flex-col"
        />
        <TextIcon
          icon={<AiFillTrophy className="text-xl sm:text-2xl" />}
          label="Matches"
          className="flex-col"
        />
        <TextIcon
          icon={<FiGrid className="text-xl sm:text-2xl" />}
          label="Admin"
          className="flex-col"
        />
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className=" relative">
            <IoMdMenu size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="overflow-y-auto bg-white p-4 rounded-lg shadow-lg absolute top-4 ">
            <div className="space-y-3">
              <TextIcon
                icon={<FiPlusSquare size={24} />}
                label="Create"
                className="space-x-3"
              />
              <TextIcon
                icon={<FiHeart size={24} />}
                label="Followed PRO "
                className="space-x-3"
              />
              <TextIcon
                icon={<AiFillTrophy size={24} />}
                label="Matches"
                className="space-x-3"
              />
              <TextIcon
                icon={<FiGrid size={24} />}
                label="Admin"
                className="space-x-3"
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default IconGroup;
