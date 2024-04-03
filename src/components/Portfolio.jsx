import { GoProjectSymlink } from "react-icons/go";
import img1 from "../assets/molla.png";
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
    <div className="py-10 xl:px-10 lg:px-36  px-5 mt-16">
      <div className="flex items-center border w-[135px] border-[#646363] text-[#cecccc] justify-center rounded-full h-[35px]">
        <GoProjectSymlink className="mr-2 text-white Inter text-xl " />
        <h2 className="text-lg text-white">Portfolio</h2>
      </div>

      <div className="py-10">
        <h1 className="text-white lg:text-5xl Inter text-4xl">
          Featured
          <span className="text-green-500"> Projects</span>{" "}
        </h1>
      </div>
      <div className="flex flex-col space-y-11">
        <a  href="https://molla-frontend.vercel.app/" className="mt-10 relative  cursor-pointer">
          <img
            src={img1}
            className="grayscale-0 lg:aspect-[12/6] aspect-[12/8] rounded "
          />

          <div  className="text-white mt-3 lg:text-2xl text-[18px] ">
            <a
              href="https://molla-frontend.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:border-b-2 Inter text-[18px] lg:text-[20px]"
            >
              Molla Ecommerce
            </a>
          </div>
        </a>

        <a href="https://prime-base.vercel.app" className="relative cursor-pointer   mt-16">
          <img src={img3} alt="" className=" md:aspect-[12/6] aspect-[12/8] rounded " />

          <div className="text-white mt-5 lg:text-2xl text-[18px] ">
            <a
              href="https://prime-base.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:border-b-2 Inter text-[18px] lg:text-[20px]"
            >
              PrimeBase
            </a>
          </div>
        </a>

        <a  href="https://pavypay-landing-page.vercel.app" className="relative cursor-pointer mt-16">
          <img src={img2} alt="" className="md:aspect-[12/6] aspect-[12/8] rounded " />

          <div
            className="text-white  mt-3 
            lg:text-2xl text-[18px] "
          >
            <a
              href="https://pavypay-landing-page.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:border-b-2 Inter text-[18px] lg:text-[20px]"
            >
              Pavypay LandingPage
            </a>
          </div>
        </a>

     
      </div>
    </div>
  );
};

export default Portfolio;
