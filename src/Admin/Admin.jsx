import { Sidebar } from "flowbite-react";
import { useState, useEffect } from "react";
import img1 from "../../public/logo-removebg-preview.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FiAlignJustify } from "react-icons/fi";
import { ImUser } from "react-icons/im";
import { FaWallet } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineBrowserUpdated } from "react-icons/md";

import Card from "./Card";
import axiosInstance from "../../axiosInstance";
import ManageUsers from "./ManageUsers";
import Profile from "./Profile";

const Admin = () => {
  // const [addUserVisible, setAddUserVisible] = useState(false);
  const [visible, setVisible] = useState(null);
  const [visiblePage, setVisiblePage] = useState(false);
  // const [visibleProfile, setVisibleProfile] = useState(false);
  useEffect(() => {
    axiosInstance
      .get("users/me")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      if (newScreenWidth < 1024) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className=" lg:flex">
      <div className="flex justify-between px-8 py-2 bg-green-800 lg:bg-white lg:py-0 lg:px-0">
        <img src={img1} alt="" className=" w-[20%] lg:hidden" />
        <button
          onClick={handleToggle}
          className=" text-white hover:text-green-600  lg:hidden"
        >
          <FiAlignJustify className=" text-2xl" />
        </button>
      </div>
      {visible && (
        <Sidebar className=" sidebar h-screen w-64">
          <div className=" bg-green-800 h-full overflow-y-auto overflow-x-hidden rounded px-3 py-4">
            <Sidebar.Items className="">
              <Sidebar.ItemGroup className=" ">
                <img src={img1} alt="" className=" hidden lg:block" />
                <Sidebar.Item
                  href="#"
                  className=" text-white hover:text-green-700"
                >
                  <button
                    onClick={() => setVisiblePage("add-user")}
                    className=" flex gap-5 my-4"
                  >
                    <p className=" text-3xl">
                      {" "}
                      <FaRegAddressBook />
                    </p>
                    <p> Add User </p>
                  </button>
                </Sidebar.Item>

                <Sidebar.Item
                  href="#"
                  className=" text-white hover:text-green-700"
                >
                  <button
                    onClick={() => setVisiblePage("manage-users")}
                    className=" flex gap-5 my-4"
                  >
                    <p className=" text-2xl">
                      <MdOutlineBrowserUpdated />
                    </p>
                    <p> Manage users </p>
                  </button>
                </Sidebar.Item>

                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <button
                    onClick={() => setVisiblePage("order-list")}
                    className=" flex gap-5 my-4 "
                  >
                    <p className=" text-2xl">
                      <FaWallet />
                    </p>
                    <p> Check order list </p>
                  </button>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <button onClick={() => setVisiblePage("Profile")} className=" flex gap-5 my-4">
                    <p className=" text-2xl">
                      <ImUser />
                    </p>
                    <p> Profile</p>
                  </button>
                </Sidebar.Item>

                <Sidebar.Item
                  href="https://logistic-azure.vercel.app/"
                  className="text-green-900 hover:text-green-700 text-center mt-11 bg-gray-50"
                >
                  <div className=" flex gap-5 ">
                    <HiOutlineArrowNarrowRight />
                    <p> Logout </p>
                  </div>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
        </Sidebar>
      )}

      {visiblePage === "order-list" && <Card />}
      {visiblePage === "manage-users" && <ManageUsers />}
      {visiblePage === "update-user" && <div>Update User Page</div>}
      {visiblePage === "delete-user" && <div>Delete User Page</div>}
      {visiblePage === "Profile" && <Profile/>}
    </div>
  );
};

export default Admin;
