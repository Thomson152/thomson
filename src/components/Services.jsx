import { MdDeveloperMode, MdMiscellaneousServices } from "react-icons/md";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";

const Services = () => {
  return (
    <div className=" py-10 xl:px-10 lg:px-20  px-5 mt-16">
      <div className="flex items-center border w-[120px] border-[#646363] text-[#cecccc] justify-center rounded-full h-[35px]">
        <MdMiscellaneousServices className="mr-2  text-white text-xl " />
        <h2 className="text-lg Inter text-white">Services</h2>
      </div>

      <div className="py-10">
        <h1 className="text-white lg:text- Inter text-4xl">
          My <span className="text-green-500"> Specializations</span>{" "}
        </h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-1">
        <div className="py-4 border text-white border-[#646363]  hover:border-green-500 
         xl:px-9 lg:px-3 px-5 xl:max-w-[800px] rounded-xl">
          
          <div className="flex flex-col-reverse ">
            <div className="mt-1">
              <h1 className="xl:text-2xl Inter lg:text-xl text-[22px] ">Tailwind CSS</h1>
              <p className="xl:max-w-[580px] leading-8 mt-2 text-[#cecccc]  Inter text-[16px]">
                Proficient in utilizing Tailwind CSS to create custom,
                responsive designs and styling components efficiently
              </p>
            </div>

            <div className="flex  justify-end">
              <BiLogoTailwindCss className="text-3xl text-green-500" />
            </div>
          </div>
        </div>

        <div className="py-4 border border-[#646363]  text-white xl:px-9 px-5 
        xl:max-w-[800px] hover:border-green-500 
         lg:max-w-[1000px] rounded-xl">
          <div className="flex   flex-col-reverse ">
            <div className="mt-1">
              <h1 className="xl:text-2xl lg:text-xl Inter text-[22px]">React Js</h1>
              <p className="lg:max-w-[600px] mt-2 Inter leading-8 text-[#cecccc]   text-[16px]">
                Expertise in developing dynamic web applications using React and
                its ecosystem (React Router, Redux, etc.).
              </p>
            </div>

            <div className="flex justify-end">
              <BiLogoReact className="text-3xl text-green-500" />
            </div>
          </div>
        </div>

        <div className="py-4 border border-[#646363]  hover:border-green-500  text-white xl:px-9 px-5 xl:max-w-[800px] lg:max-w-[1000px rounded-xl">
          <div className="flex   flex-col-reverse ">
            <div className="mt-1">
              <h1 className="xl:text-2xl Inter lg:text-xl text-[22px] ">Front-end Development</h1>
              <p className="lg:max-w-[640px] leading-8 mt-2 text-[#cecccc] Inter  text-[16px]">
                Strong understanding of HTML5, CSS3, and JavaScript, enabling
                the creation of visually appealing and interactive user
                interfaces. 
              </p>
            </div>

            <div className="flex justify-end">
              <MdDeveloperMode className="text-3xl text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
