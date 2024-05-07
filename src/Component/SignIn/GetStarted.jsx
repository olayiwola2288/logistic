import * as yup from" yup"
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"; 

const SignIn = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: () => {
      // Navigate to sign-in page or perform any other action here
      history.push("/signin"); // Change "/signin" to the path of your sign-in page
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
            <span className="shadow lg:px-5 py-6 px-10 bg-[#ffffff] rounded flex flex-col items-center justify-center">
              <div className="py-2">
                <input
                  type="text"
                  className="border border-black rounded bg-[#f4f8fd] px-10 py-2"
                  placeholder="First name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  name="firstName"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-red-500">{formik.errors.firstName}</small>
                ) : null}
              </div>
              <div className="py-2">
                <input
                  type="text"
                  className="border border-black rounded bg-[#f4f8fd] px-10 py-2"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  name="lastName"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <small className="text-red-500">{formik.errors.lastName}</small>
                ) : null}
              </div>
              <div className="py-2">
                <input
                  type="email"
                  className="border border-black rounded bg-[#f4f8fd] px-10 py-2"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name="email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-red-500">{formik.errors.email}</small>
                ) : null}
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
