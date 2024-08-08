import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import React from "react";

const ChatList = ({ list }: any) => {
  return (
    <div>
      {list.map((chat: any) => (
        <DropdownMenuItem
          key={chat.id}
          className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md hover:border-none hover:outline-none cursor-pointer"
        >
          <Image
            src={chat.imageUrl}
            alt={`${chat.name}'s profile`}
            width={10}
            height={10}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-grow">
            <p className="text-sm font-semibold">{chat.name}</p>
            <p className="text-xs text-gray-500 truncate">{chat.message}</p>
          </div>
          <p className="text-xs text-gray-400">{chat.time}</p>
        </DropdownMenuItem>
      ))}
    </div>
  );
};

export default ChatList;
