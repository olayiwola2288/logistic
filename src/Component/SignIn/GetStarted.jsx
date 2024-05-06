// import * as yup from yup
import { useFormik } from "formik";
import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
const SignIn = () => {
  const formik = useFormik({
    initialValues: {
        firstName:"",
        lastName:"",
        email:"",
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
      return errors;
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
          <form action="">
            <span className="shadow lg:px-5 py-6 px-10 bg-[#ffffff] rounded flex flex-col items-center justify-center">
              <div className="py-2">
                <input
                  type="text"
                  className="border border-black rounded bg-[#f4f8fd] px-10 py-2"
                  placeholder="First name"
                  onChange={formik.handleChange}
                  name="firstName"
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  className="border border-black rounded bg-[#f4f8fd] px-10 py-2"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  name="lastName"
                />
              </div>
              <div className="py-2">
                <input
                  type="email"
                  className="border border-black rounded bg-[#f4f8fd] px-10 py-2"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  name="email"
                />
              </div>
              <small>{formik.errors.email}</small>
              <div className="py-2">
                <input
                  type="password"
                  className="border border-black rounded bg-[#f4f8fd] px-10 py-2"
                  placeholder="Note:-the password most have Minimum eight characters, at least one letter, one number and one special character:
  
                "
                  onChange={formik.handleChange}
                  name="password"
                />
              </div>

              <div className="py-2">
                <button
                  type="submit"
                  className="bg-green-700 py-3 px-5 rounded text-white"
                >
                  Submit
                </button>
              </div>
            </span>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;
