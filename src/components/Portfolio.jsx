import { GoProjectSymlink } from "react-icons/go";
import img1 from "../assets/portfolio1.png";
// import img2 from "../assets/portfolio2.jpg";
// import img3 from "../assets/portfolio3.jpg";
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
      <div >
        <div className="">
            <img src={img1} className="max-w-[800px] grayscale-0 h-[420px] rounded-2xl"/>
        </div>
    
      </div>
    </div>
  );
};

export default Portfolio;
