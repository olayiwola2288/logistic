import { useNavigate } from "react-router-dom";
const WhatWeDo = () => {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/signin");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:grid lg:grid-cols-3  gap-4 ">
        <button
          className=" lg:inline-block block text-center mt-5 cursor-pointer "
          onClick={handleSubmit}
        >
          <h1>Price Checker</h1>
          <p>Check estimated price of delivery</p>
        </button>
        <button
          className=" lg:inline-block block text-center mt-5 cursor-pointer"
          onClick={handleSubmit}
        >
          <h1 className="ms-10">Create Order</h1>
          <p className="ms-10">Make a logistics order</p>
        </button>
        <button
          className=" lg:inline-block block text-center mt-5 cursor-pointer"
          onClick={handleSubmit}
        >
          <h1>Fulfil Order</h1>
          <p>Fulfil a logistics order as a certified</p>
          <p>logistics operator.</p>
        </button>
      </div>
    </div>
  );
};

export default WhatWeDo;
