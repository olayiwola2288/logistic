import { useEffect, useState } from "react";
import ShowOrder from "../Dashboard/ShowOrder";
import axiosInstance from "../../axiosInstance";
import Order from "./Order";

const Card = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/orders/my-orders")
      .then((response) => {
        console.log(response.data);
        // orders = [response.data]
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // console.log(orders);
  return (
    <div>
      <div className=" mx-auto mt-20 flex gap-5">
        <div className=" shadow rounded w-40 lg:w-80 lg:h-32 h-28 text-center ms-5 py-5">
          <h1 className=" text-[#E93BED] text-4xl font-bold">
            {orders?.length}
          </h1>
          <p className=" text-sm">Created Order</p>
        </div>
        <div className=" shadow rounded w-40 lg:w-80 lg:h-32 h-28 text-center py-5">
          <h1 className=" text-[#0BCE83] text-4xl font-bold">0</h1>
          <p className=" text-sm">Accepted Order</p>
        </div>
        <div className=" shadow rounded w-40 lg:w-80 lg:h-32 h-28 text-center me-5 py-5 ">
          <h1 className=" text-[#001B87] text-4xl font-bold">0</h1>
          <p className=" text-sm">Completed Order</p>
        </div>
      </div>
      <h1 className="text-center my-5">Order Details</h1>
      {orders.length > 0
        ? orders.map((order) => (
            <div className="space-y-4">
              <Order order={order} />
            </div>
          ))
        : "No Orders Available"}

      <ShowOrder />
    </div>
  );
};

export default Card;
