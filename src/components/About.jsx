import { AiOutlineUser } from "react-icons/ai";

const About = () => {
  return (
    <div className="py-5  lg:px-20 xl:px-0 pl-3">
      <div className="flex items-center border w-[120px] justify-center rounded-full h-[35px]">
        <AiOutlineUser className="mr-2 text-white text-xl " />
        <h2 className="text-lg text-white">About</h2>
      </div>

      <div className="py-[5rem]">
        <h1 className="  text-[40px] xl:text-[58px] font-light max-w-[800px] lg:leading-[65px] leading-[55px] text-[#cecccc]  ">
          Every great design begin with an even{" "}
          <span className="text-green-500"> better story</span>{" "}
        </h1>

        <p className="text-[18px]  max-w-[700px] text-[#cecccc]   text-lg mt-7 leading-8">
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I have done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I am quietly confident, naturally curious,
          and perpetually working on improving my chopsone design problem at a
          time
        </p>
      </div>
    </div>
  );
};

export default About;
