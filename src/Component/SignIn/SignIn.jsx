import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
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
        errors.password = "not strong well";
      }
      return errors;
    },
    onSubmit: () => {
      navigate("/dashboard");
    },
  });
  const handleForgetPassword = () => {
    navigate("/forget");
  };

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
          <form>
            <span className="shadow lg:px-5 py-6 px-10 bg-white rounded flex flex-col items-center justify-center">
              <div className="py-2">
                <input
                  type="email"
                  className="border border-black rounded bg-white-200 px-10 py-2"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  name="email"
                />
              </div>
              <small>{formik.errors.email}</small>
              <div className="py-2">
                <input
                  type="password"
                  className="border border-black rounded bg-white-200 px-10 py-2"
                  placeholder="Note:-the password most have Minimum eight characters, at least one letter, one number and one special character:
  
                "
                  onChange={formik.handleChange}
                  name="password"
                />
              </div>
              <small>{formik.errors.password}</small>
              <div className="py-2">
                <button
                  onClick={() => formik.handleSubmit()}
                  type="submit"
                  className="bg-green-700 py-3 px-5 rounded text-white"
                >
                  Submit
                </button>
              </div>
            </span>
            <button className="pt-2" onClick={handleForgetPassword}>
              <small>Forget password </small>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;
