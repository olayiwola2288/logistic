
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgetPassowrd() {
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
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
  
        return errors;
      },
      onSubmit: () => {
        navigate("/authentication");
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
        <form>
          <span className="shadow lg:px-5 py-6 px-10 bg-white rounded flex flex-col items-center justify-center">
            <div className="py-2">
              <small>{formik.errors.firstName}</small>
              <div className="py-2">
                <input
                  type="text"
                  className="border border-black rounded bg-[#f1f6f7] px-10 py-2"
                  placeholder="First Name"
                  onChange={formik.handleChange}
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
                  name="email"
                />
              </div>

              <div className=" flex justify-center ">
                <button
                  onClick={() => formik.handleSubmit()}
                  type="submit"
                  className="bg-green-700 py-3 px-5 rounded text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </span>
        </form>
      </div>
    )}
  </div>
  )
}

export default ForgetPassowrd


