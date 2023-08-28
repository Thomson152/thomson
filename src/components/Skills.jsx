import { GiSkills } from "react-icons/gi";
import { BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="py-10  xl:pl-10 lg:px-36  px-5 mt-16">
      <div className="flex items-center border w-[120px] border-[#646363] 
      text-[#cecccc] justify-center rounded-full h-[35px]">
        <GiSkills className="mr-2 text-white text-xl " />
        <h2 className="text-lg Inter text-white">Skills</h2>
      </div>

      <div className="py-10">
        <h1 className="text-white lg:text-5xl text-4xl">
          <span className="text-green-500 Inter"> My Advantages</span>{" "}
        </h1>
      </div>

      <div className="  grid lg:grid-cols-4 grid-cols-2 ">
        <div className="justify-center items-center flex flex-col">
          <div className="flex flex-col border hover:border-2 hover:border-green-500 lg:w-[150px] w-[130px]  rounded-full  h-[220px] justify-center items-center">
            <BiLogoReact className="lg:text-[5rem] text-[4rem] text-white" />
            <h1 className="lg:text-3xl text-2xl mt-5 text-green-500">70%</h1>
          </div>

          <p className="mt-3 text-white lg:text-[18px] text-[16px] Inter font-semibold">React Js</p>
        </div>

     

        <div className="justify-center  items-center flex flex-col">
          <div className="flex flex-col border hover:border-2 hover:border-green-500 lg:w-[150px] w-[130px] rounded-full  h-[220px] justify-center items-center">
            <BiLogoTailwindCss className="lg:text-[5rem] text-[4rem] text-white" />
            <h1 className="lg:text-3xl text-2xl mt-5 text-green-500">80%</h1>
          </div>

          <p className="mt-3 text-white lg:text-[18px] text-[16px] Inter font-semibold">Tailwind CSS</p>
        </div>


        <div className="justify-center  items-center flex mt-8 lg:mt-0 flex-col">
          <div className="flex flex-col border hover:border-2 hover:border-green-500 lg:w-[150px] w-[130px]  rounded-full  h-[220px] justify-center items-center">
            <BiLogoMongodb className="text-[5rem] text-white" />
            <h1 className="lg:text-3xl text-2xl mt-5 text-green-500">70%</h1>
          </div>

          <p className="mt-3 text-white lg:text-[18px] text-[16px] Inter font-semibold">MongoDB</p>
        </div>

        <div className="justify-center   items-center flex mt-8 lg:mt-0 flex-col">
          <div className="flex flex-col border hover:border-2 hover:border-green-500 lg:w-[150px] w-[130px] rounded-full  h-[220px] justify-center items-center">
            <BiLogoNodejs className="lg:text-[5rem] text-[4rem] text-white" />
            <h1 className="lg:text-3xl text-2xl mt-5 text-green-500">60%</h1>
          </div>

          <p className="mt-3 text-white lg:text-[18px] Inter text-[16px] font-semibold">Node Js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
