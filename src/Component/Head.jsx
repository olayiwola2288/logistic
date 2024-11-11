import { Navbar, Button } from "flowbite-react";
import img1 from "../assets/Viscio/logo.jpg";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signin");
  };
  const handleNavigation1 = () => {
    navigate("/get-started");
  };
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
            href="/order"
            className="text-black hover:text-black lg:hover:text-green-800 font-bold"
          >
            Order
          </Navbar.Link>
          <Navbar.Link
            onClick={() => handleNavigate()}
            className="text-black hover:text-black lg:hover:text-green-800 font-bold"
          >
            Price Checker
          </Navbar.Link>
          <div className="flex justify-center gap-4 mt-10 md:mt-0 lg:mt-0">
            <Button
              outline
              gradientDuoTone="greenToBlue"
              onClick={() => handleNavigate()}
            >
              Log in
            </Button>
            <Button
              outline
              gradientDuoTone="greenToBlue"
              onClick={() => handleNavigation1()}
            >
              Get started
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Head;
