import { useState } from "react";
import axiosInstance from "../../axiosInstance";

const User = ({ details }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMakingDispatch, setIsMakingDispatch] = useState(false);
  const handleDelete = () => {
    setIsDeleting(true);
    axiosInstance
      .delete(`/users/${details._id}`)
      .then((response) => {
        console.log(response.data);
        alert("User deleted successfully");
        setIsDeleting(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setIsDeleting(false);
        alert("You can't delete your account");
      });
  };

  const handleMakeDispatch = () => {
    setIsMakingDispatch(true);
    axiosInstance
      .put(`/users/${details._id}`, { role: "dispatch" })
      .then((response) => {
        console.log(response.data);
        alert("Dispatch created successfully");
        setIsMakingDispatch(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setIsMakingDispatch(false);
        alert("Error performing this action");
      });
  };
  return (
    <div className="shadow border w-full min-w-max">
      <div className="w-full grid grid-cols-5 h-10 bg-gray-100 hover:bg-gray-200 justify-between">
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {details.firstName}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {details.lastName}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {details.phoneNumber}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {details.role}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full justify-evenly">
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`p-1 rounded text-slate-100 ${
              isDeleting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            }`}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
          <button
            onClick={handleMakeDispatch}
            disabled={isDeleting}
            className={`p-1 rounded text-slate-100 ${
              isMakingDispatch
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            }`}
          >
            {isMakingDispatch ? "Making dispatch..." : "Make Dispatch"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default User;
