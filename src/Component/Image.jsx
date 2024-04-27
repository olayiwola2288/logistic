import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/Viscio/Apple playstore.png";
import img2 from "../assets/Viscio/Google appstore.png";
import img3 from "../assets/Viscio/Phone map.png";

const Image = () => {
  AOS.init({
    duration: 1000,
    offset: 100,
  });
  return (
    <div className=" relative mt-10">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" bg-green-800 rounded lg:h-[300px] h-[400px] lg:mx-20 mx-3"
      >
        <h1
          className="text-white font-bold lg:text-4xl lg:ms-20 ms-20 pt-64 lg:pt-20"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Download Serenity Logistics
        </h1>
        <p className="text-white lg:ms-20 ms-8">
          To Send your package and Become a driver
        </p>
        <div className="flex mt-5">
          <button>
            <img src={img1} alt="" className="h-10 w-20 ms-20" />
          </button>
          <button>
            <img src={img2} alt="" className="h-10 w-20 ms-5" />
          </button>
        </div>
      </div>
      <img
        src={img3}
        alt=""
        className="lg:w-[250px] w-[100px] lg:-top-1/4 top-10 left-1/3 lg:left-2/3 lg:right-10 absolute "
        data-aos="zoom-in"
        data-aos-duration="1000"
      />
    </div>
  );
};

export default Image;
