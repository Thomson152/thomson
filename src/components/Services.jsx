import { MdDeveloperMode, MdMiscellaneousServices } from "react-icons/md";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";

const Services = () => {
  return (
    <div className=" py-10 xl:px-14 lg:px-36  px-5 mt-16">
      <div className="flex items-center border w-[120px] border-[#646363] text-[#cecccc] justify-center rounded-full h-[35px]">
        <MdMiscellaneousServices className="mr-2 text-white text-xl " />
        <h2 className="text-lg text-white">Services</h2>
      </div>

      <div className="py-10">
        <h1 className="text-white lg:text-5xl text-4xl">
          My <span className="text-green-500"> Specializations</span>{" "}
        </h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-1">
        <div className="py-10 border text-white border-[#646363]  hover:border-green-500 
         xl:px-9 lg:px-3 px-5 xl:max-w-[750px] max-w-[1000px] rounded-xl">
          
          <div className="flex justify-between">
            <div className="mt-6">
              <h1 className="lg:text-2xl  text-xl ">Tailwind CSS</h1>
              <p className="xl:max-w-[450px] leading-7 mt-2 text-[#cecccc]   text-[16px]">
                Proficient in utilizing Tailwind CSS to create custom,
                responsive designs and styling components efficiently
              </p>
            </div>

            <div className="">
              <BiLogoTailwindCss className="text-3xl text-green-500" />
            </div>
          </div>
        </div>

        <div className="py-10 border border-[#646363]  text-white lg:px-9 px-5 
        xl:max-w-[750px] hover:border-green-500 
         lg:max-w-[1000px] rounded-xl">
          <div className="flex justify-between">
            <div className="mt-6">
              <h1 className="lg:text-2xl  text-xl">React Js</h1>
              <p className="lg:max-w-[450px] mt-2 leading-7 text-[#cecccc]   text-[16px]">
                Expertise in developing dynamic web applications using React and
                its ecosystem (React Router, Redux, etc.).
              </p>
            </div>

            <div className="">
              <BiLogoReact className="text-3xl text-green-500" />
            </div>
          </div>
        </div>

        <div className="py-10 border border-[#646363]  hover:border-green-500  text-white lg:px-9 px-5 xl:max-w-[750px] lg:max-w-[1000px rounded-xl">
          <div className="flex  justify-between">
            <div className="mt-6">
              <h1 className="lg:text-2xl  text-xl ">Front-end Development</h1>
              <p className="lg:max-w-[500px] leading-7 mt-2 text-[#cecccc]   text-[16px]">
                Strong understanding of HTML5, CSS3, and JavaScript, enabling
                the creation of visually appealing and interactive user
                interfaces. 
              </p>
            </div>

            <div className="">
              <MdDeveloperMode className="text-3xl text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
