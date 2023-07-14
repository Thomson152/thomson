import { AiOutlineHome } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="py-[5rem]  xl:px-7 lg:px-36 px-4" 
    initial={{ y: 450}}
    animate={{ y: -10 }}
    transition={{ delay: 0.3, type: 'spring',  }}
    >
      <div className="flex justify-between ">
        <div className="w-[150px] h-[40px] text-[#cecccc] rounded-full  flex justify-center items-center border">
          <AiOutlineHome />
          <h6 className="text-[16px] ml-2">INTRODUCE</h6>
        </div>
        <div className="text-[#cecccc] border w-[50px] hidden  rounded-full xl:flex justify-center items-center h-[50px]">
          <TbMenu className="text-3xl" />
        </div>
      </div>

      <div className="py-[5rem]">
        <h1 className="xl:text-7xl lg:text-6xl text-[30px]    text-white font-normal  lg:leading-[90px] leading-[40px] ">
          Say Hi from <span className="text-green-400"> Thomson</span>, Frontend
          Designer and Developer
        </h1>
      </div>

      <div className="py-[2rem]">
        <p className="lg:text-lg text-[18px] xl:max-w-[40rem] lg:max-w-[36rem] max-w-[33rem] leading-7 tracking-wider text-[#cecccc] ">
          I design and code beautifully simple things and i love what i do. Just
          simple like that!
        </p>
      </div>

      <div className="py-[7rem] flex justify-between">
      <div className="flex justify-between w-[550px] ">
        <div className="">
          <h1 className="text-green-400 text-5xl lg:text-7xl">10+</h1>
          <p className="text-[16px] pt-7 text-[#cecccc]  max-w-[150px]">YEARS OF EXPERIENCE</p>
        </div>

        <div className="">
          <h1 className="text-green-400 text-5xl lg:text-7xl">182+</h1>
          <p className="text-[16px] pt-7 text-[#cecccc] max-w-[180px]">PROJECTS COMPLETED ON 15 COUNTRIES</p>
        </div>
      </div>
    </div>


     
    </motion.div>
  );
};

export default Home;
