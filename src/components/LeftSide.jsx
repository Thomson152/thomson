import nft from "../assets/nft.webp";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

import { FaRegEnvelope } from "react-icons/fa";

const LeftSide = () => {
  return (
    <div className="xl:fixed block bg-[#0f0f0f]  xl:max-w-[30%]  top-0 left-0 text-[#e9e7e7] lg:px-36 xl:px-5">
      <div className="border border-[#646363]  h-fit pb-16 px-7 py-5 rounded-lg">
        <div className="flex  justify-between items-center ">
          <h1 className="xl:text-[30px] text-[28px] font-sans font-bold">Thomson</h1>
          <h3 className="text-[20px] font-semibold">
            Fullstack <br /> Developer
          </h3>
        </div>

        <div className="mt-[2rem]  flex justify-center ">
          <img src={nft} className="w-fit h-[300px] rounded-3xl" />
        </div>

        <div className="mt-[2rem] ">
          <h3 className="text-[20px] text-center font-medium  text-[#cecccc] ">
            tomsinonyedikachi@gmail
          </h3>

          <h4 className="text-[18px] text-center font-medium  text-[#cecccc]  ">
            Base in Lagos Yaba, Nigeria
          </h4>

          <p className="   mt-2  text-[16px] text-center text-[#b8b5b5] font-semibold ">
            © 2022 Thomson. All Rights Reserved
          </p>
        </div>

        <div className="flex mt-3 justify-center space-x-4 ">
          <div className="border-2 xl:w-[40px] text-[#b8b5b5]  hover:border-green-500 xl:h-[40px] h-[50px] w-[50px]   rounded-full flex justify-center items-center">
            <AiOutlineTwitter className="text-xl hover:text-green-500" />
          </div>

          <div className="border-2 xl:w-[40px] w-[50px]  xl:h-[40px] hover:border-green-500 h-[50px] text-[#b8b5b5] rounded-full flex justify-center items-center">
            <AiOutlineInstagram className="text-xl hover:text-green-500" />
          </div>

          <div className="border-2 xl:h-[40px] xl:w-[40px] text-[#b8b5b5] h-[50px] w-[50px] hover:border-green-500    rounded-full flex justify-center items-center">
            <AiOutlineGithub className="text-xl hover:text-green-500" />
          </div>
        </div>

        <button
          className="py-3 w-[90%] xl:ml-4 ml-4 rounded-full xl:mt-4 mt-7 font-medium
         text-slate-900 text-[18px] bg-green-400 hover:bg-black hover:text-green-500 hover:border hover:border-green-500"
        >
          <div className="flex justify-center space-x-11 items-center ">
            <FaRegEnvelope className="mr-3 text-xl" />
            HIRE ME!
          </div>
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
