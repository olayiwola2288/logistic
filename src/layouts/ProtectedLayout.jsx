import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get("/users/me")
      .then((result) => {
        console.log(result);
        if (result.data.data.role === "user") {
          navigate("user/dashboard");
        } else if (result.data.data.role === "dispatch") {
          navigate("dispatch/dashboard");
        } else if (result.data.data.role === "admin") {
          navigate("admin/dashboard");
        } else {
            console.log(result)
        //   navigate("signin");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        // navigate("signin");
        if (err.code === "ERR_BAD_REQUEST") return navigate("signin");
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return "Getting Information...";

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
