import Navbar from "./Navbar";
import "../Responsive.css";
import Bg from "../Images/Bg.svg";
import Video from "../Images/video.svg";
import Lines from "../Images/3Lines.svg";
import Ellipse1 from "../Images/Ellipse 1.svg";
import Ellipse2 from "../Images/Ellipse 2.svg";
import Ellipse3 from "../Images/Ellipse 3.svg";
import Ellipse4 from "../Images/Ellipse 4.svg";

const Home = () => {
  return (
    <div>
      <img src={Bg} className="m-auto w-[100vw] absolute bg" />
      <Navbar />
      <div className="relative w-full flex flex-col items-center home">
        <div className="flex flex-row w-full items-center">
          <img src={Ellipse1} className="absolute left-8 ellipse1" />
          <h1 className="font-bold text-4xl  md:text-5xl lg:text-6xl text-center w-[60vw] lg:leading-[100%] xl:leading-[150%] m-auto mt-12 font-archivo ">
            <div className="inline-flex items-center">
              <span className="text-primary flex items-center">
                <img
                  src={Lines}
                  className="relative left-1 bottom-8 inline-block lines"
                />
                <span className="ml-[-10px]">Harnessing Technology for</span>
              </span>
            </div>{" "}
            Healthcare, Education, and{" "}
            <span className="text-primary">Beyond</span>.
          </h1>

          <img src={Ellipse2} className="absolute right-48 mt-12 ellipse2" />
        </div>
        <div className="flex flex-row w-[55vw] items-end button">
          <img src={Ellipse4} className="mb-10 ellipse4" />
          <button className="bg-primary text-white m-auto w-36 md:w-[170px] h-[50px] text-center rounded-3xl text-base md:text-lg font-medium mt-12 md:mb-24 sm:mb-20 font-archivo">
            Get Started
          </button>
          <img src={Ellipse3} className="ellipse3" />
        </div>
        <img src={Video} className="mb-28" />
      </div>
    </div>
  );
};

export default Home;
