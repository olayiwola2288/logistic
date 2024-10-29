import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import Order from "./Order";

const Card = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/orders/")
      .then((response) => {
        console.log(response.data);
        // orders = [response.data]
        setOrders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="m-auto">
      <h1 className="text-center my-5 font-bold text-green-800">
        Order Details
      </h1>
      <div className="md:w-[90%] border m-2  overflow-x-scroll">
        <div className="grid grid-cols-6  w-full min-w-max">
          <p className="px-2 border font-semibold ">senderName</p>
          <p className="px-2 border font-semibold ">senderPhone</p>
          <p className="px-2 border font-semibold ">Item</p>
          <p className="px-2 border font-semibold ">ReceiverName</p>
          <p className="px-2 border font-semibold ">ReceiverPhone</p>
          <p className="px-2 border font-semibold ">Status</p>
        </div>
        {orders.length > 0
          ? orders.map((order) => (
              <div key={order._id} className="space-y-4">
                <Order order={order} />
              </div>
            ))
          : "No Orders Available"}
      </div>
    </div>
  );
};

export default Card;
