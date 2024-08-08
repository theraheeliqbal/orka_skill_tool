import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiEdit, BiMessageDetail } from "react-icons/bi";
import SearchBar from "../../navbar/SearchBar";
import TextIcon from "../../shared/TextIcon";
import { chatList } from "@/content/chats";
import ChatList from "./ChatList";

const Chats = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" relative">
        <BiMessageDetail className="text-xl sm:text-2xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="sm:w-80 max-h-96 overflow-y-auto bg-white p-4 rounded-lg shadow-lg absolute top-4 -right-5 ">
        <div className="flex items-center justify-between mb-4">
          <DropdownMenuLabel className="text-lg font-semibold">
            Chats
          </DropdownMenuLabel>
          <BiEdit size={20} className="text-gray-400 cursor-pointer" />
        </div>

        <SearchBar
          mainDivClassName="bg-gray-200 mb-4"
          inputClassName="bg-transparent py-1 placeholder:text-gray-500"
          inputProps={{ placeholder: "Search Messenger" }}
        />

        <div className="flex items-center justify-start gap-3 mb-4">
          <TextIcon
            label="All"
            className="bg-blue-300/40 p-2 rounded-xl"
            labelClassName="text-blue-600 font-semibold"
          />
          <div className="relative">
            <TextIcon
              label="Unread"
              className="bg-gray-300/40 p-2 rounded-xl"
              labelClassName="text-gray-600 font-semibold"
            />
            <div className="w-2 h-2 bg-blue-600 absolute rounded-full top-0 right-0"></div>
          </div>
        </div>

        <ChatList list={chatList} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Chats;
