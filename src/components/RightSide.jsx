import About from "./About";
import Home from "./Home";
import Resume from "./Resume";

const RightSide = () => {
  return (
    <div className="overflow-auto w-full xl:max-w-[100%] bg-[#0f0f0f] ">
      <Home />
      <About />
      <Resume/>
    </div>
  );
};

export default RightSide;
