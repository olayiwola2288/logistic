import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import User from "./User";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((result) => {
        console.log(result);
        setUsers(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" m-auto">
      <div className="flex items-center justify-around bg-green-700">
        <p className="text-white font-medium">First Name</p>
        <p className="text-white font-medium">Last Name</p>
        <p className="text-white font-medium">Phone Number</p>
        <p className="text-white font-medium">Role</p>
        <p className="text-white font-medium">Action</p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          {users.map((user) => (
            <User key={user._id} details={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
