import About from "./About";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skills from "./Skills";
// import Resume from "./Resume";

const RightSide = () => {
  return (
    <div className="overflow-auto w-full xl:max-w-[100%] bg-[#0f0f0f] ">
      <Home />
      <About />
      {/* <Resume/> */}
      <Services/>
      <Skills/>
      <Portfolio/>
    </div>
  );
};

export default RightSide;
