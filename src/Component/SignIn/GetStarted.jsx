import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";

const GetStarted = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      let errors = {};
      if (formik.values.firstName === "") {
        errors.firstName = "Required";
      } else if (!/^[A-Za-z]+$/.test(values.firstName)) {
        errors.firstName = "Invalid";
      }

      if (formik.values.lastName === "") {
        errors.lastName = "Required";
      } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
        errors.lastName = "Invalid";
      }

      if (values.email === "") {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (formik.values.phoneNumber === "") {
        errors.phoneNumber = "Required";
      } else if (
        !/^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3,4}[-.\s]?\d{4}$/.test(
          formik.values.phoneNumber
        )
      ) {
        errors.phoneNumber = "Invalid phone number format";
      }

      if (formik.values.password === "") {
        errors.password = "Require";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W\S]{8,}$/i.test(
          values.password
        )
      ) {
        errors.password = "not strong well";
      }

      if (formik.values.confirmPassword === "") {
        errors.confirmPassword = "Required";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
      return errors;
    },
    onSubmit: async (values) => {
      values.role = "";
      setIsRegistering(true);
      const result = await axiosInstance
        .post("users/signup", values)
        .catch((err) => {
          console.log(err);
          alert("Failed to Create User");
          setIsRegistering(false);
        });

      console.log(result);

      if (result.status === 201) {
        alert("User Created Successfully");
        formik.resetForm();
        setIsRegistering(false);
        navigate("/signin");
      } else {
        alert("Failed to Create User");
        setIsRegistering(false);
      }
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
        <div className="flex flex-col items-center justify-center bg-white-500 mt-40">
          <form onSubmit={formik.handleSubmit}>
            <span className="shadow lg:px-5 py-6 px-10 bg-white rounded flex flex-col items-center justify-center">
              <div className="py-2">
                <small>{formik.errors.firstName}</small>
                <div className="py-2">
                  <input
                    type="text"
                    className="border border-black rounded bg-[#f1f6f7] px-10 py-2"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    name="firstName"
                  />
                </div>
                <small>{formik.errors.lastName}</small>
                <div className="py-2">
                  <input
                    type="text"
                    className="border border-black rounded bg-[#f1f6f7] px-10 py-2"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    name="lastName"
                  />
                </div>
                <small>{formik.errors.email}</small>
                <div className="py-2">
                  <input
                    type="email"
                    className="border border-black rounded bg-[#f1f6f7] px-10 py-2"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    name="email"
                  />
                </div>

                <div className="py-2">
                  <small className="text-red-500">
                    {formik.errors.phoneNumber}
                  </small>
                  <div className="py-2">
                    <input
                      type="phone"
                      className="border border-black rounded bg-[#f1f6f7] px-10 py-2"
                      placeholder="Your phone number"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
                      name="phoneNumber"
                    />
                  </div>
                  <small className="text-red-500">
                    {formik.errors.password}
                  </small>
                  <div className="py-2">
                    <input
                      type="password"
                      className="border border-black rounded bg-[#f1f6f7] px-10 py-2"
                      placeholder="Create password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      name="password"
                    />
                  </div>
                  <small className="text-red-500">
                    {formik.errors.confirmPassword}
                  </small>
                  <div className="py-2">
                    <input
                      type="password"
                      className="border border-black rounded bg-[#f1f6f7] px-10 py-2"
                      placeholder="confirm password"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      name="confirmPassword"
                    />
                  </div>

                  <div className=" flex justify-center ">
                    <button
                      type="submit"
                      className="bg-green-700 py-3 px-5 rounded text-white"
                      disabled={isRegistering}
                    >
                      {isRegistering ? "Signing Up....." : "Sign Up"}
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </form>
        </div>
      )}
    </div>
  );
};

export default GetStarted;
