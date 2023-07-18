import { GoProjectSymlink } from "react-icons/go";
import img1 from "../assets/proshop.png";
import img2 from "../assets/pavypay.png";
import img3 from "../assets/primbase.png";
// import img4 from "../assets/portfolio4.jpg";
// import img5 from "../assets/portfolio5.png";

// const data = [
//   {
//     id: 1,
//     image: img1,
//     title: "Portfolio Design",
//     github: "https://github.com/Thomson152/portifolio-design/tree/master",
//     demo: "https://portfolio-design20.netlify.app/",
//   },
//   {
//     id: 2,
//     image: img2,
//     title: "Coaching Site",
//     github: "https://github.com/Thomson152/CoachingSite",
//     demo: "https://coaching24.netlify.app/",
//   },
//   {
//     id: 3,
//     image: img3,
//     title: "This is a portfolio item title",
//     github: "https//github.com",
//     demo: "",
//   },
//   {
//     id: 4,
//     image: img4,
//     title: "This is a portfolio item title",
//     github: "https//github.com",
//     demo: "",
//   },
//   {
//     id: 5,
//     image: img5,
//     title: "This is a portfolio item title",
//     github: "https//github.com",
//     demo: "",
//   },
// ];

const Portfolio = () => {
  return (
    <div className="py-10 xl:px-14 lg:px-36  px-5 mt-16">
      <div className="flex items-center border w-[135px] border-[#646363] text-[#cecccc] justify-center rounded-full h-[35px]">
        <GoProjectSymlink className="mr-2 text-white text-xl " />
        <h2 className="text-lg text-white">Portfolio</h2>
      </div>

      <div className="py-10">
        <h1 className="text-white lg:text-5xl text-4xl">
          Featured
          <span className="text-green-500"> Projects</span>{" "}
        </h1>
      </div>
      <div>
        <div className="mt-10 relative cursor-pointer">
          <img
            src={img1}
            className="grayscale-0 h-[420px] w-full rounded-2xl"
          />

          <div className="absolute flex space-x-2 top-[22rem] left-3 ">
            <div className="bg-slate-100  w-[100px] h-[40px] flex flex-wrap justify-center items-center rounded-full">
              <h2 className="text-black ">React Js</h2>
            </div>

            <div className="bg-slate-100 w-[100px] h-[40px] flex justify-center items-center rounded-full">
              <h2 className="text-black ">MongoDB</h2>
            </div>

            <div className="bg-slate-100 w-[100px] h-[40px] flex justify-center items-center rounded-full">
              <h2 className="text-black ">Express</h2>
            </div>

            <div className="bg-slate-100 w-[100px] h-[40px] lg:flex hidden justify-center items-center rounded-full">
              <h2 className="text-black ">Tailwind CSS</h2>
            </div>
          </div>

          <div className="text-white mt-5 text-2xl ">
            <a href="" className="hover:border-b-2">
              CozaStore Website
            </a>
          </div>
        </div>

        <div className="flex lg:flex-row space-y-16 lg:space-y-0 flex-col lg:space-x-4 mt-[5rem]">
          <div className="relative">
            <img src={img2} alt="" className="h-[420px] rounded-2xl" />
            <div className="absolute flex space-x-2 top-[22rem] left-3 ">
              <div className="bg-slate-100  w-[100px] h-[40px] flex flex-wrap justify-center items-center rounded-full">
                <h2 className="text-black ">React Js</h2>
              </div>

              <div className="bg-slate-100 w-[100px] h-[40px] flex justify-center items-center rounded-full">
                <h2 className="text-black ">Tailwind CSS</h2>
              </div>
            </div>

            <div className="text-white mt-5 text-2xl ">
              <a href="" className="hover:border-b-2">
                Pavypay LandingPage
              </a>
            </div>
          </div>

          <div className="relative ">
            <img src={img3} alt="" className="h-[420px] rounded-2xl " />

            <div className="absolute flex space-x-2 top-[22rem] left-3 ">
              <div className="bg-slate-100  w-[100px] h-[40px] flex flex-wrap justify-center items-center rounded-full">
                <h2 className="text-black ">React Js</h2>
              </div>

              <div className="bg-slate-100 w-[100px] h-[40px] flex justify-center items-center rounded-full">
                <h2 className="text-black ">Tailwind CSS</h2>
              </div>
            </div>

            <div className="text-white mt-5 text-2xl ">
              <a href="" className="hover:border-b-2">
                PrimeBase
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
