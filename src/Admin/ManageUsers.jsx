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
    <div className="flex items-center justify-between">
      <div>
        {users.map((user) => (
          <User key={user._id} details={user} />
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
