import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="bg-[#0f0f0f]  flex flex-col xl:flex-row w-full">
      <div className="xl:max-w-[30%] w-full">
        <LeftSide />
      </div>
      <div className="xl:max-w-[70%] w-full ">
        <RightSide />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
