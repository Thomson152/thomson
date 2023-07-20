import { LiaCommentSolid } from "react-icons/lia";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <div className="py-10 xl:px-14 lg:px-36  px-5 mt-16">
      <div className="flex items-center border w-[145px] border-[#646363] text-[#cecccc] justify-center rounded-full h-[35px]">
        <LiaCommentSolid className="mr-2 text-white text-xl " />
        <h2 className="text-lg text-white">Testimonial</h2>
      </div>

      <div className="py-10">
        <h1 className="text-white lg:text-5xl text-4xl">
          Trusted by
          <span className="text-green-500"> Hundered Clients</span>{" "}
        </h1>
      </div>


      <Slider/>
    </div>
  );
};

export default Testimonial;
