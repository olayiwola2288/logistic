import { useState, useEffect } from "react";
import img2 from "../assets/Viscio/Banner.png";
import WhatWeDo from "./WhatWeDo";
import HowItWork from "./HowItWork";
import Coverage from "./Coverage";
import Card from "./Card";
import Image from "./Image";
import AOS from "aos";
import "aos/dist/aos.css";

const Body = () => {
  AOS.init({
    duration: 1000,
    offset: 100,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with your actual data loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milliseconds (2 seconds) for demonstration purposes
  }, []);

  return (
    <div className="mt-40">
      {loading ? (
        <div>
          <div className="flex items-center justify-center h-screen" disabled>
            <div className="animate-spin h-40 w-40 border-t-4 border-green-900 rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="mt-40">
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-20 justify-center">
            <div className="lg:w-1/2 ">
              <h1 className="lg:text-6xl  text-4xl text-green-900 ms-10 font-bold">
                Deliver Package with Serenity Logistics
              </h1>
              <p className="mt-10 lg:me-40 ms-10">
                Serenity Logistics is a Reliable Logistics B2C & B2B platform
                that ensures safe delivery of your parcel(s) in real time. A
                tracking ID is attached on all orders, to keep sync with
                movement of your parcel(s).
              </p>
              <form className="mt-10 ms-10">
                <label
                  htmlFor="search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Track
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-1/2 ">
              <img
                src={img2}
                alt=""
                className="h-auto lg:max-w-lg transition-all duration-300 rounded-lg cursor-pointer "
              />
            </div>
          </div>
          <div>
            <h1 className="text-green-900 text-4xl text-center my-14 mx-10">
              What You Can Do With Serenity Logistics?
            </h1>
            <WhatWeDo />
            <h1 className="text-green-900 text-4xl text-center my-10  scroll-smooth hover:scroll-auto">
              How It Works
            </h1>
            <HowItWork />
            <Image />
            <h1 className="text-green-900 text-4xl text-center lg:mt-40 mt-10">
              Serenity Logistics Coverage Cities
            </h1>
            <Coverage />
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h1 className="text-green-900 text-4xl text-center mt-10 mx-5">
                What Serenity Logistics Customers Say
              </h1>
              <p className="text-center mt-5 mx-5">
                Take a dive into the reviews of what our user have to say about
                their experience at with Serenity Logistics
              </p>
            </div>
            <Card />
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
