import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";

const SignIn = () => {
  const navigate = useNavigate();
  const [islogIn, setIsLogIn] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (formik.values.email === "") {
        errors.email = "Require ";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (formik.values.password === "") {
        errors.password = "Require";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W\S]{8,}$/i.test(
          values.password
        )
      ) {
        errors.password = "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.";
      }
      return errors;
    },
    onSubmit: (values) => {
      setIsLogIn(true);
      axiosInstance
        .post("/users/signin", values)
        .then((result) => {
          if (result.status === 200) {
            formik.resetForm();
            setIsLogIn(false);
            localStorage.setItem("token", result.data.token);
            console.log(result);
            const userRole = result.data.user.role;
            if (userRole === "user") {
              navigate("/user/dashboard");
            } else if (userRole === "dispatch") {
              navigate("/dispatch/dashboard");
            } else if (userRole === "admin") {
              navigate("/admin/dashboard");
            } else {
              alert("Role not recognized.");
            }
          } else {
            alert("Invalid email or password");
            setIsLogIn(false);
          }
        })
        .catch((err) => {
          alert(err.message || "Invalid Email or Password");
          setIsLogIn(false);
        });
    },
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="lg:mt-30 lg:mb-20 mb-24 my-62">
      {loading ? (
        <div>
          <div className="flex items-center justify-center h-screen" disabled>
            <div className="animate-spin h-40 w-40 border-t-4 border-green-900 rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center bg-white-500 mt-40 ">
          <form onSubmit={formik.handleSubmit}>
            <span className="shadow lg:px-5 py-6 px-10 bg-white rounded flex flex-col items-center justify-center">
              <div className="py-2">
                <input
                  type="email"
                  className="border border-black rounded bg-white-200 px-10 py-2"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                />
              </div>
              <small className="text-red-500">{formik.errors.email}</small>
              <div className="py-2 relative">
                <input
                  type={isPasswordVisible ? "text" : "password"} // Toggle input type
                  className="border border-black rounded bg-white-200 px-10 py-2"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                />
                {/* Eye Icon to Toggle Password Visibility */}
                <span
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {isPasswordVisible ? "👁️‍🗨️" : "👁️"}
                </span>
              </div>
              <small className="text-red-500">{formik.errors.password}</small>
              <div className="py-2">
                <button
                  type="submit"
                  className="bg-green-700 py-3 px-5 rounded text-white"
                  disabled={islogIn}
                >
                  {islogIn ? "Logging in..." : "Log in"}
                </button>
              </div>
            </span>
            <button className="pt-2">
              <small>Forgot password?</small>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;