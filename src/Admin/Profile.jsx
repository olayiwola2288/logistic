import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const result = await axiosInstance.get("users/me");
        console.log(result);
        setUserData(result.data.data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch user profile");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>
    <div className="flex items-center justify-center h-screen" disabled>
      <div className="animate-spin h-40 w-40 border-t-4 border-green-900 rounded-full"></div>
    </div>
  </div>;
  }

  return (
    <div className=" sm:m-auto lg:p-11 py-20 px-20 lg:m-auto m-10 shadow rounded">
      <h1 className=" text-center font-bold text-green-800"> Profile</h1>
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Role: {userData.role}</p>
      <p>id_number: {userData._id}</p>
    </div>
  );
};

export default Profile;
