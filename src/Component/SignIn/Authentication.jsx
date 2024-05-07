import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      let errors = {};
      if (formik.values.password === "") {
        errors.password = "Require";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W\S]{8,}$/i.test(
          values.password
        )
      ) {
        errors.password = "not strong well";
      }
      
      return errors;
    },
    onSubmit: () => {
      navigate("/form");
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
                    type="number"
                    className="border border-black rounded bg-[#f1f6f7] px-10 py-2"
                    placeholder="Your phone number"
                    onChange={formik.handleChange}
                    name="phoneNumber"
                  />
                </div>
                <small>{formik.errors.lastName}</small>
                <div className="py-2">
                  <input
                    type="password"
                    className="border border-black rounded bg-[#f1f6f7] px-10 py-2"
                    placeholder="Create password"
                    onChange={formik.handleChange}
                    name="password"
                  />
                </div>
                <small>{formik.errors.email}</small>
                <div className="py-2">
                  <input
                    type="password"
                    className="border border-black rounded bg-[#f1f6f7] px-10 py-2"
                    placeholder="confirm password"
                    onChange={formik.handleChange}
                    name="confirmPassword"
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
  );
}

export default Authentication