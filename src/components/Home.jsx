import { AiOutlineHome } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <motion.div
      className="py-[5rem]  xl:px-14 lg:px-36  px-5"
      
    >
      <div className="flex justify-between ">
        <div className="w-[150px] h-[40px] text-[#cecccc] rounded-full border-[#646363]  flex justify-center items-center border">
          <AiOutlineHome />
          <h6 className="text-[18px] ml-2">Introduce</h6>
        </div>
        <div className="text-[#cecccc] border w-[40px] hidden  rounded-full xl:flex justify-center items-center h-[40px]">
          <TbMenu className="text-2xl" />
        </div>
      </div>

      <div className="hidden xl:block">
        <Navbar/>
      </div>

      <div className="py-[5rem]">
        <h1 className="xl:text-7xl lg:text-6xl text-[37px]      text-white font-normal  lg:leading-[90px] leading-[40px] ">
          Say Hi from <span className="text-green-400"> Thomson</span>, Frontend
          Designer and Developer
        </h1>
      </div>

      <div className="py-[2rem]">
        <p className="lg:text-lg text-[18px] xl:max-w-[40rem] lg:max-w-[36rem] max-w-[30rem] leading-7 tracking-wider text-[#cecccc] ">
          I design and code beautifully simple things and I love what I do. Just
          simple like that!
        </p>
      </div>

      <div className="py-[7rem] flex justify-start">
        <div className="flex justify-between w-[550px] ">
          <div className="">
            <h1 className="text-green-400 text-3xl lg:text-6xl">4+</h1>
            <p className="text-[14px] pt-7 text-[#cecccc]  max-w-[130px]">
              YEARS OF EXPERIENCE
            </p>
          </div>

          <div className="">
            <h1 className="text-green-400 text-3xl lg:text-6xl">50+</h1>
            <p className="text-[14px] pt-7 text-[#cecccc] max-w-[150px]">
              PROJECTS COMPLETED 
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
