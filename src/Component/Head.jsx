import {  Navbar } from "flowbite-react";
// import { Link } from "react-router-dom";
import img1 from "../assets/Viscio/logo.jpg";

const Head = () => {

  return (
    <div className="fixed top-0 z-10 w-[100%]">
      <Navbar fluid rounded>
        <img src={img1} width={90} />

        <div className="flex justify-between md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            className="text-white lg:text-green-800 lg:bg-white lg:hover:text-green-500 bg-green-700 rounded font-bold "
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/about"
            // to="/about"
            className="text-black hover:text-black lg:hover:text-green-800 font-bold"
          >
            About
          </Navbar.Link>
          <Navbar.Link
            href="/contact"
            className="text-black hover:text-black lg:hover:text-green-800 font-bold"
          >
            Contact
          </Navbar.Link>
          <Navbar.Link
            href="/faqs"
            className="text-black hover:text-black lg:hover:text-green-800 font-bold"
          >
            FAQS
          </Navbar.Link>
          <Navbar.Link
            href="/signin"
            className="text-black hover:text-black lg:hover:text-green-800 font-bold"
          >
            Order
          </Navbar.Link>
          <Navbar.Link
            href="/signin"
            className="text-black hover:text-black lg:hover:text-green-800 font-bold"
          >
            Price Checker
          </Navbar.Link>
          <div className="flex justify-center mt-10 lg:mt-0">
          <Navbar.Link
            href="/signin"
            className="mx-1 bg-green-700 text-white hover:bg-green-800 lg:bg-white  hover:text-white lg:hover:bg-green-800 lg:hover:text-white lg:text-black rounded lg:p-3 "
          >
           Sing-in
          </Navbar.Link>
          <Navbar.Link
            href="/form"
            className="mx-1 bg-green-700 text-white hover:bg-green-800 lg:bg-white  hover:text-white lg:hover:bg-green-800 lg:hover:text-white lg:text-black rounded lg:p-3 "
          >
            Sing-up
          </Navbar.Link>

          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Head;
