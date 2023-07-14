import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const App = () => {
  return (
    <div className="bg-[#0f0f0f]  flex flex-col xl:flex-row w-full">
      <div className="xl:max-w-[30%] w-full">
        <LeftSide />
      </div>
      <div className="xl:max-w-[70%] w-full ">
        <RightSide />
      </div>
    </div>
  );
};

export default App;
