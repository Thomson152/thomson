import React from "react";
import {
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { LiaCommentSolid } from "react-icons/lia";
import { MdMiscellaneousServices } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="text-white fixed w-[50px] flex  right-12 top-[150px] h-[300px] bg-[#0f0f0f] border-[#646363] rounded-full border z-10">
      <div className=" flex flex-col space-y-6 items-center text-[#cecccc] pt-7 pl-4">
        <div className="">
          <AiOutlineHome className="text-xl" />
        </div>

        <div className="">
          <AiOutlineUser className="text-xl" />
        </div>

        <div className="">
          <MdMiscellaneousServices className="text-xl" />
        </div>

        <div className="">
          <GoProjectSymlink className="text-xl" />
        </div>

        <div className="">
          <LiaCommentSolid className="text-xl" />
        </div>

        <div className="">
          <AiOutlineContacts className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
