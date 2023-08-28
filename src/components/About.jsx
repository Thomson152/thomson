import { AiOutlineUser } from "react-icons/ai";

const About = () => {
  return (
    <div className="py-5  lg:px-36 xl:px-10 px-5">
      <div className="flex items-center border-[#646363]  border w-[120px] justify-center rounded-full h-[35px]">
        <AiOutlineUser className="mr-2 text-white text-xl " />
        <h2 className="text-lg text-white">About</h2>
      </div>

      <div className="py-[5rem]">
        <h1 className="  text-[38px] xl:text-[48px] font-light Inter  lg:leading-[65px] leading-[47px] text-[#cecccc]  ">
           A Journey as a Passionate
          <span className="text-green-500"> Web Developer</span>{" "}
        </h1>

        <p className=" tracking-wider  lg:max-w-3xl text-[#cecccc] text-left Inter  text-[16px] mt-7 leading-9">
          Hello, I'm Thomson, an enthusiastic web developer with a strong
          dedication to crafting remarkable digital experiences. My journey in
          web development began with an insatiable curiosity to learn and
          create. Over the years, I've honed my skills in various front-end
          technologies like HTML, CSS, and JavaScript, allowing me to design
          visually stunning and user-friendly interfaces that engage visitors
          and drive conversions. On the back-end, I specialize in using Node.js
          and Express to build powerful web applications and APIs.
        </p>
      </div>
    </div>
  );
};

export default About;
