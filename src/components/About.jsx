import { AiOutlineUser } from "react-icons/ai";

const About = () => {
  return (
    <div className="py-5  lg:px-36 xl:px-14 px-5">
      <div className="flex items-center border-[#646363]  border w-[120px] justify-center rounded-full h-[35px]">
        <AiOutlineUser className="mr-2 text-white text-xl " />
        <h2 className="text-lg text-white">About</h2>
      </div>

      <div className="py-[5rem]">
        <h1 className="  text-[30px] xl:text-[58px] font-light max-w-[700px] lg:leading-[65px] leading-[40px] text-[#cecccc]  ">
          Every great design begin with an even{" "}
          <span className="text-green-500"> better story</span>{" "}
        </h1>

        <p className="text-[18px]  lg:max-w-3xl text-[#cecccc] text-left   text-lg mt-7 leading-8">
          Since embarking on my freelance design journey almost 8 years ago, I
          have had the privilege of working remotely for various agencies,
          providing consultation services for startups, and collaborating with
          exceptionally talented individuals to craft digital products that
          cater to both business and consumer needs. With a quiet confidence and
          insatiable curiosity, I continuously strive to enhance my skills,
          tackling design challenges one at a time, always pushing myself to
          deliver exceptional results.
        </p>
      </div>
    </div>
  );
};

export default About;
