import { useState, useEffect } from "react";
import img from "../assets/Viscio/Map.8adbcbf91e3bb0967d36.png";
import AOS from "aos";
import axios from "axios";

const Contact = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  AOS.init({
    duration: 1000,
    offset: 100,
  });

  let endpoint = "https://my-portfolio-backend-seven.vercel.app/help";

  const get = () => {
    if (fullName == "" || email == "" || organization == "" || message == "") {
      alert("Please fill all the fields");
    } else {
      let data = { fullName, email, organization, message };
      console.log(data);
      axios
        .post(endpoint, data)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });

      setFullname("");
      setEmail("");
      setOrganization("");
      setMessage("");
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <div className="flex items-center justify-center h-screen" disabled>
            <div className="animate-spin h-40 w-40 border-t-4 border-green-900 rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className=" mt-40">
          <h1 className="text-center text-green-800  mb-10 text-4xl">
            Contact Us
          </h1>

          <div
            data-aos="flip-up"
            id="Contact"
            className="bg-green-950 lg:flex justify-between mx-auto pb-10"
          >
            <div className=" my-auto mx-11">
              <h2 className=" text-white">Get in touch today</h2>
              <br />
              <small className=" text-white">+23468863456</small>
              <br />
              <small className=" text-white">support@visco.com.ng</small>
              <br />
              <small className=" text-white">
                Polystar 2nd Roundabout, Lekki Phase 1 105102, Lagos
              </small>
            </div>
            <div className="grid lg:grid-cols-2">
              <div className=" mt-10 lg:ms-28 ms-8">
                <div className="text-white">CONTACT us</div>
                <div className="my-2 w-80">
                  <label className="text-white" htmlFor="">
                    Full name
                  </label>{" "}
                  <br />
                  <input
                    className="border w-full rounded"
                    type="text"
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullName}
                    name="fullName"
                  />
                </div>
                <div className="my-2 w-80">
                  <label className="text-white" htmlFor="">
                    Email
                  </label>{" "}
                  <br />
                  <input
                    className="w-full rounded"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                  />
                </div>
                <div className="my-2 w-80">
                  <label className="text-white" htmlFor="">
                    Organization
                  </label>{" "}
                  <br />
                  <input
                    className="w-full rounded"
                    type="text"
                    onChange={(e) => setOrganization(e.target.value)}
                    value={organization}
                    name="organization"
                  />
                </div>
                <div className="my-2 w-80">
                  <label className="text-white" htmlFor="">
                    Message
                  </label>{" "}
                  <br />
                  <textarea
                    className="w-full rounded"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    name="message"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  onClick={get}
                  className="text-white w-80 rounded font-bold bg-red-500 p-2"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000">
            <img src={img} alt="" className=" mx-auto mb-24 mt-10 w-[90%] rounded" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
